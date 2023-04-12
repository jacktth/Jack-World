import { motion } from "framer-motion";
import Image from "next/image";
export default function About() {
  return (
    <>
      <main className="bg-black h-screen">
        <div className="">
        <motion.div
        
            style={{
              position:"absolute",

              height: "50%",
              width: "25%",
              padding: "1px",
              backgroundColor: "red",
              filter: "blur(4px)"
            }}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
          />

            <motion.img
            className="absolute"
              src="/me.jpg"
              sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
              style={{
                position:"absolute",
                height: "50%",
                width: "25%",
                padding: "1px",
                borderRadius: 30,
                backgroundColor: "transparent",
              }}
              // transition={{ ease: "linear", duration: 2, repeat: Infinity }}
            />

      
        </div>
      </main>
      <main>
        <nav className="bg-gray-800 py-5 w-full">
          <div className="flex space-x-20 xm:hidden">
            <a href="#" className="nav-btm " aria-current="page">
              Jack's World
            </a>
            <a href="#" className="nav-btm " aria-current="page">
              Home
            </a>

            <a href="#" className="nav-btm ">
              About
            </a>
            <a href="#" className="nav-btm ">
              Education
            </a>
            <a href="#" className="nav-btm ">
              Projects
            </a>

            <a href="#" className="nav-btm ">
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="mobile-menu">
            <ul>
              <li>
                <a href="#" className="nav-btm " aria-current="page">
                  Jack's World
                </a>
              </li>
              <li>
                <a href="#" className="nav-btm " aria-current="page">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="nav-btm ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="nav-btm ">
                  Education
                </a>
              </li>

              <li>
                <a href="#" className="nav-btm ">
                  Projects
                </a>
              </li>

              <li>
                <a href="#" className="nav-btm ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </main>
    </>
  );
}
