"use client";

// Feedback form — sirf 2 fields: email + message. /api/feedback par POST
// karta hai (Gmail SMTP backend). Loading / success / error states handle hain.

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, MessageSquareHeart } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function FeedbackForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/feedback", {
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

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-green-100 bg-green-50/60 p-10 text-center dark:border-[#26332c] dark:bg-[#131d18]">
        <span className="animate-fade-up flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-slate-900 dark:text-white">
          Thank You! 🌿
        </h3>
        <p className="mt-2 max-w-sm text-slate-600 dark:text-slate-400">
          Your feedback has been received. We really appreciate you taking the
          time to share your thoughts with us.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-green-700 hover:text-green-800 dark:text-green-400"
        >
          Send another feedback
        </button>
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8 dark:border-[#26332c] dark:bg-[#1a241e]"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300">
          <MessageSquareHeart className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
            Share Your Feedback
          </h3>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
            Help us grow — your thoughts mean a lot to us.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Field label="Your Email" htmlFor="fb-email">
          <input
            id="fb-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Your Feedback" htmlFor="fb-message">
          <textarea
            id="fb-message"
            name="message"
            rows={5}
            required
            placeholder="Tell us what you think — what worked, what could be better..."
            className={`${inputClass} resize-none`}
          />
        </Field>
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
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
            Send Feedback
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20 dark:border-[#26332c] dark:bg-[#131d18] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:bg-[#1a241e]";

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
      <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </span>
      {children}
    </label>
  );
}
