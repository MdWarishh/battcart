import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, city, businessType, investment, message } = body;

    if (!name || !phone || !email || !city || !businessType || !investment) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const row = (label: string, value: string) => `
      <tr>
        <td style="padding:14px 20px;border-bottom:1px solid #1E2A3A;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:600;color:#8B9AAE;text-transform:uppercase;letter-spacing:0.5px;white-space:nowrap;vertical-align:top;width:150px;">
          ${label}
        </td>
        <td style="padding:14px 20px;border-bottom:1px solid #1E2A3A;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#0B0F19;font-weight:500;">
          ${value}
        </td>
      </tr>`;

    const html = `
    <div style="margin:0;padding:0;background-color:#0B0F19;font-family:Arial,Helvetica,sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B0F19;padding:40px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.35);">

              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#0B0F19 0%,#111A2C 100%);padding:32px 32px 28px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#D7FF3F;margin-right:8px;vertical-align:middle;"></span>
                        <span style="font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;color:#D7FF3F;text-transform:uppercase;vertical-align:middle;">New Enquiry</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top:10px;">
                        <span style="font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:800;color:#ffffff;">BattKart Franchise Enquiry</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top:6px;">
                        <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#8B9AAE;">Powering Every Journey</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Body / details table -->
              <tr>
                <td style="padding:8px 12px 0;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    ${row("Name", name)}
                    ${row("Phone", `<a href="tel:${phone}" style="color:#0B0F19;text-decoration:none;">${phone}</a>`)}
                    ${row("Email", `<a href="mailto:${email}" style="color:#0B0F19;text-decoration:none;">${email}</a>`)}
                    ${row("City", city)}
                    ${row("Segment", businessType)}
                    ${row("Investment", investment)}
                    ${row("Message", message || "—")}
                  </table>
                </td>
              </tr>

              <!-- CTA -->
              <tr>
                <td style="padding:28px 32px 8px;">
                  <a href="tel:${phone}" style="display:inline-block;background-color:#D7FF3F;color:#0B0F19;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:13px 28px;border-radius:999px;">
                    Call ${name.split(" ")[0]} Now →
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding:24px 32px 32px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="border-top:1px solid #EDEFF3;padding-top:18px;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9AA5B1;">
                        Sent automatically from the BattKart website franchise form.
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </div>`;

    await transporter.sendMail({
      from: `"BattKart Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🔋BattCart Franchise Enquiry — ${name} (${city})`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ success: false, error: "Failed to send" }, { status: 500 });
  }
}