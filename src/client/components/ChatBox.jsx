import { useContext, useState } from "react";
import { initialMessages } from "../constant";
import { Context } from "../context/Context";

export default function ChatBox() {
  const { messageDb, setMessagesDb } = useContext(Context);

  const [input, setInput] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();

    const sender = sessionStorage.getItem("sender");

    const text = input.trim();
    if (!text) return alert("Enter some message");
    console.log(text);

    setMessagesDb((previous) => [
      ...previous,
      {
        _id: Date.now(),
        text,
        sender: sender,
        createdAt: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    try {
      const fetchData = await fetch(
        "/api/v1/message/we-send-message-to-each-other",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: input, sender }),
        },
      );

      const userData = await fetchData.json();

      if (!userData) {
        console.log("Server does not responce");
      }
      setInput("");
    } catch (error) {}
  };

  return (
    <section className="flex min-h-[580px] flex-col overflow-hidden rounded-3xl border border-pink-200 bg-white/80 shadow-md shadow-pink-100/60 lg:min-h-[760px]">
      {/* Chat header */}
      <div className="flex items-center gap-3 border-b border-pink-100 bg-pink-50/90 p-4 sm:p-5">
        {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-200 text-2xl">
          👧🏻
        </div> */}

        <div className="flex-1">
          <h2 className="font-bold ml-4 text-pink-600">Our Cute Chat</h2>
          {/* <p className="text-sm text-purple-500">
            <span className="mr-1 text-green-500">●</span>
            Your cute chat friend
          </p> */}
        </div>

        <span className="text-xl tracking-widest text-pink-400">•••</span>
      </div>

      {/* Messages */}
      <div
        className="flex flex-1 flex-col gap-5 overflow-y-auto p-4 sm:p-5"
        aria-live="polite"
      >
        {messageDb &&
          messageDb.map((message) => {
            const isMe = message.sender === "me";

            return (
              <div
                key={message._id}
                className={`flex items-end gap-2 ${
                  isMe ? "justify-end" : "justify-start"
                }`}
              >
                {!isMe && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-100 text-xl">
                    👧🏻
                  </div>
                )}

                <div
                  className={`max-w-[82%] sm:max-w-[78%] ${
                    isMe ? "items-end" : "items-start"
                  } flex flex-col`}
                >
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed sm:text-base ${
                      isMe
                        ? "rounded-br-sm bg-gradient-to-br from-pink-500 to-rose-400 text-white"
                        : "rounded-bl-sm bg-pink-100 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>

                  <span className="mt-1 px-2 text-xs text-pink-400">
                    {message.createdAt}
                  </span>
                </div>

                {isMe && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fuchsia-100 text-xl">
                    🧑🏻
                  </div>
                )}
              </div>
            );
          })}
      </div>

      {/* Message input */}
      <form
        onSubmit={sendMessage}
        className="border-t border-pink-100 bg-white/90 p-3 sm:p-4"
      >
        <div className="flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50/70 p-2 pl-4 transition focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-100">
          <span className="text-xl">☺</span>

          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type a message..."
            aria-label="Type a message"
            className="min-w-0 flex-1 bg-transparent py-2 text-sm text-gray-700 outline-none placeholder:text-pink-300 sm:text-base"
          />

          <button
            type="submit"
            aria-label="Send message"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-xl text-white shadow-md transition hover:scale-105 hover:shadow-lg active:scale-95"
          >
            ➤
          </button>
        </div>
      </form>
    </section>
  );
}
