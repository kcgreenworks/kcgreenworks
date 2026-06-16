"use client";

import { useState } from "react";

type Guide = {
  title: string;
  crops: string[];
  recommendation: string;
  schedule: string[];
  nextStep: string;
};

export default function GardenPlannerES() {
  const [loading, setLoading] = useState(false);
  const [guide, setGuide] = useState<Guide | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const form = new FormData(event.currentTarget);

    const payload = {
      name: String(form.get("name")),
      email: String(form.get("email")),
      location: String(form.get("location")),
      space: String(form.get("space")),
      method: String(form.get("method")),
      sun: String(form.get("sun")),
      goal: String(form.get("goal")),
      language: "es",
    };

    const response = await fetch("/api/garden-planner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    setGuide(result.guide);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-6 text-[#1f2a1f]">
      <section className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-green-800">
          KC GREENWORKS
        </p>

        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
          Planifica tu huerto gratis
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-[#4b5a4b]">
          Responde unas preguntas y recibe una guía inicial personalizada según
          tu espacio, clima y objetivo.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-5 shadow-sm"
          >
            <div className="grid gap-3">
              <input
                name="name"
                required
                placeholder="Nombre"
                className="rounded-xl border px-3 py-2"
              />

              <input
                name="email"
                required
                type="email"
                placeholder="Email"
                className="rounded-xl border px-3 py-2"
              />

              <input
                name="location"
                required
                placeholder="Estado, país o ciudad"
                className="rounded-xl border px-3 py-2"
              />

              <select name="space" required className="rounded-xl border px-3 py-2">
                <option value="">Tipo de espacio</option>
                <option>Balcón</option>
                <option>Patio pequeño</option>
                <option>Patio mediano</option>
                <option>Patio grande</option>
                <option>Finca o terreno</option>
              </select>

              <select name="method" required className="rounded-xl border px-3 py-2">
                <option value="">Método de cultivo</option>
                <option>Tierra directa</option>
                <option>Camas elevadas</option>
                <option>Contenedores</option>
                <option>Hidroponía</option>
                <option>Acuaponía</option>
                <option>No sé todavía</option>
              </select>

              <select name="sun" required className="rounded-xl border px-3 py-2">
                <option value="">Horas de sol</option>
                <option>Menos de 4 horas</option>
                <option>4-6 horas</option>
                <option>6-8 horas</option>
                <option>Más de 8 horas</option>
              </select>

              <select name="goal" required className="rounded-xl border px-3 py-2">
                <option value="">Objetivo principal</option>
                <option>Comer mejor</option>
                <option>Ahorrar dinero</option>
                <option>Aprender</option>
                <option>Producir para vender</option>
              </select>

              <button
                disabled={loading}
                className="mt-1 rounded-xl bg-green-800 px-6 py-2.5 font-semibold text-white hover:bg-green-900 disabled:opacity-60"
              >
                {loading ? "Creando tu guía..." : "Crear mi guía gratis"}
              </button>
            </div>
          </form>

          <div className="rounded-3xl bg-[#e7eadc] p-5">
            {!guide ? (
              <>
                <h2 className="text-xl font-bold">Qué recibirás</h2>
                <p className="mt-3 leading-7 text-[#4b5a4b]">
                  Una recomendación inicial de cultivos, próximos pasos y un
                  calendario básico para comenzar sin complicarte.
                </p>

                <div className="mt-5 rounded-2xl bg-white/60 p-4 text-sm leading-6 text-[#4b5a4b]">
                  Ideal para patios, balcones, camas elevadas, contenedores,
                  hidroponía y acuaponía básica.
                </div>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold">{guide.title}</h2>

                <h3 className="mt-4 font-bold">Cultivos recomendados</h3>
                <ul className="mt-2 list-inside list-disc text-sm leading-6">
                  {guide.crops.map((crop) => (
                    <li key={crop}>{crop}</li>
                  ))}
                </ul>

                <h3 className="mt-4 font-bold">Recomendación</h3>
                <p className="mt-2 text-sm leading-6">{guide.recommendation}</p>

                <h3 className="mt-4 font-bold">Calendario inicial</h3>
                <ul className="mt-2 list-inside list-disc text-sm leading-6">
                  {guide.schedule.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <h3 className="mt-4 font-bold">Próximo paso</h3>
                <p className="mt-2 text-sm leading-6">{guide.nextStep}</p>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}