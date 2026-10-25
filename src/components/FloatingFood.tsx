const items = [
  { emoji: "🍕", left: "6%", top: "8%", size: "3.6rem", delay: "0s" },
  { emoji: "🍣", left: "88%", top: "12%", size: "3.2rem", delay: "-3s" },
  { emoji: "🍝", left: "92%", top: "38%", size: "3rem", delay: "-7s" },
  { emoji: "🍜", left: "8%", top: "36%", size: "3.4rem", delay: "-6s" },
  { emoji: "🫒", left: "5%", top: "62%", size: "2.8rem", delay: "-2s" },
  { emoji: "🍰", left: "90%", top: "64%", size: "3.2rem", delay: "-9s" },
  { emoji: "🥡", left: "12%", top: "88%", size: "3.2rem", delay: "-5s" },
  { emoji: "🍷", left: "86%", top: "88%", size: "3rem", delay: "-8s" },
];

export function FloatingFood() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 hidden md:block overflow-hidden">
      {items.map(({ emoji, left, top, size, delay }) => (
        <span
          key={emoji}
          className="animate-float absolute opacity-60"
          style={{ left, top, fontSize: size, animationDelay: delay }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
