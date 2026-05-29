import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Email inválido." }, { status: 400 });
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
      return NextResponse.json(
        { message: "No se pudo registrar el email." },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: "Registro completado." });
  } catch {
    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}