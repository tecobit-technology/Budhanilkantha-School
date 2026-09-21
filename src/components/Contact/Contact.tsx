"use client";

import { useState } from "react";
import ContactLayout from "@/components/Contact/ContactLayout";
import { contact } from "@/lib/site-data";

const fieldClass =
  "block w-full rounded-[3px] border border-[#d4d4e8] bg-white px-3 text-[13px] text-neutral-800 placeholder:text-neutral-400";
const labelClass = "mb-3 block text-[14px] text-neutral-900";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // There is no mail backend yet, so submitting opens the visitor's mail app
  // with the message addressed to the school office. Swap this for an API
  // route / server action when one exists.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <ContactLayout title="Contact" crumbLabel="Contacts">
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="grid gap-7 sm:grid-cols-2 sm:gap-6">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Name"
              className={`${fieldClass} h-[43px]`}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className={`${fieldClass} h-[43px]`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Subject"
            className={`${fieldClass} h-[43px]`}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Message"
            className={`${fieldClass} h-[200px] resize-y py-3`}
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="rounded-[4px] bg-[#239b41] px-6 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#1c7f35]"
          >
            Send Message
          </button>
          {sent && (
            <span role="status" className="text-[13px] text-neutral-600">
              Opening your email app…
            </span>
          )}
        </div>
      </form>
    </ContactLayout>
  );
}
