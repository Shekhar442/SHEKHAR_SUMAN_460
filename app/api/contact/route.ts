import { NextResponse } from "next/server"

const WEB3FORMS_URL = "https://api.web3forms.com/submit"

type ContactBody = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  let body: ContactBody
  try {
    body = (await request.json()) as ContactBody
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 })
  }

  const name = typeof body.name === "string" ? body.name.trim() : ""
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const subject = typeof body.subject === "string" ? body.subject.trim() : ""
  const message = typeof body.message === "string" ? body.message.trim() : ""

  if (!name || name.length > 200) {
    return NextResponse.json({ success: false, error: "Please enter a valid name." }, { status: 400 })
  }
  if (!email || !isValidEmail(email) || email.length > 320) {
    return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 })
  }
  if (!subject || subject.length > 300) {
    return NextResponse.json({ success: false, error: "Please enter a subject." }, { status: 400 })
  }
  if (!message || message.length > 20_000) {
    return NextResponse.json(
      { success: false, error: "Please enter a message (max 20,000 characters)." },
      { status: 400 },
    )
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim()
  if (!accessKey) {
    return NextResponse.json({
      success: true,
      useMailto: true,
    })
  }

  try {
    const upstream = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: `[Portfolio] ${subject}`,
        message,
      }),
    })

    const data = (await upstream.json()) as { success?: boolean; message?: string }

    if (!upstream.ok || data.success !== true) {
      const msg =
        typeof data.message === "string" && data.message
          ? data.message
          : "Could not send message. Try again or use the email link."
      return NextResponse.json({ success: false, error: msg }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, error: "Network error sending message. Try the email link below." },
      { status: 502 },
    )
  }
}
