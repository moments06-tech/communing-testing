import { useContext, useState } from "react";
import { Context } from "../context/Context";

export default function PinModel() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const { fetchMessage, setIsPin, setIsHome } = useContext(Context);

  const handlePinChange = (e) => {
    // Allow letters and numbers, with a maximum of 4 characters
    const value = e.target.value.replace(/[^a-zA-Z0-9]/g, "").slice(0, 4);

    setPin(value);
    setError("");
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    if (pin.length !== 4) {
      setError("Please enter all 4 characters 💗");
      return;
    }

    try {
      const fetchData = await fetch("/api/v1/message/verify-pin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pin }),
      });

      const userData = await fetchData.json();
      if (!userData.data) {
        return setError("Enter the correct pin 💗");
      }
      // console.log(userData);
      sessionStorage.setItem("sender", userData.data);
      setIsPin(false);
      setIsHome(true);
      fetchMessage()
      setError("");
    } catch (error) {}
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-pink-950/40 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-pink-100 bg-white shadow-2xl shadow-pink-300/40">
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-br from-pink-200 via-pink-100 to-rose-100" />

        <div className="relative px-7 pb-8 pt-8 text-center">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-pink-400 to-rose-500 text-5xl shadow-lg shadow-pink-300/50">
            💗
          </div>

          <h2 className="text-2xl font-extrabold text-pink-800">
            Hello, Cutie!
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Enter your secret 4-character PIN ✨
          </p>

          <form onSubmit={handleVerify} className="mt-7">
            <label
              htmlFor="cute-pin"
              className="mb-3 block text-sm font-semibold text-pink-700"
            >
              Your secret PIN 🎀
            </label>

            <input
              id="cute-pin"
              type="text"
              inputMode="text"
              autoComplete="off"
              maxLength={4}
              placeholder=". . . ."
              value={pin}
              onChange={handlePinChange}
              autoFocus
              className="w-full rounded-2xl border-2 border-pink-200 bg-pink-50/70 px-4 py-4 text-center text-3xl font-bold tracking-[0.5em] text-pink-700 outline-none transition placeholder:text-pink-300 focus:border-pink-400 focus:bg-white focus:ring-4 focus:ring-pink-100"
            />

            {error && (
              <p role="alert" className="mt-3 text-sm text-rose-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-4 font-bold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            >
              Verify PIN 💕
            </button>
          </form>

          <p className="mt-5 text-xs text-pink-400">
            Made with love, just for you ♡
          </p>
        </div>
      </div>
    </div>
  );
}
