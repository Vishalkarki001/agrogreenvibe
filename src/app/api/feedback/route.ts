// ===========================================================================
// FEEDBACK BACKEND — Gmail SMTP (nodemailer)
//
// Feedback form yahan POST karta hai. Sirf 2 fields: email + message.
// Email business inbox (CONTACT_TO) par jata hai — same creds jaise contact form.
// ===========================================================================

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface FeedbackPayload {
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  let data: FeedbackPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = data.email?.trim();
  const message = data.message?.trim();

  if (!email || !message) {
    return NextResponse.json(
      { error: "Please enter your email and feedback." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_PASS;
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass) {
    console.error("[feedback] GMAIL_USER / GMAIL_PASS missing in .env");
    return NextResponse.json(
      { error: "Email service is not configured yet. Please try later." },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Agro Greenvibe Feedback" <${user}>`,
      to,
      replyTo: email,
      subject: `💬 New Feedback from ${email}`,
      text: `New feedback from the Agro Greenvibe website

From: ${email}

Feedback:
${message}`,
      html: buildFeedbackHtml({ email, message }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[feedback] sendMail failed:", err);
    return NextResponse.json(
      { error: "Could not send your feedback. Please try again." },
      { status: 500 }
    );
  }
}

function buildFeedbackHtml(d: { email: string; message: string }) {
  return `
  <div style="background:#f1f5f1;padding:24px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8e2;">
      <div style="background:#166534;padding:24px 28px;">
        <h1 style="margin:0;color:#fff;font-size:18px;">💬 New Website Feedback</h1>
        <p style="margin:6px 0 0;color:#bbf7d0;font-size:13px;">Agro Greenvibe India Pvt. Ltd.</p>
      </div>
      <div style="padding:24px 28px;">
        <p style="margin:0 0 4px;color:#64748b;font-size:13px;">From</p>
        <p style="margin:0;color:#0f172a;font-size:14px;font-weight:600;">${escapeHtml(d.email)}</p>
        <div style="margin-top:16px;padding:16px;background:#f0fdf4;border-radius:12px;border:1px solid #dcfce7;">
          <p style="margin:0 0 6px;color:#64748b;font-size:13px;">Feedback</p>
          <p style="margin:0;color:#0f172a;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(
            d.message
          )}</p>
        </div>
      </div>
      <div style="padding:14px 28px;background:#f8fafc;border-top:1px solid #e2e8e2;color:#94a3b8;font-size:12px;">
        Reply directly to this email to respond to the sender.
      </div>
    </div>
  </div>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
