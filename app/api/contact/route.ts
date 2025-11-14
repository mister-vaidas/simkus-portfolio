import { NextRequest, NextResponse } from "next/server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const sesRegion = process.env.SES_REGION!;
const sesAccessKeyId = process.env.SES_ACCESS_KEY_ID!;
const sesSecretAccessKey = process.env.SES_SECRET_ACCESS_KEY!;
const sesFromEmail = process.env.CONTACT_FROM_EMAIL!;
const sesToEmail = process.env.CONTACT_TO_EMAIL!;
const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY!;

const sesClient = new SESClient({
  region: sesRegion,
  credentials: {
    accessKeyId: sesAccessKeyId,
    secretAccessKey: sesSecretAccessKey,
  },
});

async function verifyRecaptcha(token: string, remoteIp?: string | null) {
  if (!recaptchaSecretKey) return false;

  const params = new URLSearchParams();
  params.append("secret", recaptchaSecretKey);
  params.append("response", token);
  if (remoteIp) params.append("remoteip", remoteIp);

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) return false;
  const data = (await res.json()) as { success: boolean; score?: number };
  return data.success === true;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      surname,
      company,
      position,
      email,
      phone,
      message,
      recaptchaToken,
    } = body;

    if (!name || !surname || !email || !phone || !message || !recaptchaToken) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const remoteIp = req.headers.get("x-forwarded-for") ?? null;
    const isHuman = await verifyRecaptcha(recaptchaToken, remoteIp);
    if (!isHuman) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const subject = `New contact from ${name} ${surname} – simkus.co.uk`;
    const textBody = `
New contact form submission:

Name: ${name} ${surname}
Email: ${email}
Phone: ${phone}
Company: ${company || "-"}
Position: ${position || "-"}

Message:
${message}
`;

    const htmlBody = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name} ${surname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Position:</strong> ${position || "-"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    const command = new SendEmailCommand({
      Destination: {
        ToAddresses: [sesToEmail],
      },
      Message: {
        Subject: { Data: subject },
        Body: {
          Text: { Data: textBody },
          Html: { Data: htmlBody },
        },
      },
      Source: sesFromEmail,
      ReplyToAddresses: [email],
    });

    await sesClient.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
