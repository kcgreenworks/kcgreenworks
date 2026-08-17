import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function redirectToForm(request: Request, locale: string, status: string) {
  const path = locale === "en" ? "/en" : "/";
  const url = new URL(path, request.url);
  url.searchParams.set("guide", status);
  return NextResponse.redirect(url, 303);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const locale = formData.get("locale") === "en" ? "en" : "es";
    const consent = formData.get("consent") === "yes";

    if (!emailPattern.test(email) || !consent) {
      return redirectToForm(request, locale, "invalid");
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);
    const senderEmail = process.env.SENDER_EMAIL;
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || new URL(request.url).origin)
      .replace(/\/$/, "");

    if (!apiKey || !Number.isInteger(listId) || listId <= 0 || !senderEmail) {
      console.error("KCGreenWorks guide flow is missing Brevo configuration.");
      return redirectToForm(request, locale, "error");
    }

    const contactResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
        attributes: { SOURCE: "Free Guide - Website" },
      }),
    });

    if (!contactResponse.ok) {
      console.error("Brevo could not save the guide contact.", contactResponse.status);
      return redirectToForm(request, locale, "error");
    }

    const isEnglish = locale === "en";
    const guideUrl = `${baseUrl}/guia-huerto.pdf`;
    const thanksPath = isEnglish ? "/en/gracias" : "/gracias";

    const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "KCGreenWorks", email: senderEmail },
        to: [{ email }],
        subject: isEnglish
          ? "Your free KCGreenWorks guide"
          : "Tu guía gratuita de KCGreenWorks",
        htmlContent: isEnglish
          ? `
            <div style="font-family:Arial,sans-serif;padding:24px;color:#17301f">
              <h2>Thank you for joining KCGreenWorks!</h2>
              <p>Your free guide is ready. Use the button below to download it.</p>
              <p style="margin-top:24px"><a href="${guideUrl}" style="background:#17301f;color:#fff;padding:12px 24px;text-decoration:none;border-radius:8px;font-weight:bold">Download the PDF guide</a></p>
              <p style="margin-top:24px;font-size:13px;color:#59685b">You are receiving this message because you requested the guide at KCGreenWorks.</p>
            </div>`
          : `
            <div style="font-family:Arial,sans-serif;padding:24px;color:#17301f">
              <h2>¡Gracias por unirte a KCGreenWorks!</h2>
              <p>Tu guía gratuita está lista. Usa el botón para descargarla.</p>
              <p style="margin-top:24px"><a href="${guideUrl}" style="background:#17301f;color:#fff;padding:12px 24px;text-decoration:none;border-radius:8px;font-weight:bold">Descargar la guía en PDF</a></p>
              <p style="margin-top:24px;font-size:13px;color:#59685b">Recibes este mensaje porque solicitaste la guía en KCGreenWorks.</p>
            </div>`,
      }),
    });

    if (!emailResponse.ok) {
      console.error("Brevo could not send the guide email.", emailResponse.status);
      return redirectToForm(request, locale, "error");
    }

    return NextResponse.redirect(new URL(thanksPath, request.url), 303);
  } catch (error) {
    console.error("Unexpected error in the KCGreenWorks guide flow.", error);
    return redirectToForm(request, "es", "error");
  }
}
