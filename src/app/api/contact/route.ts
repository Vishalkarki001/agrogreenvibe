// ===========================================================================
// CONTACT FORM BACKEND — Gmail SMTP (nodemailer)
//
// Contact form yahan POST karta hai. Ye email bhejta hai business inbox par.
// Saari creds .env se aati hain — code mein kuch hardcode nahi:
//   GMAIL_USER  -> bhejne wala gmail (SMTP login)
//   GMAIL_PASS  -> us gmail ka 16-digit App Password
//   CONTACT_TO  -> jahan enquiry pahunchni hai (na ho to GMAIL_USER par)
//
// >> Creds badalne par sirf .env update karein — yahan kuch change nahi karna.
// ===========================================================================

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer Node runtime maangta hai (edge nahi).
export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const phone = data.phone?.trim();
  const service = data.service?.trim() || "General Enquiry";
  const message = data.message?.trim();

  // Basic validation
  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
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
    console.error("[contact] GMAIL_USER / GMAIL_PASS missing in .env");
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
      from: `"Agro Greenvibe Website" <${user}>`,
      to,
      replyTo: email,
      subject: `🌿 New Enquiry: ${service} — ${name}`,
      text: `New enquiry from the Agro Greenvibe website

Name:    ${name}
Email:   ${email}
Phone:   ${phone}
Service: ${service}

Message:
${message}`,
      html: buildEmailHtml({ name, email, phone, service, message }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] sendMail failed:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 }
    );
  }
}

// Sundar HTML email template
function buildEmailHtml(d: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 0;color:#64748b;font-size:13px;width:90px;vertical-align:top;">${label}</td>
      <td style="padding:8px 0;color:#0f172a;font-size:14px;font-weight:600;">${escapeHtml(value)}</td>
    </tr>`;

  return `
  <div style="background:#f1f5f1;padding:24px;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8e2;">
      <div style="background:#166534;padding:24px 28px;">
        <h1 style="margin:0;color:#fff;font-size:18px;">🌿 New Website Enquiry</h1>
        <p style="margin:6px 0 0;color:#bbf7d0;font-size:13px;">Agro Greenvibe India Pvt. Ltd.</p>
      </div>
      <div style="padding:24px 28px;">
        <table style="width:100%;border-collapse:collapse;">
          ${row("Name", d.name)}
          ${row("Email", d.email)}
          ${row("Phone", d.phone)}
          ${row("Service", d.service)}
        </table>
        <div style="margin-top:16px;padding:16px;background:#f0fdf4;border-radius:12px;border:1px solid #dcfce7;">
          <p style="margin:0 0 6px;color:#64748b;font-size:13px;">Message</p>
          <p style="margin:0;color:#0f172a;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(
            d.message
          )}</p>
        </div>
      </div>
      <div style="padding:14px 28px;background:#f8fafc;border-top:1px solid #e2e8e2;color:#94a3b8;font-size:12px;">
        Reply directly to this email to respond to ${escapeHtml(d.name)}.
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
