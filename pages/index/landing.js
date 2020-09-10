import React from "react";

export default function Landing() {
  return (
    <div className="flex flex-col items-center">
      <img src="/logo.png" alt="logo" className="mb-12" width="300px" />
      <div className="text-center">
        <h1 className="mb-12 font-brand">
          Support the open source Minecraft&trade; modding community
          <br />
          <span className="text-teal-200 font-bold">
            Get exclusive stickers!
          </span>
        </h1>
        <button className="font-brand bg-accent-red hover:bg-accent-red-700 py-4 px-8 rounded-full text-xl">
          Start modding!
        </button>
      </div>
    </div>
  );
}