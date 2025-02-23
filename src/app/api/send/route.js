import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
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

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        reject(error);
      } else {
        resolve(success);
      }
    });
  });

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res = err
        reject(err);
      } else {
        res = info.response
        resolve(info);
      }
    });
  });

  return NextResponse.json({ message: res });
}
