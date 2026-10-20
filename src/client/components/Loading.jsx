import { useState, useEffect } from "react";

export default function Loading({ message = "Loading your cute world..." }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 90 ? 15 : prev + 5));
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-pink-100 to-rose-100 p-6">
      {/* Floating hearts */}
      <span className="absolute left-[10%] top-[12%] animate-bounce text-4xl text-pink-400">
        💗
      </span>
      <span className="absolute right-[12%] top-[20%] animate-pulse text-5xl">
        💕
      </span>
      <span className="absolute bottom-[15%] left-[12%] animate-pulse text-5xl">
        💖
      </span>
      <span className="absolute bottom-[20%] right-[10%] animate-bounce text-4xl text-pink-400">
        ♡
      </span>
      <span className="absolute left-[20%] top-[45%] animate-ping text-lg text-pink-300">
        ✨
      </span>
      <span className="absolute right-[20%] top-[60%] animate-pulse text-2xl">
        ✨
      </span>

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        {/* Logo */}
        <div className="relative mb-7 flex h-44 w-44 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-pink-200 border-t-pink-500" />

          <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl shadow-pink-300/60">
            <img
              src="/fav.png"
              alt="Cute Friend IQA"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <span className="absolute -bottom-1 -right-1 animate-pulse text-4xl">
            💗
          </span>
        </div>

        {/* Branding */}
        <h1 className="text-4xl font-black tracking-tight text-pink-600 drop-shadow-sm sm:text-5xl">
          Cute Friend
          <span className="block text-rose-400">IQA ♡</span>
        </h1>

        <p className="mt-3 text-sm font-medium tracking-widest text-pink-500">
          Good Friends <span className="text-rose-500">♥</span> Better Tomorrow
        </p>

        {/* Heart loading bar */}
        <div className="relative mt-10 h-5 w-full overflow-hidden rounded-full border-2 border-white bg-pink-200 shadow-md ring-2 ring-pink-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-500 to-pink-400 transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading message */}
        <p className="mt-6 flex items-center gap-3 text-sm font-bold text-pink-600 sm:text-base">
          <span className="animate-pulse text-xl">♥</span>
          {message}
          <span className="animate-pulse text-xl">♥</span>
        </p>

        {/* Bouncing dots */}
        <div className="mt-4 flex gap-2">
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-pink-400" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-pink-500 [animation-delay:150ms]" />
          <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-rose-500 [animation-delay:300ms]" />
        </div>

        <p className="mt-8 text-xs text-pink-400">
          Made with love, just for you 🎀
        </p>
      </div>
    </div>
  );
}
