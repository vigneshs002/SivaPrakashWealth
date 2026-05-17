"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMessage("Thank you — we'll keep you updated!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-emerald-400 font-medium py-2">
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        disabled={status === "loading"}
        className="flex-1 bg-slate-800 border border-slate-700 rounded-full px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-primary disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-primary text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap disabled:opacity-50"
      >
        {status === "loading" ? "…" : "Sign Up"}
      </button>
      {status === "error" && (
        <p className="absolute mt-10 text-xs text-red-400">{message}</p>
      )}
    </form>
  );
}
