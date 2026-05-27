"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function toEnglishPath(pathname: string) {
  if (pathname === "/") return "/en";
  if (pathname.startsWith("/en")) return pathname;
  return `/en${pathname}`;
}

function toSpanishPath(pathname: string) {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.replace("/en", "");
  return pathname;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  return (
    <header
      style={{
        width: "100%",
        borderBottom: "1px solid #d8d2c3",
        background: "#f4f1e8",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "32px",
        }}
      >
        <Link
          href={isEnglish ? "/en" : "/"}
          style={{
            fontSize: "20px",
            fontWeight: 800,
            color: "#16251b",
            textDecoration: "none",
            letterSpacing: "-0.03em",
          }}
        >
          KCGreenWorks
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            fontSize: "15px",
            fontWeight: 700,
          }}
        >
          <Link
            href={isEnglish ? "/en/blog" : "/blog"}
            style={{ color: "#314232", textDecoration: "none" }}
          >
            {isEnglish ? "Guides" : "Guías"}
          </Link>

          <Link
            href={isEnglish ? "/en/start-here" : "/start-here"}
            style={{ color: "#314232", textDecoration: "none" }}
          >
            {isEnglish ? "Start here" : "Empieza aquí"}
          </Link>

          <div
            style={{
              display: "flex",
              overflow: "hidden",
              borderRadius: "999px",
              border: "1px solid #314232",
              background: "#ffffff",
              fontSize: "13px",
              fontWeight: 800,
            }}
          >
            <Link
              href={toSpanishPath(pathname)}
              style={{
                padding: "6px 12px",
                textDecoration: "none",
                background: !isEnglish ? "#16251b" : "#ffffff",
                color: !isEnglish ? "#ffffff" : "#314232",
              }}
            >
              ES
            </Link>

            <Link
              href={toEnglishPath(pathname)}
              style={{
                padding: "6px 12px",
                textDecoration: "none",
                background: isEnglish ? "#16251b" : "#ffffff",
                color: isEnglish ? "#ffffff" : "#314232",
              }}
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
