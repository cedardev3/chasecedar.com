"use client";

import { useState } from "react";

const EMAIL = "me@chasecedar.com";

export default function EmailButton() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <span className="email-btn-wrap">
      <a className="btn ghost" href={`mailto:${EMAIL}`} onClick={copyEmail}>
        Email me
      </a>
      {copied ? (
        <span className="copy-note" role="status">
          Copied email
        </span>
      ) : null}
    </span>
  );
}
