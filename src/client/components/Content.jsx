import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { leftCards, rightCards } from "../constant";
import ChatBox from "./ChatBox";

export default function Content() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 px-3 py-5 sm:px-5 sm:py-7 lg:px-7">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-5 lg:grid-cols-12 lg:gap-5">
        {/* Left: 3 columns */}
        <div className="order-2 lg:order-1 lg:col-span-3">
          <Sidebar title="My Favorite Things" emoji="💗" cards={leftCards} />
        </div>

        {/* Center: 6 columns */}
        <div className="order-1 min-w-0 lg:order-2 lg:col-span-6">
          <ChatBox />
        </div>

        {/* Right: 3 columns */}
        <div className="order-3 lg:col-span-3">
          <Sidebar title="Little Reminders" emoji="💕" cards={rightCards} />
        </div>
      </div>
    </main>
  );
}
