'use client'
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../utils/loading.json';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Loading({ children }) { 
    const [loading, setLoading] = useState(true);

    // lottie setup
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        // Simulate a network request
        setTimeout(() => {
            setLoading(false);
        }, 8000);
    }, []);

    return (
        <div className={inter.className}>
            { loading ? <Lottie options={defaultOptions} height={400} width={400} /> : children }
        </div>
    );
}