import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, brand, message } = await req.json()

  console.log('API hit - attempting to send email')
  console.log('GMAIL_USER:', process.env.GMAIL_USER)
  console.log('APP_PASSWORD set:', !!process.env.GMAIL_APP_PASSWORD)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    }
  })

  try {
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'victor.perez2867@gmail.com',
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Brand:</strong> ${brand || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })
    console.log('Email sent:', info.messageId)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.log('Email error:', JSON.stringify(error, null, 2))
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}