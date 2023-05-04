import Head from "next/head";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import me from "../../public/me.svg";
import js from "../../public/javascript.svg";
import ts from "../../public/typescript.svg";
import tw from "../../public/tailwind.svg";
import html from "../../public/html.svg";
import css from "../../public/css.svg";
import git from "../../public/git.svg";
import nodejs from "../../public/nodejs.svg";
import rt from "../../public/react.svg";
import stockChart from "../../public/stock-chart.svg";
import Layout from "./layout";
import Link from "next/link";
import {
  SiReactquery,
  SiReact,
  SiRedux,
  SiNestjs,
  SiSupabase,
} from "react-icons/si";
import { useRef } from "react";
function Home() {
  const { ref: project1, inView: project1InView } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });
  const projectField = useRef<null | HTMLDivElement>(null);

  return (
    <>
      {" "}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout {...projectField} />
      <div
        className="grid gap-20 grid-cols-2  h-auto
        sm:mx-20 
      xm:grid-cols-1"
      >
        <div
          className="    
        xm:hidden"
        >
          <Image priority={true} className="  " src={me} alt="" />
        </div>

        <div
          className="
         flex justify-center items-center
        xm:hidden"
        >
          <div className=" h-auto w-auto mr-5 bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-blue-300 to-purple-500">
            <p className="paragraph text-2xl mm:text-2xl ">
              Welcome! My name is
            </p>
            <p className="paragraph py-2  text-7xl mm:text-4xl font-bold">
              {" "}
              Jack Tang{" "}
            </p>
            <p className="paragraph text-2xl mm:text-2xl ">
              If you&apos;re hiring a junior front-end developer, get in touch!
            </p>
          </div>
        </div>

        <div
          className=" content-center relative 
        sm:hidden "
        >
          <div
            className="absolute top-[70%] 
            paragraph-container
        sm:hidden"
          >
            <p className="paragraph-xm text-xl  ">Welcome! My name is</p>
            <p className="paragraph-xm text-2xl    font-bold "> Jack Tang </p>
            <p className="paragraph-xm text-xl   ">
              If you&apos;re hiring a junior front-end developer, get in touch!
            </p>
          </div>
          <Image className="w-full" src={me} alt={""} />
        </div>
      </div>
      <div className="w-auto h-auto bg-neutral-800 sm:px-20 ">
        <p className="w-full text-center text-3xl py-6">My Skills</p>
        <div
          className="grid grid-cols-5  mm:grid-cols-4  h-full 
         sm:gap-10
        xm:m-2 xm:gap-2 xm:grid-cols-3"
        >
          <div
            className="
            border-yellow-300 
          sm:skill-container
          xm:skill-container-xm"
          >
            <a
              className="sm:logo-container-sm xm:logo-container-xm"
              title="Javascript"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <Image className="logo-image" src={js} alt="" />

              <p className="text-lg">Javascript</p>
            </a>
          </div>

          <div
            className=" border-blue-600 
            sm:skill-container
          xm:skill-container-xm"
          >
            <a
              className="sm:logo-container-sm xm:logo-container-xm"
              title="Javascript"
              href="https://www.typescriptlang.org/"
            >
              <Image className="logo-image" src={ts} alt="" />

              <p className=" text-lg">Typescript</p>
            </a>
          </div>
          <div
            className=" border-blue-500 
            sm:skill-container
          xm:skill-container-xm"
          >
            <a
              className="sm:logo-container-sm xm:logo-container-xm"
              title="CSS"
              href="https://www.typescriptlang.org/"
            >
              <Image className="logo-image" src={css} alt="" />

              <p className="text-lg">CSS</p>
            </a>
          </div>
          <div
            className=" border-orange-500 
           sm:skill-container
          xm:skill-container-xm"
          >
            <a
              className="sm:logo-container-sm xm:logo-container-xm"
              title="HTML5"
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            >
              <Image className="logo-image" src={html} alt="" />

              <p className="text-lg">HTML5</p>
            </a>
          </div>
          <div
            className="border-cyan-500 
            sm:skill-container
          xm:skill-container-xm"
          >
            <a
              className="sm:logo-container-sm xm:logo-container-xm"
              title="Tailwindcss"
              href="https://tailwindcss.com/"
            >
              <Image className="logo-image" src={tw} alt="" />

              <p className="  text-lg">Tailwindcss</p>
            </a>
          </div>

          <div
            // before:magic-layer1 before:from-cyan-300 before:to-white after:magic-layer2
            // after:from-blue-500 after:to-white
            //   sm:special-logo-container
            //   xm:special-skill-container-xm
            className=" 
            border-blue-400
          sm:skill-container
          xm:skill-container-xm"
          >
            <a
              // sm:magic-cover
              // xm:magic-cover-xm
              className=" sm:logo-container-sm xm:logo-container-xm"
              title="React"
              href="https://react.dev/"
            >
              <Image
                className="logo-image hover:animate-spin"
                src={rt}
                alt=""
              />
              <p className=" text-lg">React</p>
            </a>
          </div>
          <div
            className="
           border-green-700 brightness-150
           sm:skill-container
          xm:skill-container-xm"
          >
            <a
              className="sm:logo-container-sm xm:logo-container-xm"
              title="Nodejs"
              href="https://nodejs.org/en"
            >
              <Image className="logo-image" src={nodejs} alt="" />

              <p className=" text-lg">Nodejs</p>
            </a>
          </div>

          <div
            className="border-red-500 
            sm:skill-container
            xm:skill-container-xm"
          >
            <a
              className="sm:logo-container-sm xm:logo-container-xm"
              title="Git"
              href="https://git-scm.com/"
            >
              <Image className="logo-image " src={git} alt="" />

              <p className="  text-lg">Git</p>
            </a>
          </div>
        </div>
      </div>
      <div
        ref={project1}
        className=" h-auto
      "
      >
        <div ref={projectField}></div>
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
            <div className="text-sm  my-3">
              <div>
                <p>Used libraries:</p>
              </div>

              <div className="flex text-center justify-around py-1">
                <div className="stockChartLibrary">
                  <SiReact className="fill-blue-500 stockChartIcon" />
                  React
                </div>
                <div className="stockChartLibrary">
                  <SiReactquery className="fill-red-400 stockChartIcon" /> React Query
                </div>
                <div className="stockChartLibrary">
                  <SiRedux className="fill-purple-600 stockChartIcon" />
                  Redux ToolKit
                </div>
                <div className="stockChartLibrary">
                  <SiNestjs className="fill-red-600 stockChartIcon" />
                  Nestjs
                </div>
                <div className="stockChartLibrary">
                  <SiSupabase className="fill-green-600 stockChartIcon" />
                  Suspabase
                </div>
              </div>
            </div>
            <div className="flex my-4 items-center" ref={projectField}>
              <Link
                target="_blank"
                className="project-source  "
                href="https://github.com/jacktth/stock_chart"
              >
                Source Code
              </Link>
              <Link
                target="_blank"
                className="project-demo"
                href="https://stock-chart.onrender.com"
              >
                Demo
              </Link>
              <Link className="project-demo" href="/stockChart">
                About
              </Link>
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

export default Home;
