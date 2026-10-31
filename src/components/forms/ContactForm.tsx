"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { contactPage } from "@/data/content";
import { EMAIL_RE, Field, FormStatus, PHONE_RE, Spinner, inputCls } from "./fields";

const f = contactPage.form;

type Values = {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  services: string[];
  organisationType: string;
  topic: string;
  language: string;
  contactMethod: string;
  message: string;
  consent: boolean;
  website: string; // honeypot
};

const initial: Values = {
  name: "",
  email: "",
  phone: "",
  organisation: "",
  services: [],
  organisationType: "",
  topic: "",
  language: "",
  contactMethod: "",
  message: "",
  consent: false,
  website: "",
};

type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !PHONE_RE.test(v.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (v.message.trim().length < 10) e.message = "Please write a message (at least 10 characters).";
  if (!v.consent) e.consent = "Please tick the box so we can contact you.";
  return e;
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="border-t border-line/10 pt-7 first:border-t-0 first:pt-0">
      <legend className="flex items-center gap-2.5 text-[15px] font-extrabold text-heading">
        <span className="h-3 w-3 rounded-[3px] border-2 border-brand-red" aria-hidden="true" />
        {title}
      </legend>
      <div className="mt-5">{children}</div>
    </fieldset>
  );
}

function Select({
  id,
  value,
  onChange,
  options,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select id={id} className={inputCls()} value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select…</option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setValues((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const toggleService = (s: string) =>
    set("services", values.services.includes(s) ? values.services.filter((x) => x !== s) : [...values.services, s]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`c-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...values }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Values) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `c-${k}-error` } : {});

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      <div className="hidden" aria-hidden="true">
        <input tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => set("website", e.target.value)} />
      </div>

      <Group title="About you">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="c-name" label="Full name" required error={errors.name}>
            <input id="c-name" autoComplete="name" className={inputCls(!!errors.name)} value={values.name} onChange={(e) => set("name", e.target.value)} {...err("name")} />
          </Field>
          <Field id="c-email" label="Email" required error={errors.email}>
            <input id="c-email" type="email" autoComplete="email" className={inputCls(!!errors.email)} value={values.email} onChange={(e) => set("email", e.target.value)} {...err("email")} />
          </Field>
          <Field id="c-phone" label="Phone / WhatsApp" error={errors.phone}>
            <input id="c-phone" type="tel" autoComplete="tel" placeholder="+855 ..." className={inputCls(!!errors.phone)} value={values.phone} onChange={(e) => set("phone", e.target.value)} {...err("phone")} />
          </Field>
          <Field id="c-organisation" label="Company / organisation">
            <input id="c-organisation" autoComplete="organization" className={inputCls()} value={values.organisation} onChange={(e) => set("organisation", e.target.value)} />
          </Field>
        </div>
      </Group>

      <Group title="Services you need">
        <div className="flex flex-wrap gap-2.5">
          {f.services.map((s) => {
            const on = values.services.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={on}
                onClick={() => toggleService(s)}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  on
                    ? "border-line bg-navy text-white shadow-sm"
                    : "border-line/15 bg-surface text-heading hover:border-brand-red hover:text-brand-red"
                }`}
              >
                {on && <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />}
                {s}
              </button>
            );
          })}
        </div>
      </Group>

      <Group title="Your enquiry">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="c-organisationType" label="Organisation type">
            <Select id="c-organisationType" value={values.organisationType} onChange={(v) => set("organisationType", v)} options={f.organisationTypes} />
          </Field>
          <Field id="c-topic" label="What is this about?">
            <Select id="c-topic" value={values.topic} onChange={(v) => set("topic", v)} options={f.topics} />
          </Field>
          <Field id="c-language" label="Preferred language">
            <Select id="c-language" value={values.language} onChange={(v) => set("language", v)} options={f.languages} />
          </Field>
          <Field id="c-contactMethod" label="Best way to reach you">
            <Select id="c-contactMethod" value={values.contactMethod} onChange={(v) => set("contactMethod", v)} options={f.contactMethods} />
          </Field>
        </div>
        <div className="mt-5">
          <Field id="c-message" label="Message" required error={errors.message}>
            <textarea
              id="c-message"
              rows={5}
              placeholder="Tell us about your organisation, the support you need, any deadlines, or anything else we should know."
              className={inputCls(!!errors.message)}
              value={values.message}
              onChange={(e) => set("message", e.target.value)}
              {...err("message")}
            />
          </Field>
        </div>
      </Group>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink">
          <input
            id="c-consent"
            type="checkbox"
            checked={values.consent}
            onChange={(e) => set("consent", e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 rounded border-line/30 accent-[#E1041C]"
            {...err("consent")}
          />
          {f.consent}
        </label>
        {errors.consent && (
          <p id="c-consent-error" className="mt-1.5 pl-7 text-sm text-brand-red" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      <div aria-live="polite">
        <FormStatus status={status} success={contactPage.successMessage} error={contactPage.errorMessage} />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-[15px] font-bold text-white shadow-[0_14px_28px_-12px_rgba(225,4,28,0.8)] transition-all hover:-translate-y-0.5 hover:bg-brand-redDark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Spinner /> Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
