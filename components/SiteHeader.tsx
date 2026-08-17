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
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:flex-nowrap lg:gap-6 lg:px-8"
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
          className="flex w-full flex-wrap items-center gap-2 text-sm font-bold lg:w-auto lg:flex-nowrap lg:gap-2.5"
        >
          <div className="hidden items-center gap-2 lg:flex">
            <a href="https://www.facebook.com/kcgreenworks" target="_blank" rel="noopener noreferrer" style={{ color: "#314232", textDecoration: "none" }}>Facebook</a>
            <span style={{ color: "#8a8678" }}>|</span>
            <a href="https://www.instagram.com/kcgreenworks" target="_blank" rel="noopener noreferrer" style={{ color: "#314232", textDecoration: "none" }}>Instagram</a>
            <span style={{ color: "#8a8678" }}>|</span>
            <a href="https://www.youtube.com/@KCGreenWorks" target="_blank" rel="noopener noreferrer" style={{ color: "#314232", textDecoration: "none" }}>YouTube</a>
            <span style={{ color: "#8a8678" }}>|</span>
            <a href="https://www.tiktok.com/@kcgreenworks" target="_blank" rel="noopener noreferrer" style={{ color: "#314232", textDecoration: "none" }}>TikTok</a>
            <span style={{ color: "#8a8678", margin: "0 4px" }}>|</span>
          </div>

          {/* Enlace dinámico e inteligente: detecta el idioma para enviar a la ruta correcta */}
          <Link
            href={isEnglish ? "/en/siembra" : "/siembra"}
            style={{ 
              color: "#15803d", 
              textDecoration: "none",
              fontWeight: 800 
            }}
          >
            {isEnglish ? "📅 Calendar" : "📅 Calendario"}
          </Link>

          <span className="hidden sm:inline" style={{ color: "#8a8678", margin: "0 4px" }}>|</span>

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
