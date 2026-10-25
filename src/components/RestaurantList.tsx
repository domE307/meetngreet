"use client";

import { useRef, useState } from "react";
import { RestaurantCard } from "@/components/RestaurantCard";
import type { Restaurant } from "@/data/restaurants";

export function RestaurantList({ restaurants }: { restaurants: Restaurant[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function goTo(index: number) {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
  }

  function updateActive() {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    });
    setActive(nearest);
  }

  const last = restaurants.length - 1;

  return (
    <>
      <div className="mx-auto mt-12 flex max-w-2xl md:mt-16 items-center gap-4" role="separator">
        <span className="h-px flex-1 bg-foreground/15" />
        <span className="text-sm font-medium uppercase tracking-widest text-accent">
          Meine Vorschläge
        </span>
        <span className="h-px flex-1 bg-foreground/15" />
      </div>

      <section aria-roledescription="Karussell" aria-label="Restaurantvorschläge" className="mt-8 md:mt-12">
        <div
          ref={trackRef}
          tabIndex={0}
          onScroll={updateActive}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") goTo(Math.min(active + 1, last));
            if (e.key === "ArrowLeft") goTo(Math.max(active - 1, 0));
          }}
          className="no-scrollbar relative flex flex-col gap-6 px-4 pb-6 pt-2 outline-none md:snap-x md:snap-mandatory md:flex-row md:gap-6 md:overflow-x-auto md:px-[calc(50%-min(18rem,42.5vw))]"
        >
          {restaurants.map((restaurant, i) => (
            <div
              key={restaurant.id}
              aria-label={`${i + 1} von ${restaurants.length}`}
              className={`w-full transition duration-500 md:w-[min(36rem,85vw)] md:shrink-0 md:snap-center ${
                i === active ? "" : "md:scale-95 md:opacity-60"
              }`}
            >
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>

        <div className="mt-4 hidden items-center justify-center gap-5 pb-12 md:flex">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Vorheriger Vorschlag"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-foreground/15 bg-card text-xl shadow transition hover:scale-110 active:scale-95 disabled:cursor-default disabled:opacity-30 disabled:hover:scale-100"
          >
            ←
          </button>
          <div className="flex gap-2">
            {restaurants.map((restaurant, i) => (
              <button
                key={restaurant.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Zu ${restaurant.name}`}
                aria-current={i === active}
                className="h-3 cursor-pointer rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "2rem" : "0.75rem",
                  background: i === active ? restaurant.color : "color-mix(in srgb, currentColor 25%, transparent)",
                }}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === last}
            aria-label="Nächster Vorschlag"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-foreground/15 bg-card text-xl shadow transition hover:scale-110 active:scale-95 disabled:cursor-default disabled:opacity-30 disabled:hover:scale-100"
          >
            →
          </button>
        </div>
      </section>
    </>
  );
}
