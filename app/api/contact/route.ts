import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  subject: z.string().optional(),
  message: z.string().min(5, "Message is required"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, phone, email, subject, message } = parsed.data;

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "licsivaprakash.98@gmail.com";

    if (!resendKey || resendKey === "re_placeholder") {
      console.warn("RESEND_API_KEY not configured — email not sent.");
      return NextResponse.json({ success: true, note: "Email not sent (no API key configured)." });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "website@sivaprakashwealth.in",
      to: toEmail,
      replyTo: email ?? undefined,
      subject: subject ? `[Website] ${subject}` : `[Website] New enquiry from ${name}`,
      html: `
        <h2>New website enquiry</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #eee">${phone ?? "—"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email ?? "—"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Subject</td><td style="padding:8px;border:1px solid #eee">${subject ?? "—"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #eee;white-space:pre-wrap">${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
