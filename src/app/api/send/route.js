import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  const mailOptions = {
    from: email,
    to: process.env.USER,
    subject: subject,
    text: message
  };
  
  res = ""

  await transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res = error;
    } else {
      res = info.response;
    }
  });
  
  return NextResponse.json({message: res});
}
