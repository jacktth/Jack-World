import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import About from "./about";
import Layout from "../components/home/layout";
import { useInView } from "react-intersection-observer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <>
      <Layout />
      <div className="grid grid-cols-2  gap-20">
        <img className="col-span-1 xm:col-span-2  xm:hidden" src="/me.jpg" />
        <div className=" col-span-1 xm:col-span-2 grid grid-cols-1  content-center  xm:hidden">
          <div className="mr-5 bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-blue-300 to-purple-500">
            <p className="paragraph text-2xl font-bold">Welcome! My name is</p>
            <p className="paragraph py-3 text-8xl font-serif "> Jack Tang </p>
            <p className="paragraph text-2xl font-bold">
              If you're hiring a junior front-end developer, get in touch!
            </p>
            <p className="paragraph text-2xl font-extrabold">
              Few Tech used recently:
            </p>
            <div className="flex justify-center content-center ">
              <a
                className="logo hover:bg-yellow-200"
                title="Javascript"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              >
                <img className="" src="/javascript.svg" alt="" />
              </a>
              <a
                className="logo hover:bg-white"
                title="Typescript"
                href="https://www.typescriptlang.org/"
              >
                <img src="/typescript.svg" alt="" />
              </a>

              <a
                className="logo hover:animate-pulse"
                title="HTML"
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              >
                <img src="/html.svg" alt="" />
              </a>
              <a
                className="logo hover:animate-pulse"
                title="CSS"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              >
                <img src="/css.svg" alt="" />
              </a>
              <a
                className="logo flex hover:animate-bounce"
                title="Tailwind CSS"
                href="https://tailwindcss.com/"
              >
                <img className="self-center" src="/tailwind.svg" alt="" />
              </a>
              <a
                className="logo hover:animate-spin  "
                title="React"
                href="https://react.dev/"
              >
                <img className="" src="/react.svg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xm:col-span-2 grid grid-cols-1  content-center sm:hidden">
          <img className="col-span-1 xm:col-span-2 " src="/me.jpg" />

          <div className="absolute bottom-7">
            <p className="paragraph text-2xl ">Welcome! My name is</p>
            <p className="paragraph text-8xl font-serif "> Jack Tang </p>
            <p className="paragraph text-2xl font-extrabold">
              If you're hiring a junior front-end developer, get in touch!
            </p>
          </div>
        </div>
      </div>
      <h3>My Side Projects:</h3>
      <div className="grid grid-cols-2  gap-20">
        <div>
          <h1>Stock-Chart</h1>
          <p>
            It is a web application for users to view stock price. One of the
            main feature is for the user to save a specific range of stock data
            and use the api to retrieve all the stored data.
          </p>
          <p>React, Typescript, Nestjs, Supabase</p>
        </div>
        <img src="/stock-chart.jpg" alt="" />

      </div>
      <h3>About me:</h3>
      <div className="grid grid-cols-2 ">
        <div className="border-2 border-orange-400">ddddddddddddddd</div>
        <div className="border-2 border-orange-400">ddddddddddddddd</div>
        <div className="border-2 border-orange-400">
          <div className="grid grid-cols-2">
            <div className=" ">
              ddddddddddddddd
            </div>
          </div>
        </div>
        <div className=" h-16  border-2 border-orange-400">
          ddddddddddddddd
        </div>
      </div>
    </>
  );
}
