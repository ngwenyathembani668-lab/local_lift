import { NextResponse } from "next/server";

import { getResendClient } from "@/lib/resend";

export const runtime = "nodejs";

type LeadConfirmation = {
  fullName: string;
  businessName: string;
  email: string;
};

function isLeadConfirmation(value: unknown): value is LeadConfirmation {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const lead = value as Record<string, unknown>;

  return (
    typeof lead.fullName === "string" &&
    lead.fullName.trim().length > 0 &&
    lead.fullName.length <= 200 &&
    typeof lead.businessName === "string" &&
    lead.businessName.trim().length > 0 &&
    lead.businessName.length <= 200 &&
    typeof lead.email === "string" &&
    lead.email.length <= 320 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)
  );
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function createConfirmationHtml(fullName: string): string {
  const safeFullName = escapeHtml(fullName);

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Strategy Audit Initiated</title>
</head>
<body style="background-color: #020617; font-family: 'Inter', Helvetica, Arial, sans-serif; margin: 0; padding: 40px 20px; color: #ffffff; -webkit-font-smoothing: antialiased;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #0f172a; border: 1px solid #1e293b; border-radius: 12px; padding: 40px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);">
    <h2 style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; font-size: 24px; font-weight: 800; color: #ffffff; margin-top: 0; margin-bottom: 24px; letter-spacing: -0.02em;">
      Local Lift Digital<span style="color: #d13d00;">.</span>
    </h2>

    <p style="font-size: 16px; line-height: 24px; color: #f8fafc; margin-bottom: 16px;">
      Hi ${safeFullName},
    </p>

    <p style="font-size: 15px; line-height: 24px; color: #cbd5e1; margin-bottom: 24px;">
      Thank you for reaching out to <strong>Local Lift Digital</strong>. We have securely received your business parameters and your custom diagnostic tracking ticket has been successfully initialized.
    </p>

    <h3 style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; font-size: 16px; font-weight: 700; color: #d13d00; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px;">
      What Happens Over The Next 2 Hours:
    </h3>

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 32px;">
      <tr>
        <td style="vertical-align: top; padding-bottom: 16px; width: 32px;">
          <div style="background-color: #020617; color: #ffffff; border: 1px solid #d13d00; font-weight: bold; font-size: 12px; width: 22px; height: 22px; border-radius: 50%; text-align: center; line-height: 22px;">1</div>
        </td>
        <td style="padding-bottom: 16px; font-size: 14px; line-height: 20px; color: #cbd5e1;">
          <strong style="color: #ffffff;">Asset Evaluation:</strong> We are running a deep-scan on Google and Apple Maps to check your local visibility score. If you requested a website build or a custom admin dashboard, our desk begins evaluating system logic layouts for your niche.
        </td>
      </tr>
      <tr>
        <td style="vertical-align: top; padding-bottom: 16px; width: 32px;">
          <div style="background-color: #020617; color: #ffffff; border: 1px solid #d13d00; font-weight: bold; font-size: 12px; width: 22px; height: 22px; border-radius: 50%; text-align: center; line-height: 22px;">2</div>
        </td>
        <td style="padding-bottom: 16px; font-size: 14px; line-height: 20px; color: #cbd5e1;">
          <strong style="color: #ffffff;">Screencast Production:</strong> Thembani will compile these data metrics into a transparent, 5-minute video breakdown pointing out hidden optimization leaks that are currently costing you phone calls.
        </td>
      </tr>
      <tr>
        <td style="vertical-align: top; width: 32px;">
          <div style="background-color: #020617; color: #ffffff; border: 1px solid #d13d00; font-weight: bold; font-size: 12px; width: 22px; height: 22px; border-radius: 50%; text-align: center; line-height: 22px;">3</div>
        </td>
        <td style="font-size: 14px; line-height: 20px; color: #cbd5e1;">
          <strong style="color: #ffffff;">Direct Consultation Call:</strong> Once our diagnostic report layout is complete, <strong>we will call you directly on the phone number you provided</strong> to run through your custom roadmap live.
        </td>
      </tr>
    </table>

    <p style="font-size: 14px; line-height: 22px; color: #cbd5e1; margin-bottom: 24px; border-top: 1px solid #334155; padding-top: 24px;">
      If you are starting completely from scratch without a site or active maps profile, don't worry—we will walk you through your foundational options line items live on the call.
    </p>

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #1e293b; padding-top: 20px;">
      <tr>
        <td>
          <p style="font-size: 14px; line-height: 20px; color: #94a3b8; margin: 0;">
            Best regards,<br>
            <strong style="color: #ffffff;">Thembani</strong><br>
            <span style="font-size: 12px;">Lead Strategy Coordinator</span><br>
            <span style="font-size: 12px; color: #d13d00;">Local Lift Digital</span>
          </p>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch (error) {
    console.error("Invalid lead confirmation request body:", error);
    return NextResponse.json(
      { error: "A valid JSON request body is required." },
      { status: 400 },
    );
  }

  if (!isLeadConfirmation(body)) {
    return NextResponse.json(
      { error: "Valid name, business name, and email are required." },
      { status: 400 },
    );
  }

  try {
    const { data, error } = await getResendClient().emails.send({
      from: "Local Lift Digital <onboarding@resend.dev>",
      to: [body.email],
      subject: `📋 Strategy Audit Initiated: ${body.businessName} x Local Lift Digital`,
      html: createConfirmationHtml(body.fullName),
    });

    if (error) {
      console.error("Resend lead confirmation error:", error);
      return NextResponse.json(
        { error: "The confirmation email could not be sent." },
        { status: 502 },
      );
    }

    return NextResponse.json({ id: data?.id });
  } catch (error) {
    console.error("Lead confirmation dispatch error:", error);
    return NextResponse.json(
      { error: "The confirmation email could not be sent." },
      { status: 500 },
    );
  }
}
