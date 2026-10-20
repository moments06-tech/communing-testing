 export default function Sidebar({ title, emoji, cards }) {
  return (
    <aside className="rounded-3xl border border-pink-200 bg-white/60 p-4 shadow-sm sm:p-5">
      <h2 className="mb-5 text-lg font-extrabold text-pink-600 sm:text-xl">
        {emoji} {title}
      </h2>

      <div className="flex flex-col gap-4">
        {cards.map((card) => (
          <CuteCard key={card.title} card={card} />
        ))}
      </div>
    </aside>
  );
}

function CuteCard({ card }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-pink-100 bg-white/80 p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-bold text-pink-600">
          <span className="mr-1">{card.emoji}</span>
          {card.title}
        </h3>
        <span className="text-pink-300">♥</span>
      </div>

      <p className="mb-3 text-sm leading-relaxed text-purple-800/80">
        {card.description}
      </p>

      <img
        src={card.image}
        alt={card.title}
        loading="lazy"
        className="h-32 w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.02]"
      />
    </article>
  );
}
