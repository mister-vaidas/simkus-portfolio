import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Vaidas Simkus",
  description:
    "Contact Vaidas Simkus for job opportunities, freelance projects, and cloud/web engineering enquiries.",
  alternates: {
    canonical: "https://simkus.co.uk/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
