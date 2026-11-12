import nodemailer from 'nodemailer';

export interface InquiryEmailPayload {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  eventDate: string;
  details: string;
  sourceUrl: string | null;
  createdAt: Date;
}

const DEFAULT_RECIPIENT = 'eliashabib2024@gmail.com';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatReadableDate(dateStr: string): string {
  const parts = dateStr.split('-').map(Number);
  if (parts.length !== 3 || parts.some(Number.isNaN)) return dateStr;
  const date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export async function sendInquiryNotificationEmail(
  inquiry: InquiryEmailPayload
): Promise<boolean> {
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '');
  const recipient = process.env.INQUIRY_NOTIFY_EMAIL?.trim() || DEFAULT_RECIPIENT;

  if (!smtpUser || !smtpPass) {
    console.warn(
      '[inquiry-email] SMTP_USER or SMTP_PASS is not configured; skipping email notification.'
    );
    return false;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const readableDate = formatReadableDate(inquiry.eventDate);
  const subject = `New Catering Inquiry: ${inquiry.name} (${readableDate})`;

  const text = [
    'New Event Catering Inquiry — Hiwi Catering',
    '-----------------------------------------',
    `Inquiry ID: ${inquiry.id}`,
    `Name:       ${inquiry.name}`,
    `Phone:      ${inquiry.phone}`,
    `Email:      ${inquiry.email || 'Not provided'}`,
    `Event Date: ${readableDate} (${inquiry.eventDate})`,
    `Page:       ${inquiry.sourceUrl || 'Direct'}`,
    `Submitted:  ${inquiry.createdAt.toISOString()}`,
    '',
    'Event Details:',
    inquiry.details,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1917; border: 1px solid #e7e5e4; border-radius: 12px; overflow: hidden;">
      <div style="background-color: #1c1917; color: #ffffff; padding: 20px 24px;">
        <p style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #d6d3d1;">Hiwi Catering Services</p>
        <h1 style="margin: 6px 0 0; font-size: 20px; font-weight: 800;">New Event Catering Inquiry</h1>
      </div>
      <div style="padding: 24px; background-color: #ffffff;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #57534e; font-weight: 700; width: 130px;">Client Name</td>
            <td style="padding: 8px 0; color: #1c1917; font-weight: 600;">${escapeHtml(inquiry.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #57534e; font-weight: 700;">Phone</td>
            <td style="padding: 8px 0; color: #1c1917;"><a href="tel:${escapeHtml(inquiry.phone)}" style="color: #b45309; text-decoration: none; font-weight: 700;">${escapeHtml(inquiry.phone)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #57534e; font-weight: 700;">Email</td>
            <td style="padding: 8px 0; color: #1c1917;">${inquiry.email ? `<a href="mailto:${escapeHtml(inquiry.email)}" style="color: #b45309; text-decoration: none;">${escapeHtml(inquiry.email)}</a>` : '<span style="color: #78716c;">Not provided</span>'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #57534e; font-weight: 700;">Event Date</td>
            <td style="padding: 8px 0; color: #1c1917; font-weight: 600;">${escapeHtml(readableDate)} (${escapeHtml(inquiry.eventDate)})</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #57534e; font-weight: 700;">Source Page</td>
            <td style="padding: 8px 0; color: #57534e;">${escapeHtml(inquiry.sourceUrl || 'Direct')}</td>
          </tr>
        </table>

        <div style="margin-top: 18px; padding: 14px 16px; background-color: #fafaf9; border: 1px solid #e7e5e4; border-radius: 8px;">
          <p style="margin: 0 0 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #57534e;">Event Details</p>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(inquiry.details)}</p>
        </div>

        <p style="margin: 18px 0 0; font-size: 12px; color: #78716c;">
          Inquiry ID: ${escapeHtml(inquiry.id)} &middot; Submitted ${escapeHtml(inquiry.createdAt.toUTCString())}
        </p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Hiwi Catering Website" <${smtpUser}>`,
    to: recipient,
    replyTo: inquiry.email || undefined,
    subject,
    text,
    html,
  });

  return true;
}
