"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  subject: z.string().optional(),
  message: z.string().min(5, "Please enter a message"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body?.error ?? "Something went wrong");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed");
    }
  };

  const inputCls =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <div>
      <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
        Send a message
      </p>
      <p className="text-gray-600 text-sm mb-6">
        Use the form below or call / WhatsApp for a <strong>free consultation</strong>. Typical
        response within one business day.
      </p>

      {status === "success" && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 mb-5 text-green-700 text-sm">
          <CheckCircle className="w-5 h-5 shrink-0" />
          Thank you! Your message has been sent. We&apos;ll be in touch shortly.
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-5 text-red-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {errorMsg || "Something went wrong. Please try again."}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input {...register("name")} placeholder="Your name *" className={inputCls} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <input {...register("phone")} placeholder="Phone" className={inputCls} type="tel" />
        </div>
        <div>
          <input {...register("email")} placeholder="Email" className={inputCls} type="email" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <input {...register("subject")} placeholder="Subject (optional)" className={inputCls} />
        </div>
        <div className="sm:col-span-2">
          <textarea
            {...register("message")}
            placeholder="Message *"
            rows={5}
            className={`${inputCls} resize-none`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>
        <div className="sm:col-span-2 flex flex-col gap-3">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-primary text-white font-medium py-3 rounded-xl hover:bg-primary/90 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
          >
            {status === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}
            {status === "submitting" ? "Sending…" : "Send Message"}
          </button>
          <p className="text-xs text-gray-400 text-center">
            Or contact us directly:{" "}
            <a
              href="https://wa.me/919884110537?text=Hi%2C%20I%20need%20insurance%20advice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline"
            >
              WhatsApp us
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
