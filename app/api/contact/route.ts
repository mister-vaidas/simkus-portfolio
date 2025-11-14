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

function formatReason(reason: string): string {
  switch (reason) {
    case "job-opportunity":
      return "Job opportunity";
    case "freelance-project":
      return "Freelance / project enquiry";
    case "collaboration":
      return "Collaboration / partnership";
    case "technical-question":
      return "Technical question";
    case "other":
      return "Other";
    default:
      return reason;
  }
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
      reason,
      recaptchaToken,
    } = body;

    if (
      !name ||
      !surname ||
      !email ||
      !phone ||
      !message ||
      !reason ||
      !recaptchaToken
    ) {
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

    const formattedReason = formatReason(reason);

    const subject = `New contact: ${formattedReason} – ${name} ${surname}`;
    const textBody = `
New contact form submission:

Name: ${name} ${surname}
Email: ${email}
Phone: ${phone}
Company: ${company || "-"}
Position: ${position || "-"}
Reason: ${formattedReason}

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
      <p><strong>Reason:</strong> ${formattedReason}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    // 1) Email to you
    const toOwner = new SendEmailCommand({
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

    await sesClient.send(toOwner);

    // 2) Confirmation email to sender
    const confirmSubject = `Thank you for contacting Vaidas Simkus`;
    const confirmText = `
Hi ${name},

Thank you for reaching out and sending your message via simkus.co.uk.

I've received your enquiry (${formattedReason}) and will get back to you as soon as I can.

Here is a copy of your message:

${message}

Best regards,
Vaidas
`;

    const confirmHtml = `
      <p>Hi ${name},</p>
      <p>Thank you for reaching out and sending your message via <strong>simkus.co.uk</strong>.</p>
      <p>I've received your enquiry (<strong>${formattedReason}</strong>) and will get back to you as soon as I can.</p>
      <p>Here is a copy of your message:</p>
      <blockquote style="border-left:3px solid #334155;padding-left:12px;color:#e5e7eb;">
        ${message.replace(/\n/g, "<br />")}
      </blockquote>
      <p>Best regards,<br/>Vaidas</p>
    `;

    const toSender = new SendEmailCommand({
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: { Data: confirmSubject },
        Body: {
          Text: { Data: confirmText },
          Html: { Data: confirmHtml },
        },
      },
      Source: sesFromEmail,
      ReplyToAddresses: [sesToEmail],
    });

    try {
      await sesClient.send(toSender);
    } catch (err) {
      console.error("Failed to send confirmation email:", err);
      // We still return success because your main notification was sent.
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
