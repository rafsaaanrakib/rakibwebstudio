"use client";

import { useState } from "react";

const BUTTONDOWN_ENDPOINT =
  "https://buttondown.com/api/emails/embed-subscribe/rakibahmed";

export default function WaitlistForm({
  buttonLabel = "Join waitlist",
  successMessage,
}: {
  buttonLabel?: string;
  successMessage?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      action={BUTTONDOWN_ENDPOINT}
      method="post"
      target="_blank"
      onSubmit={() => setSubmitted(true)}
      className="mt-6 flex flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="bd-email" className="sr-only">
        Enter your email
      </label>
      <input
        type="email"
        name="email"
        id="bd-email"
        required
        placeholder="you@email.com"
        className="w-full border border-line bg-porcelain px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-marigold focus:outline-none"
      />
      <button
        type="submit"
        className="whitespace-nowrap bg-ink px-6 py-3 text-sm font-medium text-porcelain shadow-[0_8px_20px_rgba(22,35,61,0.14)] transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-forest hover:shadow-[0_12px_24px_rgba(27,75,67,0.18)]"
      >
        {buttonLabel}
      </button>
      {submitted && successMessage && (
        <span className="sr-only" role="status">
          {successMessage}
        </span>
      )}
    </form>
  );
}
