'use client' // client side component
import React, { useState } from 'react';
import Loading from "../components/Loading";
import Greeting from "./Greeting";
import Background from '../components/Background';

// Code: Login Pageimport React, { useState } from 'react';

export default function GetStarted() {
  const [loading, setLoading] = useState(false);

  const handleGetStartedClick = () => {
    setLoading(true);

    // go to recommendations page
    window.location.href = './recommendations';

    // close page
    window.close();

  };

  return (
    <>
      <Background />
      <div className="h-screen flex items-center justify-center mb-10">
        <div className="w-full max-w-md p-4 bg-white bg-opacity-40 rounded-md shadow-md">
          <Greeting />
          {loading ? <Loading /> : null}
          <button
            onClick={handleGetStartedClick}
            className="w-full p-2 bg-gray-700 text-white font-thin hover:bg-slate-400 font-bold py-2 px-4 rounded ">
              Get Started
          </button>
          </div>
      </div>
    </>
  );
}