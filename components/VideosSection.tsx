const CHANNEL_FEED =
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCVl1nG2ui9bzLoxUTk8qfRA";
const CHANNEL_URL = "https://www.youtube.com/@kcgreenworks";

type Locale = "es" | "en";

type Video = {
  id: string;
  title: string;
  published?: string;
  description?: string;
};

const COPY: Record<
  Locale,
  {
    eyebrow: string;
    heading: string;
    intro: string;
    button: string;
    watchLabel: string;
    dateLocale: string;
    fallback: Video[];
  }
> = {
  es: {
    eyebrow: "YouTube",
    heading: "Lo último en YouTube",
    intro:
      "Los videos más recientes del canal, actualizados automáticamente: episodios, cuidados y errores, directo de YouTube.",
    button: "Ver el canal en YouTube",
    watchLabel: "Ver en YouTube",
    dateLocale: "es",
    fallback: [
      {
        id: "n52d58My2WE",
        title: "La lombriz roja",
        description:
          "Conoce a la protagonista: qué es la lombriz roja y cómo convierte tus residuos de cocina en abono vivo para el huerto.",
      },
      {
        id: "X-wYBGICCZI",
        title: "Casa y cama para tus lombrices",
        description:
          "Construye su casa, prepara la cama perfecta y aprende qué darles de comer paso a paso.",
      },
    ],
  },
  en: {
    eyebrow: "YouTube",
    heading: "Latest on YouTube",
    intro:
      "The channel's most recent videos, updated automatically: episodes, care tips and mistakes, straight from YouTube.",
    button: "Visit the YouTube channel",
    watchLabel: "Watch on YouTube",
    dateLocale: "en-US",
    fallback: [
      {
        id: "n52d58My2WE",
        title: "The red worm",
        description:
          "Meet the star of the show: what the red worm is and how it turns your kitchen scraps into living fertilizer for the garden.",
      },
      {
        id: "X-wYBGICCZI",
        title: "A home and bedding for your worms",
        description:
          "Build their home, prepare the perfect bedding and learn what to feed them, step by step.",
      },
    ],
  },
};

function decodeEntities(text: string): string {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function parseFeed(xml: string): Video[] {
  const videos: Video[] = [];

  for (const entry of xml.split("<entry>").slice(1)) {
    const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const title = entry.match(/<title>([^<]*)<\/title>/)?.[1];
    const published = entry.match(/<published>([^<]+)<\/published>/)?.[1];

    if (id && title) {
      videos.push({ id, title: decodeEntities(title), published });
    }

    if (videos.length >= 6) break;
  }

  return videos;
}

async function getLatestVideos(locale: Locale): Promise<Video[]> {
  try {
    const response = await fetch(CHANNEL_FEED, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) return COPY[locale].fallback;

    const videos = parseFeed(await response.text());
    return videos.length > 0 ? videos : COPY[locale].fallback;
  } catch {
    return COPY[locale].fallback;
  }
}

function formatDate(iso: string | undefined, dateLocale: string): string | null {
  if (!iso) return null;

  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;

  return date.toLocaleDateString(dateLocale, {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "America/New_York",
  });
}

export default async function VideosSection({
  locale = "es",
}: {
  locale?: Locale;
}) {
  const copy = COPY[locale];
  const videos = await getLatestVideos(locale);

  return (
    <section className="mx-auto mt-24 max-w-6xl">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
          {copy.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#1f2a1f] md:text-4xl">
          {copy.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#4b5a4b]">
          {copy.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => {
          const date = formatDate(video.published, copy.dateLocale);

          return (
            <article
              key={video.id}
              className="group overflow-hidden rounded-3xl border border-[#d8d2c3] bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${copy.watchLabel}: ${video.title}`}
                className="block"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[#e7eee2]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/90 shadow-lg transition group-hover:bg-red-600">
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-1 h-6 w-6 fill-white"
                        aria-hidden="true"
                      >
                        <path d="M8 5.5v13l11-6.5-11-6.5z" />
                      </svg>
                    </span>
                  </span>
                </div>

                <div className="p-5">
                  {date && (
                    <p className="text-xs font-bold uppercase tracking-wide text-green-800">
                      {date}
                    </p>
                  )}
                  <h3 className="mt-1.5 line-clamp-2 text-lg font-bold leading-snug text-[#1f2a1f]">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#4b5a4b]">
                      {video.description}
                    </p>
                  )}
                </div>
              </a>
            </article>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-800 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
        >
          {copy.button} <span className="ml-2" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
