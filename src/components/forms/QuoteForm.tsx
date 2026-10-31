"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { quoteForm } from "@/data/content";
import { EMAIL_RE, Field, FormStatus, PHONE_RE, Spinner, inputCls } from "./fields";

type Values = {
  fullName: string;
  organisation: string;
  email: string;
  phone: string;
  organisationType: string;
  services: string[];
  timeline: string;
  language: string;
  message: string;
  website: string; // honeypot
};

const initial: Values = {
  fullName: "",
  organisation: "",
  email: "",
  phone: "",
  organisationType: "",
  services: [],
  timeline: "",
  language: "English",
  message: "",
  website: "",
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
  if (v.organisation.trim().length < 2) e.organisation = "Please enter your company or organisation name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!PHONE_RE.test(v.phone.trim())) e.phone = "Please enter a valid phone or WhatsApp number.";
  if (!v.organisationType) e.organisationType = "Please select your organisation type.";
  if (v.services.length === 0) e.services = "Please select at least one service.";
  if (!v.timeline) e.timeline = "Please select a project timeline.";
  if (v.message.trim().length < 10) e.message = "Please tell us a little about your project (at least 10 characters).";
  return e;
}

export default function QuoteForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = <K extends keyof Values>(key: K, val: Values[K]) => {
    setValues((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const toggleService = (s: string) =>
    set("services", values.services.includes(s) ? values.services.filter((x) => x !== s) : [...values.services, s]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      document.getElementById(first === "services" ? "services-group" : first)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "quote", ...values }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Values) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `${k}-error` } : {});

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {/* Honeypot (hidden from users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => set("website", e.target.value)} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" required error={errors.fullName}>
          <input id="fullName" autoComplete="name" className={inputCls(!!errors.fullName)} value={values.fullName} onChange={(e) => set("fullName", e.target.value)} {...err("fullName")} />
        </Field>
        <Field id="organisation" label="Company / organisation name" required error={errors.organisation}>
          <input id="organisation" autoComplete="organization" className={inputCls(!!errors.organisation)} value={values.organisation} onChange={(e) => set("organisation", e.target.value)} {...err("organisation")} />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input id="email" type="email" autoComplete="email" className={inputCls(!!errors.email)} value={values.email} onChange={(e) => set("email", e.target.value)} {...err("email")} />
        </Field>
        <Field id="phone" label="Phone / WhatsApp" required error={errors.phone}>
          <input id="phone" type="tel" autoComplete="tel" placeholder="+855 ..." className={inputCls(!!errors.phone)} value={values.phone} onChange={(e) => set("phone", e.target.value)} {...err("phone")} />
        </Field>
        <Field id="organisationType" label="Organisation type" required error={errors.organisationType}>
          <select id="organisationType" className={inputCls(!!errors.organisationType)} value={values.organisationType} onChange={(e) => set("organisationType", e.target.value)} {...err("organisationType")}>
            <option value="">Select…</option>
            {quoteForm.organisationTypes.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
        <Field id="timeline" label="Project timeline" required error={errors.timeline}>
          <select id="timeline" className={inputCls(!!errors.timeline)} value={values.timeline} onChange={(e) => set("timeline", e.target.value)} {...err("timeline")}>
            <option value="">Select…</option>
            {quoteForm.timelines.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset
        id="services-group"
        tabIndex={-1}
        aria-describedby={errors.services ? "services-error" : undefined}
        className="focus:outline-none"
      >
        <legend className="mb-3 text-sm font-semibold text-heading">
          Services needed<span className="ml-0.5 text-brand-red" aria-hidden="true">*</span>
        </legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {quoteForm.services.map((s) => {
            const checked = values.services.includes(s);
            return (
              <label
                key={s}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                  checked ? "border-line bg-navy-50 text-heading" : "border-line/10 text-ink hover:border-line/40"
                }`}
              >
                <input type="checkbox" checked={checked} onChange={() => toggleService(s)} className="h-4 w-4 rounded border-line/15 accent-[#E1041C]" />
                {s}
              </label>
            );
          })}
        </div>
        {errors.services && (
          <p id="services-error" className="mt-2 text-sm text-brand-red" role="alert">
            {errors.services}
          </p>
        )}
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-heading">Preferred language</legend>
        <div className="flex flex-wrap gap-3">
          {quoteForm.languages.map((l) => (
            <label
              key={l}
              className={`flex cursor-pointer items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                values.language === l ? "border-line bg-navy text-white" : "border-line/15 text-heading hover:border-line"
              }`}
            >
              <input type="radio" name="language" value={l} checked={values.language === l} onChange={() => set("language", l)} className="sr-only" />
              {l}
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="message" label="Message / project details" required error={errors.message}>
        <textarea id="message" rows={6} className={inputCls(!!errors.message)} placeholder="Tell us about your organisation, what you need and any deadlines…" value={values.message} onChange={(e) => set("message", e.target.value)} {...err("message")} />
      </Field>

      <div aria-live="polite">
        <FormStatus status={status} success={quoteForm.successMessage} error={quoteForm.errorMessage} />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-brand-redDark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Spinner /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" /> Submit request
          </>
        )}
      </button>
    </form>
  );
}
