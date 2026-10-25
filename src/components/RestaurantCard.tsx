import type { Restaurant } from "@/data/restaurants";

const DELTA_LON = 0.004;
const DELTA_LAT = 0.0025;

function osmEmbedUrl({ lat, lon }: Restaurant) {
  const bbox = [lon - DELTA_LON, lat - DELTA_LAT, lon + DELTA_LON, lat + DELTA_LAT].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
}

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { cuisine, emoji, name, comment, dishes, mapsUrl, menuUrl } = restaurant;

  return (
    <article className="group flex h-full flex-col transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-md">
      <iframe
        title={`Karte: ${name}`}
        src={osmEmbedUrl(restaurant)}
        loading="lazy"
        className="h-72 w-full border-0"
      />
      <div className="flex flex-1 flex-col gap-4 p-7">
        <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent">
          <span className="group-hover-wiggle inline-block">{emoji}</span> {cuisine}
        </span>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-base leading-relaxed text-foreground/75">{comment}</p>
        <ul className="flex flex-wrap gap-2">
          {dishes.map((dish) => (
            <li
              key={dish}
              className="rounded-md bg-foreground/5 px-2.5 py-1 text-sm text-foreground/70"
            >
              {dish}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-2">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-base font-medium text-accent hover:underline"
          >
            In Google Maps öffnen <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          {menuUrl && (
            <a
              href={menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-base font-medium text-accent hover:underline"
            >
              Speisekarte <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
