export default function GuiaAcuaponia() {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-12 text-[#1f2a1f]">
      <section className="mx-auto max-w-4xl space-y-10">
        <a href="/blog/acuaponia" className="text-sm font-semibold text-green-800 hover:underline">
          ← Volver a Acuaponía
        </a>

        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Acuaponía básica: guía completa desde cero
        </h1>

        <p className="text-lg text-[#4b5a4b]">
          La acuaponía es un sistema de producción de alimentos que integra acuicultura
          (crianza de peces) con hidroponía (cultivo sin suelo), creando un ecosistema
          cerrado donde los desechos de los peces se convierten en nutrientes para las
          plantas mediante procesos biológicos naturales. No es un proyecto bonito: es un
          sistema vivo que depende del equilibrio químico, biológico y mecánico.
        </p>

        <p>
          Cuando está bien diseñado, el sistema es altamente eficiente: reutiliza agua,
          reduce fertilizantes externos y permite producción constante en espacios
          pequeños. Cuando está mal diseñado, falla rápido. No hay punto medio.
        </p>

        <figure className="my-8">
          <img
            src="/acuaponia1es.png" className="mx-auto w-full max-w-3xl rounded-xl"          
            alt="Sistema casero de acuaponía"
          />
          <figcaption className="mt-2 text-center text-sm text-[#5a6b5a]">
            Sistema acuapónico casero: peces, agua, bacterias y plantas trabajando como un solo ecosistema.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">¿Qué es la acuaponía?</h2>

          <p>
            La acuaponía combina dos sistemas: la acuicultura, que es la crianza de peces,
            y la hidroponía, que es el cultivo de plantas sin tierra. La diferencia es que
            en hidroponía tradicional tú añades fertilizantes al agua. En acuaponía, los
            nutrientes vienen principalmente de los peces y de la actividad bacteriana del sistema.
          </p>

          <p>
            El objetivo no es simplemente mantener peces vivos y plantas bonitas. El objetivo
            es crear un circuito donde el agua se mueve, se oxigena, transporta nutrientes,
            alimenta las raíces y regresa al tanque en mejores condiciones.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">¿Por qué usar acuaponía?</h2>

          <p>
            La acuaponía es buena porque aprovecha recursos que normalmente se desperdician.
            En un sistema tradicional, el excremento de los peces se convierte en contaminación
            si no se filtra. En acuaponía, ese desperdicio se convierte en fertilizante.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Ahorra mucha agua porque el sistema recircula.</li>
            <li>Reduce o elimina la necesidad de fertilizantes químicos.</li>
            <li>Permite cultivar en espacios pequeños.</li>
            <li>Produce vegetales y, si el sistema escala, también proteína.</li>
            <li>Disminuye problemas de suelo, malezas y algunas plagas.</li>
            <li>Puede funcionar en patio, balcón, marquesina, terraza o finca pequeña.</li>
          </ul>

          <p className="font-semibold">
            No es jardinería común. Es producción de alimento usando biología aplicada.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Cómo funciona el sistema</h2>

          <p>
            Todo gira alrededor del ciclo del nitrógeno. Los peces comen y producen desechos.
            Esos desechos liberan amoníaco, que puede matar los peces si se acumula. Ahí entran
            las bacterias nitrificantes.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Los peces producen amoníaco.</li>
            <li>Las bacterias convierten el amoníaco en nitritos.</li>
            <li>Otras bacterias convierten los nitritos en nitratos.</li>
            <li>Las plantas absorben los nitratos como alimento.</li>
            <li>El agua regresa al tanque más limpia.</li>
          </ul>

          <p>
            Las bacterias no viven flotando solamente en el agua. Viven pegadas a superficies:
            piedras, grava, arcilla expandida, raíces, filtros y tuberías. Por eso el diseño
            físico del sistema importa tanto.
          </p>
        </section>

        <figure className="my-8">
          <img
            src="/acuaponia2es.png" className="mx-auto w-full max-w-3xl rounded-xl"
            alt="Diseño básico de un sistema acuapónico"
          />
          <figcaption className="mt-2 text-center text-sm text-[#5a6b5a]">
            El diseño debe permitir buen flujo de agua, oxígeno suficiente y espacio para filtración biológica.
          </figcaption>
        </figure>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Escalas: desde una pecera hasta un sistema grande</h2>

          <p>
            Puedes empezar pequeño. Una pecera puede servir como laboratorio para aprender:
            bomba pequeña, algunas plantas arriba, raíces expuestas al agua y buena oxigenación.
            Ese sistema no va a producir mucho alimento, pero te enseña flujo, evaporación,
            calidad de agua, raíces y comportamiento de peces.
          </p>

          <p>
            Luego puedes crecer a un tanque de 50, 100 o 200 galones con una cama de cultivo.
            Más adelante puedes usar IBC totes, barriles cortados, camas con grava, camas flotantes
            o sistemas modulares.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Micro sistema:</strong> pecera pequeña para aprender.</li>
            <li><strong>Sistema casero:</strong> tanque de 50 a 200 galones con una cama de cultivo.</li>
            <li><strong>Sistema mediano:</strong> varias camas, mejor filtración y más plantas.</li>
            <li><strong>Sistema productivo:</strong> separación de sólidos, biofiltro dedicado y mayor control.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Componentes básicos</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Tanque de peces:</strong> pecera, barril, tote plástico o IBC.</li>
            <li><strong>Bomba de agua:</strong> mueve el agua hacia las plantas.</li>
            <li><strong>Cama de cultivo:</strong> donde crecen las plantas y viven bacterias.</li>
            <li><strong>Medio de cultivo:</strong> grava lavada, piedra volcánica o arcilla expandida.</li>
            <li><strong>Aireador:</strong> mantiene oxígeno disponible para peces y bacterias.</li>
            <li><strong>Retorno:</strong> permite que el agua vuelva al tanque por gravedad.</li>
            <li><strong>Filtración:</strong> remueve sólidos y protege raíces, bombas y tuberías.</li>
          </ul>

          <p>
            Un sistema pequeño puede ser simple, pero no debe ser improvisado. Si falta oxígeno,
            si se acumulan sólidos o si el flujo se detiene, el sistema se compromete.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Diseño correcto del sistema</h2>

          <p>
            El diseño debe balancear el volumen del tanque, la cantidad de peces, el tamaño de
            la cama de cultivo, la filtración y el flujo de agua. No se trata de poner muchas
            plantas ni muchos peces. Se trata de que la biología pueda procesar la carga.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>El agua debe circular de forma constante o por ciclos bien controlados.</li>
            <li>La bomba debe mover suficiente agua sin crear turbulencia excesiva.</li>
            <li>La cama debe tener profundidad suficiente para raíces y bacterias.</li>
            <li>Los sólidos no deben acumularse en zonas muertas.</li>
            <li>El tanque debe recibir oxígeno constante.</li>
          </ul>

          <p className="font-semibold">
            Un sistema estable no es el más grande. Es el mejor balanceado.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Tipos de sistemas acuapónicos</h2>

          <p>
            Hay varias formas de construir un sistema. Para empezar, lo más práctico suele ser
            una cama de cultivo con medio sólido.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Media bed:</strong> usa grava o arcilla expandida. Sirve como soporte,
              filtro mecánico y biofiltro. Es el más recomendado para aprender.
            </li>
            <li>
              <strong>DWC:</strong> las plantas flotan sobre agua profunda. Es productivo, pero
              requiere mejor filtración y oxigenación.
            </li>
            <li>
              <strong>NFT:</strong> usa una lámina delgada de agua en canales. Es eficiente, pero
              más sensible a fallos de bomba o raíces bloqueadas.
            </li>
          </ul>

          <p>
            Para una primera instalación casera, media bed es la opción más tolerante.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">El ciclado del sistema</h2>

          <p>
            Antes de meter peces en serio, el sistema tiene que ciclar. Ciclado significa que
            se establece la colonia bacteriana capaz de convertir amoníaco en nitratos.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>Primera etapa: sube el amoníaco.</li>
            <li>Segunda etapa: aparecen nitritos.</li>
            <li>Tercera etapa: aparecen nitratos.</li>
            <li>Etapa estable: amoníaco y nitritos deben estar en cero.</li>
          </ul>

          <p>
            El ciclado puede tardar de 3 a 6 semanas. Se puede acelerar con bacterias comerciales,
            material filtrante de un sistema maduro o una fuente controlada de amoníaco.
          </p>

          <p className="font-semibold">
            Meter demasiados peces antes de ciclar es una de las formas más rápidas de fracasar.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Parámetros que debes medir</h2>

          <p>
            No se maneja acuaponía “a ojo”. Puedes observar el sistema, pero los números mandan.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li><strong>pH:</strong> idealmente entre 6.4 y 7.0 para balance entre plantas y bacterias.</li>
            <li><strong>Amoníaco:</strong> debe estar en 0 ppm en un sistema estable.</li>
            <li><strong>Nitritos:</strong> deben estar en 0 ppm.</li>
            <li><strong>Nitratos:</strong> deben estar presentes; son alimento para plantas.</li>
            <li><strong>Oxígeno disuelto:</strong> debe mantenerse alto para peces y bacterias.</li>
            <li><strong>Temperatura:</strong> afecta peces, bacterias y crecimiento vegetal.</li>
          </ul>

          <p>
            Si no mides, estás adivinando. Y en acuaponía adivinar sale caro.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Peces recomendados</h2>

          <p>
            La selección depende de clima, objetivo y escala. No todos los peces toleran lo mismo.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Tilapia:</strong> fuerte, rápida, tolerante y buena para producción.</li>
            <li><strong>Goldfish:</strong> resistente, ideal para aprender, no para alimento.</li>
            <li><strong>Koi:</strong> ornamental, resistente, buena opción si no buscas cosechar peces.</li>
            <li><strong>Bluegill:</strong> opción interesante para sistemas al aire libre.</li>
          </ul>

          <p>
            Para aprender, empieza con pocos peces. La carga biológica debe subir poco a poco.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Plantas recomendadas</h2>

          <p>
            No todas las plantas exigen lo mismo. Al inicio conviene sembrar plantas de hoja,
            porque consumen nutrientes de forma más sencilla y responden rápido.
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Fáciles:</strong> lechuga, albahaca, kale, acelga, espinaca.</li>
            <li><strong>Intermedias:</strong> pepino, cebollines, hierbas aromáticas.</li>
            <li><strong>Más exigentes:</strong> tomate, pimiento, berenjena.</li>
          </ul>

          <p>
            Tomates y pimientos pueden funcionar muy bien, pero necesitan un sistema más maduro,
            mayor carga de nutrientes y mejor estabilidad.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Mantenimiento básico</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Revisar bomba y flujo de agua.</li>
            <li>Observar comportamiento de peces.</li>
            <li>Evitar sobrealimentar.</li>
            <li>Remover sólidos acumulados si el sistema lo requiere.</li>
            <li>Medir pH, amoníaco, nitritos y nitratos.</li>
            <li>Revisar raíces para evitar bloqueos.</li>
          </ul>

          <p>
            El mantenimiento no tiene que ser difícil, pero sí constante. La acuaponía premia la
            observación diaria.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Errores comunes</h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Meter peces antes de ciclar.</li>
            <li>Usar demasiados peces para poco filtro.</li>
            <li>No oxigenar suficiente.</li>
            <li>No medir el agua.</li>
            <li>Sobrealimentar.</li>
            <li>Diseñar retornos pobres o tuberías que se tapan.</li>
            <li>Creer que porque el agua se ve clara, está sana.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Conclusión</h2>

          <p>
            La acuaponía funciona porque convierte residuos en recursos. No depende de magia,
            depende de biología, agua en movimiento, oxígeno, bacterias y equilibrio. Puedes
            empezar con una pecera o montar un sistema grande, pero la lógica siempre es la misma:
            alimentar peces, proteger bacterias y dejar que las plantas limpien y aprovechen el sistema.
          </p>

          <p className="font-semibold">
            El éxito no está en gastar más. Está en entender el sistema antes de escalarlo.
          </p>
        </section>
      </section>
    </main>
  );
}