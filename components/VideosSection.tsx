const videos = [
  {
    id: "n52d58My2WE",
    episode: "Episodio 1",
    title: "La lombriz roja",
    description:
      "Conoce a la protagonista: qué es la lombriz roja y cómo convierte tus residuos de cocina en abono vivo para el huerto.",
  },
  {
    id: "X-wYBGICCZI",
    episode: "Episodio 2",
    title: "Casa y cama para tus lombrices",
    description:
      "Construye su casa, prepara la cama perfecta y aprende qué darles de comer paso a paso.",
  },
];

export default function VideosSection() {
  return (
    <section className="mx-auto mt-24 max-w-6xl">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
          Serie en video
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#1f2a1f] md:text-4xl">
          De residuo a recurso
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#4b5a4b]">
          Mira la serie completa en YouTube: de la lombriz roja a tu primera
          vermicompostera funcionando.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {videos.map((video) => (
          <article
            key={video.id}
            className="overflow-hidden rounded-3xl border border-[#d8d2c3] bg-white shadow-xl"
          >
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                title={`${video.episode}: ${video.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="p-6 text-left">
              <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
                {video.episode}
              </p>
              <h3 className="mt-2 text-xl font-bold text-[#1f2a1f]">
                {video.title}
              </h3>
              <p className="mt-2 leading-7 text-[#4b5a4b]">
                {video.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.youtube.com/@KCGreenWorks"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-xl bg-[#c7e86b] px-6 py-3 font-bold text-[#17301f] transition hover:bg-[#b5d957]"
        >
          Ver el canal en YouTube
        </a>
      </div>
    </section>
  );
}
