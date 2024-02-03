/**
 * This component is responsible for rendering the background particles
 * It uses the tsParticles library to render the particles
 * The tsParticles library is a wrapper around the particles.js library
 * 
 * renders on the client side
 * 
 * @author Drey Smith
 * @date 2024-02-03
 * @returns {JSX.Element} - The background particles
 */

'use client' // this is how to client-side render the component

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Background() {

    // tsParticles configuration
    const [bgInit, setBgInit] = useState(false);

    /**
     * Following hook is copied from the official tsParticles documentation
     * https://github.com/tsparticles/react
     * ----------------------------------------------------------------------------------------------------------
     */
    // useEffect to init engine, should only run once.
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadFull(engine);
            //await loadBasic(engine);
        }).then(() => {
            setBgInit(true);
        });
    }, []);
    // ----------------------------------------------------------------------------------------------------------

    // JSON Source Animation
    const particlesLoaded = (container) => {
        console.log(container);
    }

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#181818",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (bgInit) {
        return (
            <Particles 
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
                className="absolute inset-0 -z-10"

            />
        );
    }

    // Return something in case the particles are not initialized yet
    return null;
}