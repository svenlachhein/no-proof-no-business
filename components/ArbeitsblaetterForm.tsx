"use client";

import { useState, type FormEvent } from "react";

const ENDPOINT = "https://www.lachhein-lierow.de/api/pdf-request";

export default function ArbeitsblaetterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !email) return;
    setStatus("loading");
    setMsg("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          what: "Arbeitsblätter Band I angefordert über no-proof-no-business.de",
          source: "arbeitsblaetter-band-i",
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMsg(
          data.error === "invalid_email"
            ? "Die E-Mail-Adresse sieht nicht richtig aus."
            : "Etwas ging schief. Versuch es nochmal."
        );
        return;
      }
      setStatus("ok");
      setMsg(
        "Bestätigungslink ist unterwegs. Schau in dein Postfach."
      );
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMsg("Etwas ging schief. Versuch es nochmal.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="ab-form">
      <div className="ab-form-row">
        <input
          type="text"
          required
          placeholder="Vorname"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input ab-form-input"
          disabled={status === "loading" || status === "ok"}
        />
      </div>
      <div className="ab-form-row">
        <input
          type="email"
          required
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input ab-form-input"
          disabled={status === "loading" || status === "ok"}
        />
      </div>
      <div className="ab-form-row">
        <button
          type="submit"
          className="btn"
          disabled={status === "loading" || status === "ok"}
        >
          {status === "loading" ? "…" : "Anfordern"}
        </button>
      </div>
      {msg && (
        <div className={"form-msg ab-form-msg " + (status === "error" ? "ab-form-msg-error" : "")}>
          {msg}
        </div>
      )}
    </form>
  );
}
