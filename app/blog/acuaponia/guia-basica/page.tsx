export default function GuiaAcuaponia() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-10">

        <a href="/blog/acuaponia" className="text-sm font-semibold text-green-800">
          ← Volver a Acuaponía
        </a>

        <h1 className="text-4xl md:text-5xl font-bold">
          Acuaponía básica (pero bien hecha): guía completa desde 0
        </h1>

        <p className="text-lg text-[#4b5a4b]">
          La acuaponía no es simplemente juntar peces con plantas. Es un sistema biológico controlado donde la estabilidad depende del equilibrio entre carga orgánica, bacterias y absorción vegetal. Si entiendes esto, el sistema funciona solo. Si no, se colapsa.
        </p>

        {/* BASE REAL */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Fundamento biológico real</h2>

          <p>
            El sistema gira alrededor del ciclo del nitrógeno:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Peces → producen amoníaco (NH3)</li>
            <li>Nitrosomonas → convierten NH3 → NO2 (nitritos)</li>
            <li>Nitrobacter → convierten NO2 → NO3 (nitratos)</li>
            <li>Plantas → consumen NO3 como nutriente</li>
          </ul>

          <p className="font-semibold">
            El sistema falla cuando uno de estos 4 elementos se desbalancea.
          </p>
        </section>

        {/* DISEÑO DEL SISTEMA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Diseño correcto del sistema</h2>

          <p>
            Un sistema estable no es el más caro, es el mejor balanceado.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Relación tanque/cama: 1:1 recomendado (mínimo funcional)</li>
            <li>Flujo de agua: 1–2 veces el volumen del tanque por hora</li>
            <li>Profundidad de grow bed: 10–12 pulgadas</li>
            <li>Oxigenación: crítica (aireador obligatorio)</li>
          </ul>

          <p>
            Si no tienes suficiente biofiltración (cama), el sistema acumula amoníaco.
          </p>
        </section>

        {/* MEDIA BED */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Por qué empezar con Media Bed</h2>

          <p>
            Media bed funciona como:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Filtro mecánico (retiene sólidos)</li>
            <li>Biofiltro (bacterias viven ahí)</li>
            <li>Soporte para plantas</li>
          </ul>

          <p className="font-semibold">
            Es el único sistema que perdona errores de principiante.
          </p>
        </section>

        {/* CICLADO PROFUNDO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Ciclado (bien explicado, no superficial)</h2>

          <p>
            El sistema no está listo cuando "se ve bien". Está listo cuando los números lo dicen.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fase 1: amoníaco sube</li>
            <li>Fase 2: amoníaco baja, nitritos suben</li>
            <li>Fase 3: nitritos bajan, nitratos aparecen</li>
          </ul>

          <p className="font-semibold">
            Punto crítico: cuando NH3 = 0 y NO2 = 0 → sistema estable
          </p>

          <p>
            Tiempo real: 3–6 semanas (menos si inoculas bacterias)
          </p>

          <p>
            Error común: meter peces en fase 2 → muerte segura.
          </p>
        </section>

        {/* CARGA BIOLOGICA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Carga biológica (donde la mayoría falla)</h2>

          <p>
            No es cuantos peces caben. Es cuánto amoníaco puede procesar el sistema.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Regla básica: 20–25 kg de pez por 1000L (sistema maduro)</li>
            <li>Principiante: empieza con 30–40% de eso</li>
          </ul>

          <p>
            Sobrecargar = pico de amoníaco = crash.
          </p>
        </section>

        {/* PARAMETROS AVANZADOS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Parámetros reales que debes controlar</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>pH: 6.4 – 6.8 (balance entre bacterias y plantas)</li>
            <li>Amoníaco: 0 ppm</li>
            <li>Nitritos: 0 ppm</li>
            <li>Nitratos: 10–80 ppm</li>
            <li>Temperatura: define metabolismo completo</li>
            <li>Oxígeno disuelto: mayor de 5 mg/L</li>
          </ul>

          <p>
            Si no mides, estás adivinando.
          </p>
        </section>

        {/* PECES DETALLE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Selección de peces (estratégico)</h2>

          <p>
            No todos los peces son iguales en acuaponía:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Tilapia:</strong> crecimiento rápido, tolerante</li>
            <li><strong>Goldfish:</strong> resistentes, no productivos</li>
            <li><strong>Koi:</strong> ornamental, sistema más estable</li>
            <li><strong>Bluegill:</strong> buena opción intermedia</li>
          </ul>

          <p className="font-semibold">
            Tilapia = mejor opción para producción real
          </p>
        </section>

        {/* PLANTAS DETALLE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Plantas (orden de dificultad real)</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fácil: lechuga, kale, albahaca</li>
            <li>Media: pepino, pimientos</li>
            <li>Difícil: tomates (alto consumo de nutrientes)</li>
          </ul>

          <p>
            Tomates requieren sistema maduro + carga alta de peces.
          </p>
        </section>

        {/* FLUJO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Flujo de agua (detalle importante)</h2>

          <p>
            Dos enfoques:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Flood & Drain (bell siphon) → oxigena raíces</li>
            <li>Flujo continuo → más simple, menos oxigenación</li>
          </ul>

          <p className="font-semibold">
            Flood & drain es superior para crecimiento.
          </p>
        </section>

        {/* MANTENIMIENTO REAL */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Mantenimiento real (lo que nadie te dice)</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Evitar acumulación de sólidos</li>
            <li>No sobrealimentar (principal causa de fallos)</li>
            <li>Revisar bombas semanal</li>
            <li>Revisar raíces (bloqueos)</li>
          </ul>
        </section>

        {/* ERRORES CRITICOS */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Errores críticos</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>No ciclar correctamente</li>
            <li>Meter demasiados peces</li>
            <li>No medir parámetros</li>
            <li>Diseño pobre del sistema</li>
          </ul>

          <p className="font-semibold">
            La mayoría de los sistemas fallan por exceso, no por falta.
          </p>
        </section>

        {/* CIERRE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Conclusión real</h2>

          <p>
            La acuaponía funciona cuando dejas de verla como un “proyecto” y empiezas a verla como un ecosistema. El éxito no está en comprar más equipo, sino en entender cómo interactúan los componentes.
          </p>

          <p className="font-semibold">
            Si entiendes el ciclo del nitrógeno, controlas todo el sistema.
          </p>
        </section>

      </section>
    </main>
  );
}