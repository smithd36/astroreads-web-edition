'use client'

import React, { useState } from 'react';
import Loading from "../loading";
import Greeting from "./Greeting";

// Code: Login Pageimport React, { useState } from 'react';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleGetStartedClick = () => {
    setLoading(true);
  }

  return (
    <div className="bg-white bg-opacity-60 h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 bg-white bg-opacity-40 rounded-md shadow-md">
        <Greeting />
        {loading ? <Loading /> : null}
        <button
          onClick={handleGetStartedClick}
          className="w-full p-2 bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Get Started
        </button>
      </div>
    </div>
  );
}