type PlannerRequest = {
  name: string;
  email: string;
  location: string;
  space: string;
  method: string;
  sun: string;
  goal: string;
  language: "es" | "en";
};

function buildGuide(data: PlannerRequest) {
  const isAquaponics =
    data.method.toLowerCase().includes("acuapon") ||
    data.method.toLowerCase().includes("aquapon");

  const lowSun =
    data.sun.includes("Menos") ||
    data.sun.includes("Less") ||
    data.sun.includes("4");

  if (data.language === "en") {
    return {
      title: `${data.name}, your initial garden plan is ready`,
      crops: isAquaponics
        ? ["Lettuce", "Basil", "Mint", "Watercress"]
        : lowSun
        ? ["Mint", "Cilantro", "Parsley", "Microgreens"]
        : ["Cherry tomatoes", "Lettuce", "Basil", "Sweet peppers"],
      recommendation: isAquaponics
        ? "Start with leafy greens and herbs before moving into fruiting crops. Keep the system simple and stable."
        : "Start small with crops that match your light and space. Do not overbuild the first version.",
      schedule: [
        "Week 1: define the space and clean the area.",
        "Week 2: prepare containers, beds, or system structure.",
        "Week 3: plant your first crops.",
        "Week 4: monitor water, sunlight, pests, and growth.",
      ],
      nextStep:
        "Start with one small system. Observe it for 30 days before expanding.",
    };
  }

  return {
    title: `${data.name}, tu plan inicial de huerto está listo`,
    crops: isAquaponics
      ? ["Lechuga", "Albahaca", "Menta", "Berro"]
      : lowSun
      ? ["Menta", "Cilantro", "Perejil", "Microgreens"]
      : ["Tomate cherry", "Lechuga", "Albahaca", "Pimiento dulce"],
    recommendation: isAquaponics
      ? "Empieza con hojas verdes y hierbas antes de pasar a cultivos de fruto. Mantén el sistema simple y estable."
      : "Empieza pequeño con cultivos que se ajusten a tu luz y espacio. No construyas demasiado en la primera versión.",
    schedule: [
      "Semana 1: define el espacio y limpia el área.",
      "Semana 2: prepara contenedores, camas o estructura del sistema.",
      "Semana 3: siembra tus primeros cultivos.",
      "Semana 4: monitorea agua, sol, plagas y crecimiento.",
    ],
    nextStep:
      "Empieza con un sistema pequeño. Obsérvalo por 30 días antes de expandir.",
  };
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as PlannerRequest;

    if (!data.email || !data.email.includes("@")) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    const guide = buildGuide(data);

    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        email: data.email,
        listIds: [Number(process.env.BREVO_LIST_ID)],
        updateEnabled: true,
        attributes: {
          SOURCE: `Garden Planner - ${data.language}`,
        },
      }),
    });

    return Response.json({ guide });
  } catch {
    return Response.json(
      { error: "Could not generate garden plan" },
      { status: 500 }
    );
  }
}