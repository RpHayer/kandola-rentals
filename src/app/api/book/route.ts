"use server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // Extract form data from the request body
    const {
      name,
      email,
      phone,
      message,
      pickupDate,
      dropoffDate,
      service,
      referredBy,
      referredByOther,
      options,
    } = await req.json();

    // Set up the SMTP transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // Use true if using port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Construct the message body for plain text email
    const emailText = `
New Rental Booking Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
Pickup Date: ${pickupDate}
Dropoff Date: ${dropoffDate}
Service: ${service}
Referred By: ${referredBy}
${
  referredBy === "someone" || referredBy === "other"
    ? `Referred By (Details): ${referredByOther}`
    : ""
}
Options:
  - Straps: ${options.straps ? "Yes" : "No"}
  - Hitch: ${options.hitch ? "Yes" : "No"}
    `;

    // Send email with the composed message
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Booking Inquiry from ${name}`,
      text: emailText,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}
