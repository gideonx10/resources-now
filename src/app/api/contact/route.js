import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name, company, email, projectType, message } = body;

  if (!name || !email || !projectType || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const text = [
    "New Resources Now project brief",
    `Name: ${name}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email}`,
    `Project Type: ${projectType}`,
    `Message: ${message}`,
  ].join("\n");

  if (process.env.RESEND_API_KEY) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Resources Now <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL || "mail@resourcesnow.in",
        reply_to: email,
        subject: `Resources Now project brief: ${projectType}`,
        text,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Unable to send email" }, { status: 502 });
    }
  } else {
    console.log(text);
  }

  return NextResponse.json({ ok: true });
}
