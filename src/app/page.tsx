import { FloatingFood } from "@/components/FloatingFood";
import { RestaurantList } from "@/components/RestaurantList";
import { intro, restaurants } from "@/data/restaurants";

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:py-20">
      <FloatingFood />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="animate-blob absolute -left-10 top-10 h-72 w-72 rounded-full bg-[#2f6fb5]/20 blur-3xl" />
        <div className="animate-blob absolute left-1/3 -top-10 h-80 w-80 rounded-full bg-[#c75a1a]/20 blur-3xl [animation-delay:-5s]" />
        <div className="animate-blob absolute -right-10 top-16 h-72 w-72 rounded-full bg-[#c0396a]/20 blur-3xl [animation-delay:-9s]" />
        <div className="animate-blob absolute -left-16 bottom-10 h-80 w-80 rounded-full bg-[#2e7d46]/20 blur-3xl [animation-delay:-3s]" />
        <div className="animate-blob absolute left-1/2 -bottom-16 h-72 w-72 rounded-full bg-[#b3302a]/15 blur-3xl [animation-delay:-7s]" />
        <div className="animate-blob absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-[#2f6fb5]/15 blur-3xl [animation-delay:-11s]" />
      </div>

      <section className="mx-auto max-w-2xl text-center">
        <h1 className="animate-fade-up font-hand text-6xl font-bold sm:text-8xl">
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

      <RestaurantList restaurants={restaurants} />
    </main>
  );
}
