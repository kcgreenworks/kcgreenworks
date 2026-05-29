export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const email = String(formData.get("email") || "");

    if (!email || !email.includes("@")) {
      return Response.redirect(new URL("/?newsletter=invalid", request.url), 302);
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        email,
        listIds: [Number(process.env.BREVO_LIST_ID)],
        updateEnabled: true,
        attributes: {
          SOURCE: "KCGreenWorks Website",
        },
      }),
    });

    if (!response.ok) {
      return Response.redirect(new URL("/?newsletter=error", request.url), 302);
    }

    return Response.redirect(new URL("/gracias", request.url), 302);
  } catch {
    return Response.redirect(new URL("/?newsletter=error", request.url), 302);
  }
}