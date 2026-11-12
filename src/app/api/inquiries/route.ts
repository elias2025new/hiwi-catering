import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendInquiryNotificationEmail } from '@/lib/email';

interface RawInquiryBody {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  date?: unknown;
  details?: unknown;
  sourceUrl?: unknown;
}

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidCalendarDate(dateStr: string): boolean {
  if (!DATE_REGEX.test(dateStr)) return false;
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: NextRequest) {
  let body: RawInquiryBody;
  try {
    body = (await request.json()) as RawInquiryBody;
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body. Expected JSON.' },
      { status: 400 }
    );
  }

  const name = asTrimmedString(body.name);
  const phone = asTrimmedString(body.phone);
  const email = asTrimmedString(body.email);
  const eventDate = asTrimmedString(body.date);
  const details = asTrimmedString(body.details);
  const sourceUrlRaw = asTrimmedString(body.sourceUrl);
  const sourceUrl = sourceUrlRaw ? sourceUrlRaw.slice(0, 300) : null;

  if (!name || name.length > 120) {
    return NextResponse.json(
      { error: 'Please enter your full name (120 characters max).' },
      { status: 400 }
    );
  }

  if (!phone || phone.length < 5 || phone.length > 40) {
    return NextResponse.json(
      { error: 'Please enter a valid phone number.' },
      { status: 400 }
    );
  }

  if (email && (!EMAIL_REGEX.test(email) || email.length > 254)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address or leave it blank.' },
      { status: 400 }
    );
  }

  if (!isValidCalendarDate(eventDate)) {
    return NextResponse.json(
      { error: 'Please select a valid event date.' },
      { status: 400 }
    );
  }

  if (!details || details.length > 4000) {
    return NextResponse.json(
      { error: 'Please enter your event type, sub-city, and estimated guest count.' },
      { status: 400 }
    );
  }

  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        phone,
        email: email || null,
        eventDate,
        details,
        sourceUrl,
      },
    });

    let emailSent = false;
    try {
      emailSent = await sendInquiryNotificationEmail(inquiry);
    } catch (emailError) {
      console.error('[api/inquiries] Failed to send notification email:', emailError);
    }

    return NextResponse.json(
      {
        ok: true,
        id: inquiry.id,
        emailSent,
      },
      { status: 201 }
    );
  } catch (dbError) {
    console.error('[api/inquiries] Database error creating inquiry:', dbError);
    return NextResponse.json(
      {
        error:
          'We could not save your inquiry right now. Please try again or call 0963 138 123.',
      },
      { status: 500 }
    );
  }
}
