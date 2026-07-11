import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const body = await request.json();
  const { name, company, email, phone, projectType, message } = body;

  if (!name || !email || !phone || !projectType || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const text = [
    "New Resources Now project brief",
    `Name: ${name}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Project Type: ${projectType}`,
    `Message: ${message}`,
  ].join("\n");

  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: `Resources Now Website <${process.env.GMAIL_USER}>`,
        to: process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER,
        replyTo: email,
        subject: `Resources Now project brief: ${projectType}`,
        text,
      });
    } catch (error) {
      console.error("Failed to send contact email", error);
      return NextResponse.json({ error: "Unable to send email" }, { status: 502 });
    }
  } else {
    console.log(text);
  }

  return NextResponse.json({ ok: true });
}
