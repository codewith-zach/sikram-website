"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

// EmailJS Configuration - Get these from https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

emailjs.init(EMAILJS_PUBLIC_KEY);

const contactDetails = [
  {
    title: "Office Address",
    body: "Kpaja, Monrovia, Liberia, 1000",
  },
  {
    title: "Email Address",
    body: "sikramafrica@gmail.com",
  },
  {
    title: "Phone Number",
    body: "+61 485 696 123",
  },
] as const;

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
] as const;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '+61 ',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
      setFormData({ fullName: '', email: '', phone: '+61 ', subject: '', message: '' });
    } catch {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section aria-label="Contact information" className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 md:px-12 md:pb-24 xl:px-[80px] xl:pt-[72px]">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 text-[#00A651] max-w-[540px]">
              <span className="shrink-0 text-[16px] font-medium uppercase">
                Contact Information
              </span>
              <div className="h-px flex-1 bg-[#00A651]/40" />
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-[32px] leading-[1.1] font-bold text-black sm:text-[36px] lg:text-[40px]">
                Come and See for Yourself.
              </h2>
              <p className="max-w-[540px] font-display text-[15px] leading-[1.6] text-[#585858] sm:text-[16px]">
                We welcome prospective buyers, diaspora investors, and community
                members to visit our properties and see firsthand what
                environmentally conscious real estate in Liberia looks like. Our
                team will be on site to walk you through to developments and
                answer every question you have, at a time that suits you.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="space-y-2">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-black">
                    {detail.title}
                  </h3>
                  <p className="text-[14px] leading-[1.5] text-[#585858]">
                    {detail.body}
                  </p>
                </div>
              ))}
              <div className="space-y-3">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-black">
                  Socials
                </h3>
                <div className="flex items-center gap-4 text-black">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="transition-colors hover:text-[#00A651]"
                    >
                      {item.label === "Instagram" && (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                        </svg>
                      )}
                      {item.label === "LinkedIn" && (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="currentColor"
                        >
                          <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5H4.5V23H.5V8.5Z" />
                          <path d="M8.5 8.5H12.3V10.5H12.35C12.9 9.5 14.2 8.4 16.4 8.4C20 8.4 21.5 10.7 21.5 14.1V23H17.5V14.8C17.5 12.8 17.5 10.7 15.2 10.7C12.8 10.7 12.4 12.6 12.4 14.7V23H8.5V8.5Z" />
                        </svg>
                      )}
                      {item.label === "Facebook" && (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="currentColor"
                        >
                          <path d="M13.5 8.5V6.2c0-.8.5-1 1-1h2V1.1h-2.7C11.4 1.1 10 2.6 10 5v3.5H7.5v3.8H10V23h4.1V12.3h2.8l.4-3.8h-3.2Z" />
                        </svg>
                      )}
                      {item.label === "X" && (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          fill="currentColor"
                        >
                          <path d="M18.2 2H21l-6.4 7.4L22 22h-6.3l-4-5.6L6.7 22H4l6.8-7.9L2 2h6.4L3.6 5.1L18.2 2ZM16.9 20h1.8L7.2 4H5.3l11.6 16Z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[18px] bg-[#F3F3F3] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)] sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {submitStatus.type && (
                <div className={`rounded-[8px] p-4 text-[14px] ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-black" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="h-11 w-full rounded-[10px] border border-[#E3E3E3] bg-white px-4 text-[14px] text-black outline-none transition focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-black" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  className="h-11 w-full rounded-[10px] border border-[#E3E3E3] bg-white px-4 text-[14px] text-black outline-none transition focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-black" htmlFor="phone">
                  Phone Number
                </label>
                <div className="flex h-11 items-center gap-2 rounded-[10px] border border-[#E3E3E3] bg-white px-3">
                  <span className="text-[13px] font-semibold text-black">+61</span>
                  <div className="h-5 w-px bg-[#E3E3E3]" />
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="485 696 123"
                    className="h-full w-full bg-transparent text-[14px] text-black outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-black" htmlFor="subject">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-11 w-full rounded-[10px] border border-[#E3E3E3] bg-white px-4 text-[14px] text-[#585858] outline-none transition focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/20"
                >
                  <option value="">Select</option>
                  <option value="visit">Schedule a Visit</option>
                  <option value="purchase">Purchase Inquiry</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-black" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type message"
                  rows={4}
                  className="w-full resize-none rounded-[10px] border border-[#E3E3E3] bg-white px-4 py-3 text-[14px] text-black outline-none transition focus:border-[#00A651] focus:ring-2 focus:ring-[#00A651]/20"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-11 rounded-[10px] bg-[#4BA360] px-8 text-[14px] font-semibold text-white hover:bg-[#3f8f53] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-10 h-[240px] w-full rounded-[20px] bg-[#D9D9D9] sm:mt-14 sm:h-[300px] md:h-[360px]" />
      </div>
    </section>
  );
}
