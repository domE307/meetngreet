import { FloatingFood } from "@/components/FloatingFood";
import { Reveal } from "@/components/Reveal";
import { RestaurantCard } from "@/components/RestaurantCard";
import { intro, restaurants } from "@/data/restaurants";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:py-20">
      <FloatingFood />
      <section className="mx-auto max-w-2xl text-center">
        <h1 className="animate-fade-up text-4xl font-bold sm:text-5xl">
          {intro.greeting} <span className="animate-wave">👋</span>
        </h1>
        {intro.text.map((paragraph, i) => (
          <p
            key={paragraph}
            className="animate-fade-up mt-5 text-lg leading-relaxed text-foreground/75"
            style={{ animationDelay: `${200 + i * 200}ms` }}
          >
            {paragraph}
          </p>
        ))}
      </section>

      <div className="mx-auto mt-16 flex max-w-2xl items-center gap-4" role="separator">
        <span className="h-px flex-1 bg-foreground/15" />
        <span className="text-sm font-medium uppercase tracking-widest text-accent">Meine Vorschläge</span>
        <span className="h-px flex-1 bg-foreground/15" />
      </div>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        {restaurants.map((restaurant, i) => (
          <Reveal key={restaurant.id} delay={(i % 2) * 150}>
            <RestaurantCard restaurant={restaurant} />
          </Reveal>
        ))}
      </section>
    </main>
  );
}
