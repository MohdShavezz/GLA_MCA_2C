import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config({})

export const transporter = nodemailer.createTransport({
  service: 'gmail', // Examples: 'gmail', 'outlook', 'yahoo'
  auth: {
    user: process.env.NODEMAILER_EMAIL, // Your email
    pass: process.env.NODEMAILER_PASS, // Your app-specific password
  },
});