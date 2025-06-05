import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  required?: boolean;
  error?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      placeholder = "Placeholder",
      disabled = false,
      className,
      inputClassName,
      labelClassName,
      value,
      onChange,
      id,
      type = "text",
      required = false,
      error,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `text-field-${React.useId()}`;

    return (
      <div
        className={cn(
          "flex w-full max-w-[334px] flex-col items-start gap-2",
          className,
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "font-red-hat text-sm font-medium leading-5 text-[var(--input-text-label)]",
              labelClassName,
            )}
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        <div
          className={cn(
            "flex w-full items-center gap-2 rounded-md border px-3 py-3 transition-colors",
            disabled
              ? "border-[var(--border-disabled)] bg-[var(--background-disabled)]"
              : "border-input bg-background focus-within:border-ring",
            error && !disabled && "border-red-500",
          )}
        >
          <input
            ref={ref}
            id={inputId}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={cn(
              "flex-1 font-red-hat text-sm leading-6 placeholder:text-[var(--text-disabled)] bg-transparent outline-none",
              disabled
                ? "text-[var(--text-disabled)] cursor-not-allowed"
                : "text-foreground",
              inputClassName,
            )}
            {...props}
          />
        </div>
        {error && (
          <span className="font-red-hat text-xs text-red-500">{error}</span>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";

export { TextField };
