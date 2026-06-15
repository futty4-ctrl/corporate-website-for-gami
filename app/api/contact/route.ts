import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      name,
      company,
      email,
      phone,
      type,
      message,
    } = body

    await resend.emails.send({
      from: "お問い合わせ <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "k_fuchigami@gamigami.email",
      subject: `【GAMI問い合わせ】${type}`,
      html: `
        <h2>お問い合わせが届きました</h2>

        <p><strong>名前：</strong>${name}</p>
        <p><strong>会社名：</strong>${company || "-"}</p>
        <p><strong>メール：</strong>${email}</p>
        <p><strong>電話：</strong>${phone || "-"}</p>
        <p><strong>種別：</strong>${type}</p>

        <hr>

        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    )
  }
}
