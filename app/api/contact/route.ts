import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  const { name, company, email, phone, type, message } = body

  const { data, error } = await resend.emails.send({
    from: "GAMI <contact@gamigami.net>",
    to: process.env.CONTACT_EMAIL || "k_fuchigami@gamigami.email",
    replyTo: email,
    subject: `【GAMI問い合わせ】${type}`,
    html: `
      <h2>GAMIサイトからお問い合わせ</h2>
      <p><strong>名前：</strong>${name}</p>
      <p><strong>会社名：</strong>${company || "-"}</p>
      <p><strong>メール：</strong>${email}</p>
      <p><strong>電話：</strong>${phone || "-"}</p>
      <p><strong>種別：</strong>${type}</p>
      <hr />
      <p>${String(message).replace(/\n/g, "<br />")}</p>
    `,
  })

  if (error) {
    console.error("Resend error:", error)

    return NextResponse.json(
      { success: false, error },
      { status: 500 },
    )
  }

  console.log("Resend sent:", data)

  return NextResponse.json({ success: true, data })
}
