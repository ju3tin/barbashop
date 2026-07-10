"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { ViewId } from "@/lib/barbershop-data";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-display uppercase tracking-[0.32em] font-bold text-[15px] mb-3.5 max-[600px]:text-[12px] max-[600px]:tracking-[0.22em]",
        className
      )}
      style={className ? undefined : { color: "var(--brass)" }}
    >
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display font-extrabold uppercase text-[clamp(28px,7vw,52px)] leading-[0.95] mb-2.5">
      {children}
    </h2>
  );
}

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-display font-extrabold uppercase text-[clamp(28px,7vw,52px)] leading-[0.95] mb-2.5">
      {children}
    </h1>
  );
}

export function Sub({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("max-w-[62ch] mb-6 sm:mb-8.5 text-[15px] sm:text-[17px]", className)}>
      {children}
    </p>
  );
}

type BtnVariant = "primary" | "ghost" | "outline";

export function Btn({
  children,
  onClick,
  variant = "primary",
  className,
  accentColor,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: BtnVariant;
  className?: string;
  accentColor?: string;
}) {
  const base =
    "inline-block font-display font-extrabold uppercase tracking-[0.12em] text-[15px] sm:text-[17px] px-5 sm:px-6.5 py-3 border-2 cursor-pointer transition-colors min-h-[44px]";
  const variants: Record<BtnVariant, string> = {
    primary: "bg-[var(--red)] text-[var(--cream)] border-[var(--red)] hover:bg-[var(--red-dark)] hover:border-[var(--red-dark)]",
    ghost: "text-[var(--cream)] border-[var(--cream)] hover:bg-[var(--cream)] hover:text-[var(--navy)]",
    outline: "bg-transparent text-[var(--ink)] border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream)]",
  };
  return (
    <button
      onClick={onClick}
      className={cn(base, variants[variant], className)}
      style={accentColor ? { borderColor: accentColor } : undefined}
    >
      {children}
    </button>
  );
}

export function ViewLink({
  children,
  view,
  onNavigate,
  className,
}: {
  children: ReactNode;
  view: ViewId;
  onNavigate: (view: ViewId) => void;
  className?: string;
}) {
  return (
    <button
      onClick={() => onNavigate(view)}
      className={cn(
        "text-[var(--red)] hover:text-[var(--red-dark)] hover:underline cursor-pointer font-semibold",
        className
      )}
    >
      {children}
    </button>
  );
}

export function Callout({
  children,
  shadowColor = "var(--red)",
}: {
  children: ReactNode;
  shadowColor?: string;
}) {
  return (
    <div
      className="border-2 border-[var(--ink)] bg-[var(--cream-light)] px-5.5 py-5 my-7"
      style={{ boxShadow: `6px 6px 0 ${shadowColor}` }}
    >
      {children}
    </div>
  );
}

export function Section({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: "default" | "dark" | "red";
  className?: string;
}) {
  const variants = {
    default: "bg-[var(--cream)] text-[var(--ink)]",
    dark: "bg-[var(--navy)] text-[var(--cream)]",
    red: "bg-[var(--red)] text-[var(--cream)]",
  };
  return (
    <section className={cn("py-12 sm:py-18", variants[variant], className)}>
      {children}
    </section>
  );
}

export function Wrap({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("max-w-[1120px] mx-auto px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}
