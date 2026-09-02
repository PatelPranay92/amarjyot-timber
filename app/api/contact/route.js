import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // Send Email Notification
    // Note: You must configure these environment variables in your .env.local file
    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const mailOptions = {
          from: `"Amarjyot Timber Form" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL || 'amarjyottimber@gmail.com', // The owner's email
          replyTo: data.email,
          subject: `New Inquiry from ${data.name} - Amarjyot Timber`,
          text: `
You have received a new inquiry from your website contact form:

Name: ${data.name}
Company: ${data.company || 'N/A'}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Product Required: ${data.product || 'N/A'}
Quantity: ${data.quantity || 'N/A'}

Message:
${data.message || 'No message provided.'}
          `,
          html: `
            <h2>New Website Inquiry</h2>
            <p>You have received a new inquiry from your website contact form.</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.company || 'N/A'}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone || 'N/A'}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Product Required:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.product || 'N/A'}</td></tr>
              <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Quantity:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.quantity || 'N/A'}</td></tr>
            </table>
            <h3>Message:</h3>
            <p style="white-space: pre-wrap;">${data.message || 'No message provided.'}</p>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log('Email notification sent successfully.');
      } else {
        console.log('Skipping email notification: SMTP_USER and SMTP_PASS environment variables are not set.');
      }
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email notification.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Submission successful' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing submission.' },
      { status: 500 }
    );
  }
}
