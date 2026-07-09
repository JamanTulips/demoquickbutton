"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href !== "#" && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header>
      <div className="utility">
        <div className="mx">
          <span>Sedan 1971 · Tillverkat i Åseda, Sverige</span>
          <div className="right">
            <span>
              SV ▾ <span style={{ opacity: 0.55 }}>FI / DA / NO</span>
            </span>
            <a href="#">Återförsäljare logga in</a>
          </div>
        </div>
      </div>

      <div className="masthead">
        <div className="mx">
          <Link href="/" className="wordmark logo-mark" aria-label="Quickbutton">
            <img src="/assets/quickbutton-logo.png" alt="Quickbutton" />
          </Link>
          <nav className="nav">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={isActive(l.href) ? "active" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/kontakt"
            className="btn btn-primary"
            style={{ padding: "9px 18px", fontSize: "13.5px" }}
          >
            Kontakt
          </Link>
          <button
            className={`navtoggle${open ? " open" : ""}`}
            aria-label="Meny"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className={`mobile-nav${open ? " open" : ""}`}>
        <div className="mx">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={isActive(l.href) ? "active" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/kontakt" onClick={() => setOpen(false)}>
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}
