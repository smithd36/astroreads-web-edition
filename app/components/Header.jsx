/** -----------------------------------------------------------------------                                                     |
 * @file app/components/Header.jsx                                        |
 * @description This file is the header of the AstroReads application.    |
 * @returns { * } JSX                                                     |
 * @author Drey Smith                                                     |
 * @date 2024-02-02                                                                       |
 * ------------------------------------------------------------------------ 
 */

import { Link } from "react-router-dom";

// Array of names for the links (page routes)
const links = ["Home", "Recommendations", "Library", "Research"];
export default function Header () {

    // Return the header of the application
    return (
        <div>
            <nav className="bg-gray-800 flex justify-between items-center h-15 p-4 z-10">
                
                {/* Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

                <p className="text-gray-200 ml-4 font-semibold text-2xl mr-auto"><a href="/home">AstroReads</a></p>

                {/* NavBar Links */}
                <ul className="flex gap-6 list-none text-gray-100">
                    {links.map((link) => 
                    <li key={link}>
                        <a href={link.toLowerCase()} className="hover:bg-slate-700 p-2 hover:rounded-md active:bg-sky-950 focus:ring focus:ring-sky-800 focus:rounded-md focus:outline-none">
                        {link}
                        </a>
                    </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}