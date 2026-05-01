export default function AcuaponiaBasica() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-3xl space-y-6">

        <a href="/blog/acuaponia" className="text-sm font-semibold text-green-800">
          ← Acuaponía
        </a>

        <h1 className="text-4xl font-bold md:text-5xl">
          Acuaponía básica: guía completa desde 0
        </h1>

        <p className="text-lg text-[#4b5a4b]">
          Esto no es teoría. Aquí tienes cómo montar un sistema de acuaponía funcional, estable y sin errores típicos de principiante.
        </p>

        <h2 className="text-2xl font-bold mt-8">Cómo funciona realmente (lo que importa)</h2>

        <p>
          La acuaponía no es “peces + plantas y ya”. Es un sistema biológico con tres componentes críticos:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Peces → producen amoníaco</li>
          <li>Bacterias → convierten amoníaco → nitritos → nitratos</li>
          <li>Plantas → consumen nitratos</li>
        </ul>

        <p>
          Si ese ciclo no está estable, el sistema falla. Punto.
        </p>

        <h2 className="text-2xl font-bold mt-8">Componentes de un sistema básico</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Tanque de peces (mínimo 20 galones para estabilidad real)</li>
          <li>Bomba de agua continua</li>
          <li>Grow bed (cama de cultivo con grava o clay pebbles)</li>
          <li>Retorno de agua por gravedad</li>
          <li>Aireador (altamente recomendado)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Tipos de sistema (elige bien desde el principio)</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Media bed (grava) → el más estable para empezar</li>
          <li>DWC (Deep Water Culture) → más productivo pero más técnico</li>
          <li>NFT → eficiente pero sensible a fallos</li>
        </ul>

        <p>
          Si estás empezando: usa media bed. Todo lo demás te complica sin necesidad.
        </p>

        <h2 className="text-2xl font-bold mt-8">El ciclo del nitrógeno (esto no lo puedes saltar)</h2>

        <p>
          Antes de meter peces en cantidad, el sistema tiene que ciclar.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Día 1–7 → amoníaco sube</li>
          <li>Día 7–14 → aparecen nitritos</li>
          <li>Día 14–30 → nitratos estables</li>
        </ul>

        <p>
          Hasta que no tengas nitratos y amoníaco en 0, no metas carga real de peces.
        </p>

        <h2 className="text-2xl font-bold mt-8">Parámetros críticos (esto es lo que mata sistemas)</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>pH ideal: 6.4 – 7.0</li>
          <li>Amoníaco: 0 ppm</li>
          <li>Nitritos: 0 ppm</li>
          <li>Nitratos: presentes (esto es lo bueno)</li>
          <li>Oxígeno: alto siempre</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Densidad de peces (error clásico)</h2>

        <p>
          Demasiados peces = sistema colapsa.
        </p>

        <p>
          Regla base segura:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>1 libra de pez por cada 5–10 galones de agua</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Plantas recomendadas</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Lechuga (la más fácil)</li>
          <li>Albahaca (crece brutal)</li>
          <li>Espinaca</li>
          <li>Kale</li>
        </ul>

        <p>
          Tomates y pimientos funcionan, pero necesitan sistemas más estables.
        </p>

        <h2 className="text-2xl font-bold mt-8">Errores que debes evitar</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Meter peces sin ciclar</li>
          <li>Apagar la bomba demasiado tiempo</li>
          <li>No medir agua</li>
          <li>Sobrealimentar peces</li>
          <li>No tener oxigenación</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Conclusión real</h2>

        <p>
          La acuaponía funciona, pero no es automática.
        </p>

        <p>
          Si entiendes el sistema biológico, es de los métodos más eficientes que existen.
          Si no, se convierte en un desastre rápido.
        </p>

      </section>
    </main>
  );
}