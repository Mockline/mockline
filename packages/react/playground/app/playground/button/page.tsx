"use client";

import React from "react";

export default function PlaygroundButtonPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Playground Button</h1>
        <button
          className="bg-gray-500 text-white p-2 rounded"
          onClick={() => alert("Hello from your app!")}
        >
          Click me
        </button>
    </div>
  );
}

