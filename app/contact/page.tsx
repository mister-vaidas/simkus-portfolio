"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
    const [formState, setFormState] = useState<FormState>("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        company: "",
        position: "",
        email: "",
        phone: "",
        message: "",
    });

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErrorMessage(null);

        if (!recaptchaToken) {
            setErrorMessage("Please confirm you are not a robot.");
            return;
        }

        setFormState("submitting");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken,
                }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Failed to send message");
            }

            setFormState("success");
            setFormData({
                name: "",
                surname: "",
                company: "",
                position: "",
                email: "",
                phone: "",
                message: "",
            });
            setRecaptchaToken(null);
        } catch (err: any) {
            console.error(err);
            setErrorMessage(err.message || "Something went wrong. Please try again.");
            setFormState("error");
        }
    }

    return (
        <div className="relative overflow-hidden bg-slate-950 pb-16 pt-10 text-slate-100">
            {/* Background visuals */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
                <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.8)_0,_transparent_55%)]" />
            </div>

            <Container className="relative space-y-10">
                {/* Header */}
                <header className="space-y-3">
                    <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-sky-300/90">
                        Get in touch
                    </p>
                    <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                        Contact & collaboration
                    </h1>
                    <p className="max-w-2xl text-sm text-slate-300">
                        Whether you&apos;re looking for a developer for your next project,
                        need help with a web app or cloud setup, or just want to connect –
                        feel free to reach out using the form or contact details below.
                    </p>
                </header>

                {/* Content layout */}
                <div className="grid gap-10 lg:grid-cols-[1.1fr,1.5fr] lg:items-start">
                    {/* Left: contact info */}
                    <aside className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-200">
                        <div className="space-y-2">
                            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                                Direct contact
                            </h2>
                            <p className="text-sm text-slate-300">
                                You can reach me directly via email or phone. I&apos;ll do my
                                best to reply as soon as I can.
                            </p>

                            <div className="mt-3 space-y-2 text-[13px]">
                                <div>
                                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:vaidas@simkus.co.uk"
                                        className="text-sky-300 transition hover:text-sky-200"
                                    >
                                        vaidas@simkus.co.uk
                                    </a>
                                </div>

                                <div>
                                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                        Phone
                                    </p>
                                    <a
                                        href="tel:+447909853777"
                                        className="text-sky-300 transition hover:text-sky-200"
                                    >
                                        +44 7909853777
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                                What I can help with
                            </h2>
                            <ul className="space-y-1.5 text-[13px] text-slate-300">
                                <li>• Web & app development</li>
                                <li>• Cloud hosting & deployment (AWS)</li>
                                <li>• Website redesigns & performance</li>
                                <li>• Automation / integrations</li>
                            </ul>
                        </div>

                        <div className="space-y-2 text-[11px] text-slate-400">
                            <p>
                                I&apos;m currently open to full-time, contract, and freelance
                                opportunities in web and cloud engineering.
                            </p>
                        </div>
                    </aside>

                    {/* Right: contact form */}
                    <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="name"
                                        className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                                        }
                                        className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="surname"
                                        className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                                    >
                                        Surname
                                    </label>
                                    <input
                                        id="surname"
                                        name="surname"
                                        required
                                        value={formData.surname}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                surname: e.target.value,
                                            }))
                                        }
                                        className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="company"
                                        className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                                    >
                                        Company (optional)
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                company: e.target.value,
                                            }))
                                        }
                                        className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="position"
                                        className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                                    >
                                        Position (optional)
                                    </label>
                                    <input
                                        id="position"
                                        name="position"
                                        value={formData.position}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                position: e.target.value,
                                            }))
                                        }
                                        className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="email"
                                        className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                email: e.target.value,
                                            }))
                                        }
                                        className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="phone"
                                        className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                                    >
                                        Phone number
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                phone: e.target.value,
                                            }))
                                        }
                                        className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label
                                    htmlFor="message"
                                    className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            message: e.target.value,
                                        }))
                                    }
                                    className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none ring-0 transition focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                                />
                            </div>

                            <div className="space-y-3">
                                <ReCAPTCHA
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                    onChange={(token: string | null) => {
                                        setRecaptchaToken(token);
                                    }}
                                />


                                {errorMessage && (
                                    <p className="text-[11px] text-red-400">{errorMessage}</p>
                                )}

                                {formState === "success" && (
                                    <p className="text-[11px] text-emerald-400">
                                        Thank you! Your message has been sent.
                                    </p>
                                )}
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={formState === "submitting"}
                                    className="inline-flex items-center gap-2 rounded-full border border-sky-400/70 bg-sky-500/20 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-sky-50 shadow-[0_0_25px_rgba(56,189,248,0.4)] transition hover:bg-sky-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {formState === "submitting" ? "Sending..." : "Send message"}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </Container>
        </div>
    );
}
