"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMsg(data.error || "Etwas ging schief.");
        return;
      }
      setStatus("ok");
      setMsg("Eingetragen.");
      setEmail("");
    } catch {
      setStatus("error");
      setMsg("Etwas ging schief.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="newsletter-form">
      <div className="form-row">
        <input
          type="email"
          required
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          className="btn"
          disabled={status === "loading"}
        >
          {status === "loading" ? "…" : "Eintragen"}
        </button>
      </div>
      {msg && <div className="form-msg">{msg}</div>}
    </form>
  );
}
