export default function Header() {
  return (
    <header className="relative isolate flex min-h-[100px] w-full items-center justify-center overflow-hidden border-b border-pink-200 bg-gradient-to-r from-pink-100 via-rose-50 to-pink-100 px-4 py-6 shadow-sm sm:min-h-[116px]">
      {/* Decorative clouds */}
      <div className="absolute -left-8 -top-10 -z-10 h-28 w-44 rounded-full bg-pink-200/50 blur-xl" />
      <div className="absolute -right-8 -top-10 -z-10 h-28 w-44 rounded-full bg-rose-200/50 blur-xl" />

      {/* Left heart */}
      <span className="absolute left-[7%] top-1/2 -translate-y-1/2 -rotate-12 text-3xl text-pink-400 sm:text-5xl">
        ♡
      </span>

      <span className="absolute left-[18%] top-6 animate-pulse text-sm text-pink-400 sm:text-xl">
        ♥
      </span>

      {/* Center title */}
      <div className="relative z-10 flex items-center justify-center gap-2 text-center sm:gap-4">
        <span className="hidden text-2xl text-pink-500 sm:inline-block">
          ✦ ♥
        </span>

        <h1 className="text-xl font-extrabold tracking-tight text-pink-600 drop-shadow-sm sm:text-2xl md:text-3xl lg:text-3xl">
          <span className="hidden sm:inline">
            Welcome to my Cute Friend IQA
          </span>

          <span className="sm:hidden">Cutie ❤️</span>
        </h1>

        <span className="hidden text-2xl text-pink-500 sm:inline-block">
          ♥ ✦
        </span>
      </div>

      {/* Right heart */}
      <span className="absolute right-[7%] top-1/2 -translate-y-1/2 rotate-12 text-3xl text-pink-400 sm:text-5xl">
        ♡
      </span>

      <span className="absolute right-[18%] bottom-5 animate-pulse text-sm text-pink-400 sm:text-xl">
        ♥
      </span>

      {/* Tiny sparkles */}
      <span className="absolute left-[27%] top-5 text-pink-400">✨</span>
      <span className="absolute right-[27%] bottom-4 text-pink-400">✧</span>
    </header>
  );
}
