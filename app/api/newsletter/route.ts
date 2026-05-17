import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors.email?.[0] ?? "Invalid email." },
        { status: 400 }
      );
    }

    const { email } = parsed.data;
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "licsivaprakash.98@gmail.com";

    if (!resendKey || resendKey === "re_placeholder") {
      console.warn("RESEND_API_KEY not configured — newsletter signup not sent.");
      return NextResponse.json({ success: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "Sivaprakash Wealth <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `[Newsletter] New subscriber: ${email}`,
      html: `
        <h2>New newsletter subscriber</h2>
        <p>Someone subscribed to updates from <strong>sivaprakashwealth.com</strong>.</p>
        <table style="border-collapse:collapse;width:100%;max-width:480px">
          <tr>
            <td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td>
            <td style="padding:8px;border:1px solid #eee">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #eee;font-weight:bold">Time</td>
            <td style="padding:8px;border:1px solid #eee">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
          </tr>
        </table>
        <p style="margin-top:16px;color:#666;font-size:13px">Reply to this email to reach the subscriber directly.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter signup error:", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
