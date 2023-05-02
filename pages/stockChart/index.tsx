import Image from "next/image";
import stockChart from "../../public/stock-chart.svg";
import Link from "next/link";
import { AiOutlineFieldTime, AiOutlineApi } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import {
  SiReactquery,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNestjs,
  SiSupabase,
} from "react-icons/si";
import { Head } from "next/document";
import Layout from "../home/layout";
function StockChart() {
  return (
    <>
      {/* <Layout /> */}
      <div
        className="pb-10 grid bg-white  
      sm:grid-cols-5  sm:px-5 sm:gap-2
      xm:grid-row-1 xm:pb-4
      "
      >
        <div
          className=" text-black text-center
        sm:col-span-2 sm:flex sm:flex-col sm:justify-center
        xm:order-last xm:text-center xm:w-full xm:row-span-1"
        >
          <p>Stock Chart</p>
          <p>A single page web application for user to collect stock data</p>
          <div className="flex my-4 justify-center">
            <a className="project-source  " href="">
              Source Code
            </a>
            <a className="project-demo" href="">
              Demo
            </a>
          </div>
        </div>
        <Image
          className="w-full sm:col-span-3 xm:row-span-1"
          src={stockChart}
          alt={""}
        />
      </div>

      <div className=" bg-blue-500 justify-around">
        <p className="text-center text-5xl pt-5 xm:mb-5">Features</p>
        <div
          className="grid  gap-10  justify-around px-5 
        sm:grid-cols-3
        xm:grid-rows-1 xm:gap-1 xm:px-2
        "
        >
          <div className="stockChartFeatures ">
            <div className="stockChartFeaturesIconPositioner ">
              <div className="stockChartFeaturesIconContainer ">
                <BsCollection className="stockChartFeaturesIcon" />
              </div>
            </div>

            <p className="text-xl mb-4">Collect historical data</p>
            <p className="leading-8 tracking-wide text-lg">
              The chart provide function for users to drag the data so as to
              select and save the data in a specific period of time.
            </p>
          </div>
          <div className="stockChartFeatures">
            <div className="stockChartFeaturesIconPositioner ">
              <div className="stockChartFeaturesIconContainer ">
                <AiOutlineFieldTime className="stockChartFeaturesIcon" />
              </div>
            </div>
            <p className="text-xl mb-4">Review record quickly</p>
            <p className="leading-8 tracking-wide text-lg">
              Users could click the their record to immediately display the
              historical data of specific period on the chart.
            </p>
          </div>
          <div className="stockChartFeatures">
            <div className="stockChartFeaturesIconPositioner ">
              <div className="stockChartFeaturesIconContainer ">
                <AiOutlineApi className="stockChartFeaturesIcon" />
              </div>
            </div>
            <p className="text-xl mb-4">Open API</p>
            <p className="leading-8 tracking-wide text-lg">
              The application aims for users to export their record and stock
              historical data.
            </p>
          </div>
        </div>
      </div>

      {/*                   Motivation                          */}
      <div className="bg-slate-200 text-black mb-4">
        <p className="text-center text-5xl pt-8">My Motivations</p>
        <div className="motivationContainer">
          <p className="motivationNumber">1.</p>
          <p className="motivationContent">
            Most of the stock application only allow user to save the stock
            symbol and view the stock data in the most recent time. However, I
            want to also save the stock symbol with specific period of time.
            Therefore, the application allows users to select and save the
            specific period of time of the historical stock price.
          </p>
        </div>
        <div className="motivationContainer">
          <p className="motivationNumber">2.</p>
          <p className="motivationContent">
            If I want to review the stock pattern in the past 10 years in some
            stock chart applications, I need to keep scrolling back from the
            most recent date to the 10 years ago. It is not convenient. I desire
            to have a function to record the pattern. Therefore, I can click the
            record to display the data in the chart immediately.
          </p>
        </div>

        <div className="motivationContainer">
          <p className="motivationNumber">3.</p>
          <p className="motivationContent">
            I want to create my own dataset for stock pattern analysis.
            Therefore, I need an application to help me to display the stock
            price, record the stock patterns and and export the stock data.
          </p>
        </div>
      </div>

      <div className="">
        <h1>Tech-Stack</h1>
        <div>
          <div className="flex">
            <SiReact className="fill-blue-500 stockChartIcon" />
            <span>React</span>
          </div>
          <p>The user interfaces library</p>
        </div>
        <div>
          <div className="flex">
            <SiTailwindcss className="fill-blue-400 stockChartIcon" />
            <span>Tailwindcss</span>
          </div>
          <p>The CSS framework</p>
        </div>
        <div>
          <div className="flex">
            <SiReactquery className="fill-blue-400 stockChartIcon" />
            <span>React query<span>{`(FKA React Query)`}</span></span>
          </div>
          <p>The asynchronous state management tools</p>
        </div>
        <div>
          <div className="flex">
            <SiRedux className="fill-purple-600 stockChartIcon" />
            <span>Redux ToolKit</span>
          </div>
          <p>The state management library</p>
        </div>
        <div>
          <div className="flex">
          <SiNestjs className="fill-red-600 stockChartIcon" />
            <span>Nestjs</span>
          </div>
          <p>The backend framework for handling service side logic </p>
        </div>
        <div>
          <div className="flex">
          <SiSupabase className="fill-[#2F98CA] stockChartIcon" />
            <span>Supabase</span>
          </div>
          <p>The Backend-as-a-Service platform</p>
        </div>
      </div>
    </>
  );
}
export default StockChart;
