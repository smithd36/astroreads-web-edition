'use client';
import React from 'react';

export default function Prompt() {
  return (
    <div className="-z-10 absolute inset-0 flex flex-col -top-1/2 items-center justify-center">
      <img
        src="/neural.png"
        alt="Neural network image"
        className="max-w-full h-auto scale-50"
      />
      <div className="order-1">
        <p className="text-2xl font-thin">Enter some text or select a sugestion to get started.</p>
      </div>
    </div>
  );
}