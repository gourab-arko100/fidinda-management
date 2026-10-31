import type { ReactNode } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export const inputCls = (hasError?: boolean) =>
  `w-full rounded-xl border bg-mist px-4 py-3 text-[15px] text-heading placeholder:text-ink/60 transition-all focus:bg-surface focus:outline-none focus:ring-4 ${
    hasError
      ? "border-brand-red focus:border-brand-red focus:ring-brand-red/15"
      : "border-transparent hover:border-line/15 focus:border-line/40 focus:ring-line/10"
  }`;

export function Field({
  id,
  label,
  required,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] font-bold text-heading">
        {label}
        {required && (
          <span className="ml-0.5 text-brand-red" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-ink/80">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-brand-red" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function FormStatus({ status, success, error }: { status: string; success: string; error: string }) {
  if (status === "success")
    return (
      <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200" role="status">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <p>{success}</p>
      </div>
    );
  if (status === "error")
    return (
      <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-200" role="alert">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <p>{error}</p>
      </div>
    );
  return null;
}

export function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_RE = /^[+\d][\d\s\-()]{6,19}$/;
