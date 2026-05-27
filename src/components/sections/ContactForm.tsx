"use client";

// Contact form — /api/contact par POST karta hai (Gmail SMTP backend).
// User name/email/phone/service/message bharta hai aur submit karte hi enquiry
// business inbox par chali jati hai. Loading / success / error states handle hain.

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SERVICES } from "@/lib/services";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      service: String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
    };

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.error || "Something went wrong.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  // ---- Success state ----
  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-green-100 bg-green-50/60 p-10 text-center">
        <span className="animate-fade-up flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-slate-900">
          Message Sent! 🌿
        </h3>
        <p className="mt-2 max-w-sm text-slate-600">
          Thank you for reaching out. Your enquiry has been received and our team
          will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-green-700 hover:text-green-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
    >
      <h3 className="font-display text-xl font-bold text-slate-900">
        Send Us a Message
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Fill in the form and we&apos;ll get back to you shortly.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name">
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <input id="phone" name="phone" type="tel" required placeholder="+91 ..." className={inputClass} />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Service Needed" htmlFor="service">
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Message" htmlFor="message">
          <textarea id="message" name="message" rows={4} required placeholder="Tell us about your project..." className={`${inputClass} resize-none`} />
        </Field>
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-700 px-6 py-3.5 font-semibold text-white shadow-sm shadow-green-700/25 transition-all hover:-translate-y-0.5 hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </span>
      {children}
    </label>
  );
}
