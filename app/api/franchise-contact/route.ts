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
      plan,
      area,
      message,
    } = body

    await resend.emails.send({
      from: "GAMI Franchise <onboarding@resend.dev>",
      to: ["info@gamigami.net"],

      subject: `【FC相談】${name}様よりお問い合わせ`,

      replyTo: email,

      html: `
        <div style="font-family: sans-serif; line-height: 1.9;">
          <h2>フランチャイズ相談フォーム</h2>

          <p><strong>お名前：</strong>${name}</p>

          <p><strong>会社名 / 屋号：</strong>${company || "-"}</p>

          <p><strong>メール：</strong>${email}</p>

          <p><strong>電話番号：</strong>${phone || "-"}</p>

          <p><strong>希望導入形態：</strong>${type || "-"}</p>

          <p><strong>希望プラン：</strong>${plan || "-"}</p>

          <p><strong>開業希望エリア：</strong>${area || "-"}</p>

          <hr />

          <p><strong>相談内容</strong></p>

          <p style="white-space: pre-wrap;">${message}</p>
        </div>
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
        message: "送信に失敗しました。",
      },
      { status: 500 }
    )
  }
}
