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
          gap: "24px",
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
            gap: "10px",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          <a
            href="https://www.facebook.com/kcgreenworks"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#314232", textDecoration: "none" }}
          >
            Facebook
          </a>

          <span style={{ color: "#8a8678" }}>|</span>

          <a
            href="https://www.instagram.com/kcgreenworks"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#314232", textDecoration: "none" }}
          >
            Instagram
          </a>

          <span style={{ color: "#8a8678" }}>|</span>

          <a
            href="https://www.youtube.com/@KCGreenWorks"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#314232", textDecoration: "none" }}
          >
            YouTube
          </a>

          <span style={{ color: "#8a8678", margin: "0 4px" }}>|</span>

          <Link
            href={isEnglish ? "/en/shop" : "/shop"}
            style={{ color: "#314232", textDecoration: "none" }}
          >
            {isEnglish ? "Shop" : "Tienda"}
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
              marginLeft: "6px",
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