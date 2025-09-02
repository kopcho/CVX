import { ReactNode } from "react";

export default function DecoSection({
  children,
  art = "/brand/torus-81.svg",
  position = "right",
  className = ""
}: { children: ReactNode; art?: string; position?: "left" | "right"; className?: string }) {
  const side = position === "left" ? "left-[-3rem]" : "right-[-3rem]";
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <img
        src={art}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none select-none absolute ${side} -top-10 w-[34rem] max-w-[80%] opacity-10 hidden md:block`}
      />
      <div className="container py-12 relative">
        {children}
      </div>
    </section>
  );
}