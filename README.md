This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send form submissions. Follow these steps to set it up:

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account
   - The free tier allows up to 200 emails per month

2. **Create an Email Service**
   - Navigate to **Email Services** in the dashboard
   - Click **Add New Service** and choose your email provider (e.g., Gmail, SendGrid, or your SMTP server)
   - Follow the authentication steps to connect your email service
   - Copy the **Service ID** for later use

3. **Create an Email Template**
   - Go to **Email Templates** in the dashboard
   - Click **New Template** and configure your email template
   - Use these variables in your template to match the form data:
     - `{{from_name}}` - Full Name
     - `{{from_email}}` - Email Address
     - `{{phone}}` - Phone Number
     - `{{subject}}` - Subject
     - `{{message}}` - Message content
   - Set the **To Email** field to your recipient email address (e.g., sikramafrica@gmail.com)
   - Set the **Reply To** field to `{{from_email}}` so you can reply directly to the sender
   - Save the template and copy the **Template ID**

4. **Get Your Public Key**
   - Go to **Account** → **General** in the dashboard
   - Copy your **Public Key**

5. **Configure Environment Variables**
   - Create a `.env.local` file in the project root (if it doesn't exist)
   - Add the following variables with your credentials:

     ```env
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```

6. **Restart the Development Server**
   - Stop the current server (Ctrl+C)
   - Run `npm run dev` to restart with the new environment variables

7. **Test the Contact Form**
   - Navigate to the Contact page on your website
   - Fill out the form and submit
   - Check your email to verify the message was received

**Example Email Template:**

```html
<div style="font-family: Arial, sans-serif; background-color: #f6f6f6; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 24px; border-radius: 6px;">

    <h2 style="margin: 0 0 10px; color: #222;">New Contact Message</h2>
    <p style="margin: 0 0 20px; color: #666; font-size: 14px;">
      A new message was submitted from your website.
    </p>

    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

    <p style="margin: 6px 0;"><strong>Name:</strong> {{from_name}}</p>
    <p style="margin: 6px 0;"><strong>Email:</strong> {{from_email}}</p>
    <p style="margin: 6px 0;"><strong>Phone:</strong> {{phone}}</p>
    <p style="margin: 6px 0;"><strong>Subject:</strong> {{subject}}</p>

    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

    <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
    <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; line-height: 1.5; color: #333;">
      {{message}}
    </div>

  </div>
</div>
```

**Note:** The `.env.local` file is already included in the project with placeholder values. You only need to replace them with your actual EmailJS credentials.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
