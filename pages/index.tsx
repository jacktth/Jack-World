import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import About from "./about";
import Layout from "../components/home/layout";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { ref: project1, inView: project1InView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <>
      <Layout />
      <div className="grid grid-cols-2  gap-20 mx-20">
        <div className="flex h-full items-center">
          <img
            className="w-full h-[70%] col-span-1 xm:col-span-2  xm:hidden "
            src="/test.svg"
            alt=""
          />
        </div>

        <div className=" col-span-1 xm:col-span-2 grid grid-cols-1  content-center  xm:hidden">
          <div className="mr-5 bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-blue-300 to-purple-500">
            <p className="paragraph text-2xl font-bold">Welcome! My name is</p>
            <p className="paragraph py-3 text-8xl font-serif "> Jack Tang </p>
            <p className="paragraph text-2xl font-bold">
              If you're hiring a junior front-end developer, get in touch!
            </p>
      

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
      <div className="">
      <h3 className="w-full text-center">My Skills:</h3>
      <div className="grid grid-cols-4  gap-10 m-20 h-full">
        <div className="logo-container border-yellow-300 ">
          <a
            className=""
            title="Javascript"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >
            <img className="logo" src="/javascript.svg" alt="" />

            <p className="mt-2 text-lg">Javascript</p>
          </a>
        </div>

        <div className="logo-container border-blue-600 ">
          <a
            className=""
            title="Javascript"
            href="https://www.typescriptlang.org/"
          >
            <img className="logo" src="/typescript.svg" alt="" />

            <p className="mt-2 text-lg">Typescript</p>
          </a>
        </div>
        <div className="logo-container border-blue-500 ">
          <a className="" title="CSS" href="https://www.typescriptlang.org/">
            <img className="logo" src="/css.svg" alt="" />

            <p className="mt-2 text-lg">CSS</p>
          </a>
        </div>
        <div className="logo-container border-orange-500 ">
          <a className="" title="HTML5" href="https://www.typescriptlang.org/">
            <img className="logo" src="/html.svg" alt="" />

            <p className="mt-2 text-lg">HTML5</p>
          </a>
        </div>
        <div className="logo-container border-cyan-500 ">
          <a className="" title="Tailwindcss" href="https://tailwindcss.com/">
            <img className="logo" src="/tailwind.svg" alt="" />

            <p className="mt-2 text-lg">Tailwindcss</p>
          </a>
        </div>
        <div className="special-logo-container before:magic-layer1 before:from-cyan-300 before:to-white after:magic-layer2 after:from-blue-500 after:to-white ">
          <a className=" magic-cover " title="React" href="https://react.dev/">
            <img className="logo hover:animate-spin" src="/react.svg" alt="" />
            <p className="mt-2 text-lg">React</p>
          </a>
        </div>
        <div className="logo-container border-green-700 brightness-150">
          <a className="" title="Nodejs" href="https://nodejs.org/en">
            <img className="logo" src="/nodejs.svg" alt="" />

            <p className="mt-2 text-lg">Nodejs</p>
          </a>
        </div>
        <div className="logo-container border-red-500 ">
          <a
            className=""
            title="Git"
            href="https://git-scm.com/"
          >
            <img className="logo" src="/git.svg" alt="" />

            <p className="mt-2 text-lg">Git</p>
          </a>
        </div>
      </div>
      </div>


      <div ref={project1} className="bg-white text-black gap-20 px-20">
          <h3 className="w-full text-center">Projects:</h3>
        <div
          className={` grid grid-cols-3  gap-20 px-4 ${
            project1InView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className=" project-content">
            <h1>Stock-Chart</h1>
            <p>
              It is a web application for users to view stock price. One of the
              main feature is for the user to save a specific range of stock
              data and use the api to retrieve all the stored data.
            </p>
            <p>React, Typescript, Nestjs, Supabase</p>
            <div className="flex my-4">
              <a className="project-source  " href="">
                Source Code
              </a>
              <a className="project-demo" href="">
                Demo
              </a>
            </div>
          </div>
          <a className="project-image" href="">
            <img
           
              src="/stock-chart.jpg"
              alt=""
            />
          </a>
        </div>
      </div>

      <h3>About me:</h3>
    </>
  );
}
