import type { CSSProperties } from "react";
import type { Restaurant } from "@/data/restaurants";

const DELTA_LON = 0.004;
const DELTA_LAT = 0.0025;

function osmEmbedUrl({ lat, lon }: Restaurant) {
  const bbox = [lon - DELTA_LON, lat - DELTA_LAT, lon + DELTA_LON, lat + DELTA_LAT].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
}

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { cuisine, emoji, color, name, comment, dishes, mapsUrl, menuUrl } = restaurant;

  return (
    <article
      style={{ "--card-color": color } as CSSProperties}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-card shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="flex items-center justify-between bg-(--card-color) px-5 py-3 text-white md:px-7">
        <span className="text-lg font-semibold">
          <span className="group-hover-wiggle inline-block">{emoji}</span> {cuisine}
        </span>
      </div>
      <iframe
        title={`Karte: ${name}`}
        src={osmEmbedUrl(restaurant)}
        loading="lazy"
        className="pointer-events-none h-56 w-full md:h-72 border-0"
      />
      <div className="flex flex-1 flex-col gap-4 p-5 md:p-7">
        <h2 className="text-xl font-semibold md:text-2xl">{name}</h2>
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
            className="inline-flex items-center gap-1 text-base font-medium text-(--card-color) hover:underline"
          >
            In Google Maps öffnen{" "}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          {menuUrl && (
            <a
              href={menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-base font-medium text-(--card-color) hover:underline"
            >
              Speisekarte{" "}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
