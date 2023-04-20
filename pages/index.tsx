import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import About from "./about";
import Layout from "../components/home/layout";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import me from "../public/me.svg";
import js from "../public/javascript.svg";
import ts from "../public/typescript.svg";
import tw from "../public/tailwind.svg";
import html from "../public/html.svg";
import css from "../public/css.svg";
import git from "../public/git.svg";
import nodejs from "../public/nodejs.svg";
import rt from "../public/react.svg";
import stockChart from "../public/stock-chart.svg";

export default function Home() {
  const { ref: project1, inView: project1InView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
      <Layout />
      <div
        className="grid gap-20 grid-cols-2  h-auto
        sm:mx-20 
      xm:grid-cols-1"
      >
        <div
          className="    
        xm:hidden "
        >
          <Image className="w-full   " src={me} alt="" />
        </div>

        <div
          className="
         flex justify-center items-center
        xm:hidden"
        >
          <div className=" h-auto mr-5 bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-blue-300 to-purple-500">
            <p className="paragraph text-2xl font-bold">Welcome! My name is</p>
            <p className="paragraph py-3 text-8xl font-serif "> Jack Tang </p>
            <p className="paragraph text-2xl font-bold">
              If you&apos;re hiring a junior front-end developer, get in touch!
            </p>
          </div>
        </div>

        <div
          className=" content-center relative 
        sm:hidden"
        >
          <div
            className="absolute top-[70%] text-center 
        sm:hidden"
          >
            <p className=" text-xl  mb-1">Welcome! My name is</p>
            <p className="text-xl mb-1 font-serif "> Jack Tang </p>
            <p className="text-xl  mb-1 font-extrabold">
              If you&apos;re hiring a junior front-end developer, get in touch!
            </p>
          </div>
          <Image className="w-full" src={me} alt={""} />
        </div>
      </div>

      <div className="w-auto h-auto bg-neutral-800">
        <p className="w-full text-center text-3xl py-6">My Skills</p>
        <div
          className="grid grid-cols-4    h-full 
         sm:gap-10
        xm:m-2 xm:gap-2 xm:grid-cols-3"
        >
          <div
            className="
            border-yellow-300 
          sm:logo-container 
          xm:logo-container-xm"
          >
            <a
              className=""
              title="Javascript"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <Image className="logo" src={js} alt="" />

              <p className="mt-2 text-lg">Javascript</p>
            </a>
          </div>

          <div
            className=" border-blue-600 
            sm:logo-container
          xm:logo-container-xm"
          >
            <a
              className=""
              title="Javascript"
              href="https://www.typescriptlang.org/"
            >
              <Image className="logo" src={ts} alt="" />

              <p className="mt-2 text-lg">Typescript</p>
            </a>
          </div>
          <div
            className=" border-blue-500 
            sm:logo-container
          xm:logo-container-xm"
          >
            <a className="" title="CSS" href="https://www.typescriptlang.org/">
              <Image className="logo" src={css} alt="" />

              <p className="mt-2 text-lg">CSS</p>
            </a>
          </div>
          <div
            className=" border-orange-500 
           sm:logo-container
          xm:logo-container-xm"
          >
            <a
              className=""
              title="HTML5"
              href="https://www.typescriptlang.org/"
            >
              <Image className="logo" src={html} alt="" />

              <p className="mt-2 text-lg">HTML5</p>
            </a>
          </div>
          <div
            className="border-cyan-500 
            sm:logo-container 
          xm:logo-container-xm"
          >
            <a className="" title="Tailwindcss" href="https://tailwindcss.com/">
              <Image className="logo" src={tw} alt="" />

              <p className="mt-2 text-lg">Tailwindcss</p>
            </a>
          </div>
          
          <div
          // before:magic-layer1 before:from-cyan-300 before:to-white after:magic-layer2
          // after:from-blue-500 after:to-white 
          //   sm:special-logo-container
          //   xm:special-logo-container-xm
            className=" 
            border-blue-400
          sm:logo-container 
          xm:logo-container-xm"
          
          >
            <a
              className=" sm:magic-cover 
              xm:magic-cover-xm"
              title="React"
              href="https://react.dev/"
            >
              <Image
                className="logo hover:animate-spin"
                src={rt}
                alt=""
              />
              <p className="mt-2 text-lg">React</p>
            </a>
          </div>
          <div
            className="
           border-green-700 brightness-150
           sm:logo-container
          xm:logo-container-xm"
          >
            <a className="" title="Nodejs" href="https://nodejs.org/en">
              <Image className="logo" src={nodejs} alt="" />

              <p className="mt-2 text-lg">Nodejs</p>
            </a>
          </div>

          <div
            className="border-red-500 
            sm:logo-container 
          xm:logo-container-xm"
          >
            <a className="" title="Git" href="https://git-scm.com/">
              <Image className="logo" src={git} alt="" />

              <p className="mt-2 text-lg">Git</p>
            </a>
          </div>
        </div>
      </div>

      <div
        ref={project1}
        className=" h-auto
      "
      >
        <p className="w-full text-center text-3xl py-4">Projects</p>
        <div
          className={` sm:project-container
      xm:project-container-xm
          ${project1InView ? "opacity-100" : "opacity-0"}`}
        >
          <div className="project-content">
            <p className="font-medium">Stock-Chart</p>
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
          <div className="project-image" onClick={() => {}}>
            <Image src={stockChart} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
