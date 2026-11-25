// Sube los archivos de entrega de los libros al almacén privado de Vercel Blob.
// Uso:  node scripts/upload-books.mjs
// Requiere: BLOB_READ_WRITE_TOKEN en .env.local y los 10 archivos en ./book-files/
// (yerba-buena.epub, yerba-buena.pdf, cosecha-roja.epub, etc.)
import { put } from "@vercel/blob";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const files = [
  "yerba-buena.epub",
  "yerba-buena.pdf",
  "cosecha-roja.epub",
  "cosecha-roja.pdf",
  "lombricultura-en-casa.epub",
  "lombricultura-en-casa.pdf",
  "la-lombriz-al-descubierto.epub",
  "la-lombriz-al-descubierto.pdf",
  "acuaponia-guia-completa.epub",
  "acuaponia-guia-completa.pdf",
];

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error("Falta BLOB_READ_WRITE_TOKEN (revisa .env.local).");
  process.exit(1);
}

for (const name of files) {
  const local = path.join(process.cwd(), "book-files", name);
  if (!existsSync(local)) {
    console.error(`No se encontró ${local} — se salta.`);
    continue;
  }
  const data = await readFile(local);
  const blob = await put(`libros/${name}`, data, {
    access: "private",
    token,
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: name.endsWith(".pdf")
      ? "application/pdf"
      : "application/epub+zip",
  });
  console.log(`OK ${name} -> ${blob.pathname}`);
}

console.log("Listo: archivos subidos al almacén privado.");
