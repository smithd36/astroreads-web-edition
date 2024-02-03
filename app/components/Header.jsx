/** -----------------------------------------------------------------------                                                     |
 * @file app/components/Header.jsx                                        |
 * @description This file is the header of the AstroReads application.    |
 * @returns { * } JSX                                                     |
 * @author Drey Smith                                                     |
 * @date 2024-02-02                                                                       |
 * ------------------------------------------------------------------------ 
 */
// Array of names for the links (page routes)
const links = ["Home", "Get Recommendations", "Free Library", "About"];
export default function Header () {
    return (
        <nav className="bg-gray-800 flex justify-between items-center h-15 p-4">
            
            {/* Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>

            <p className="text-yellow-50 ml-4 font-semibold text-2xl mr-auto">AstroReads</p>

            {/* NavBar Links */}
            <ul className="flex gap-6 list-none text-gray-100">
                {links.map((link) => <li key={link}><a href="#">{link}</a></li>)}
            </ul>
        </nav>
    );
}