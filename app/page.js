/**
 * ------------------------------------------------------------------------
 * | @author Drey Smith                                                   |                     
 * | @date 2024-01-01                                                     |
 * | @description This file is the home page of the AstroReads application| 
 * | In this file, I am defining a component function called Home.        |
 * | Inside this function, a div element is returned with a class name of |
 * | text-2xl and an h1 element with the text Home.                       |
 * |                                                                      |
 * | This app is compiled with:                                           |
 * | Tailwind.css, app/ project structure and ESLint. All of which can be |
 * | configured easily hen creating a new Next.js App with:               |
 * |  `npx create-next-app@latest`                                        |
 * |                                                                      |
 * | This component will be used to render the Home page.                 |
 * |                                                                      |
 * | @module Home                                                         | 
 * | @param { * } props                                                   |
 * | @returns { * } JSX                                                   |
 * ------------------------------------------------------------------------ 
 */
import Background from "./components/Background";

export default function Home() {
  return (
    <div>
      <Background />
    </div>
  )
}