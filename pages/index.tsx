import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import About from "./about";
import Layout from "../components/layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout />
      <div className="grid grid-cols-2  gap-4">
        <img className="col-span-1 xm:col-span-2  xm:hidden" src="/me.jpg" />
        <div className=" col-span-1 xm:col-span-2 grid grid-cols-1  content-center  xm:hidden">
          <div className="">
            <p className="paragraph text-lg">Welcome! My name is</p>
            <p className="paragraph text-8xl font-serif"> Jack Tang </p>
            <p className="paragraph text-lg">
              If you're hiring a junior front-end developer, get in touch!
            </p>
          </div>
        </div>


        <div className="col-span-1 xm:col-span-2 grid grid-cols-1  content-center sm:hidden">
        <img className="col-span-1 xm:col-span-2 " src="/me.jpg" />

          <div className="absolute bottom-7">
            <p className="paragraph text-sm">Welcome! My name is</p>
            <p className="paragraph text-3xl font-serif"> Jack Tang </p>
            <p className="paragraph text-sm">
              If you're hiring a junior front-end developer, get in touch!
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>
    </>
  );
}
