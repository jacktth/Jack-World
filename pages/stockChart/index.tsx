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
function StockChart() {
  return (
    <>
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
          <p className="font-bold text-lg">Stock Chart</p>
          <p>A single page web application for user to collect stock data</p>
          <div className="flex my-4 justify-center">
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
          </div>
        </div>
        <Image
          className="w-full sm:col-span-3 xm:row-span-1"
          src={stockChart}
          alt={""}
        />
      </div>

      <div className=" bg-[#7bdff2] justify-around">
        <p className="text-center text-4xl text-black pt-5 xm:mb-5">Features</p>
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

            <p className="text-xl mb-4 font-bold">Collect historical data</p>
            <p className="leading-8 tracking-wide text-lg">
              The chart provides a function that allows users to select data
              from a specific time period, which can then be saved.
            </p>
          </div>
          <div className="stockChartFeatures">
            <div className="stockChartFeaturesIconPositioner ">
              <div className="stockChartFeaturesIconContainer ">
                <AiOutlineFieldTime className="stockChartFeaturesIcon" />
              </div>
            </div>
            <p className="text-xl mb-4 font-bold">Review record quickly</p>
            <p className="leading-8 tracking-wide text-lg">
              Users can click on their saved records to immediately display
              historical data from a specific period on the chart.
            </p>
          </div>
          <div className="stockChartFeatures">
            <div className="stockChartFeaturesIconPositioner ">
              <div className="stockChartFeaturesIconContainer ">
                <AiOutlineApi className="stockChartFeaturesIcon" />
              </div>
            </div>
            <p className="text-xl mb-4 font-bold">Open API</p>
            <p className="leading-8 tracking-wide text-lg">
              The application is designed to enable users to export historical
              stock data from a specific period based on their saved records.
            </p>
          </div>
        </div>
      </div>

      {/*                   Motivation                          */}
      <div className="bg-[#f7a072] text-black ">
        <p className="text-center text-4xl py-4">My Motivations</p>
        <div className="motivationContainer">
          <p className="motivationNumber">1.</p>
          <p className="motivationContent">
            Stock market applications typically allow users to save a stock
            symbol and view its data starting from the most recent time period.
            However, I believe it would be beneficial to enable users to save a
            stock symbol along with a specific period of time. To accomplish
            this, our application will provide the functionality for users to
            select and save historical stock prices for a specific time period.
          </p>
        </div>
        <div className="motivationContainer">
          <p className="motivationNumber">2.</p>
          <p className="motivationContent">
            When using some stock chart applications, reviewing the past stock
            data requires scrolling back from the most recent date, which is
            inconvenient. To address this, I would like a function that allows
            me to save the pattern and display it in the chart with a single
            click.
          </p>
        </div>

        <div className="motivationContainer">
          <p className="motivationNumber">3.</p>
          <p className="motivationContent">
            I want to create my own dataset for stock pattern analysis, so I
            need an application that can display stock prices, record stock
            patterns, and export stock data.
          </p>
        </div>
      </div>
      <div className="text-black bg-[#facf5a] px-5 xm:hidden">
        {/* parent */}
        <div className="grid   ">
          {/* --------------------child-------------------- */}
          <p className="text-center text-4xl py-3 ">Tech-Stack</p>

          <div className="bg-white grid grid-cols-4  w-full h-full ">
            {/* <div className="text-sm absolute top-[50%] left-[50%] h-full bg-black text-transparent
            transform -translate-x-1/2 -translate-y-1/2 ">
              x
            </div> */}

            <div className="projectToolTopic bg-gradient-to-r from-blue-200 to-purple-50">
              Frontend
            </div>
            <div className="projectToolTopic bg-gradient-to-l from-green-200 to-red-50">
              Backend
            </div>

            <div className="p-2 bg-gradient-to-tl text-xl from-blue-400 to-white ">
              <div className="text-lg">
                <div className="flex">
                  <SiReact className="fill-blue-500 stockChartIcon " />
                  <span className="ml-1">React</span>
                </div>
                <p className=" text-lg">The user interfaces library</p>
              </div>

              <div className="">
                <div className="flex">
                  <SiTailwindcss className="fill-blue-400 stockChartIcon" />
                  <span className="ml-1">Tailwindcss</span>
                </div>
                <p className=" text-lg">The CSS framework</p>
              </div>
            </div>

            <div className="p-2 bg-gradient-to-br text-xl from-orange-50 to-purple-400 ">
              <div className="">
                <div className="flex">
                  <SiReactquery className="fill-amber-600 stockChartIcon" />
                  <span className="ml-1">
                    TanStack Query<span>{`(React Query)`}</span>
                  </span>
                </div>
                <p className=" text-lg">
                  The asynchronous state management tools
                </p>
              </div>

              <div className="">
                <div className="flex">
                  <SiRedux className="fill-purple-600 stockChartIcon" />
                  <span className="ml-1">Redux ToolKit</span>
                </div>
                <p className=" text-lg">The state management library</p>
              </div>
            </div>
            <div className="p-2 border-l-2 border-l-black bg-gradient-to-br from-white to-red-600 text-xl">
              <div className="flex ">
                <SiNestjs className="fill-red-600 stockChartIcon" />
                <span className="ml-1">Nestjs</span>
              </div>
              <p className=" text-lg">The backend framework</p>
              <p className=" text-lg">
                Handling server-side logic, including a RESTful API and
                processing JSON data from third-party sources.
              </p>
            </div>
            <div className="p-2 bg-gradient-to-br text-xl from-white to-green-400 ">
              <div className="flex">
                <SiSupabase className="fill-[#2F98CA] stockChartIcon" />
                <span className="ml-1">Supabase</span>
              </div>
              <p className=" text-lg">The Backend-as-a-Service platform</p>
              <p className=" text-lg">
                Handling user authentication and serving as a database
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------- This is XM style--------------------------- */}
      
      
      <div className="text-black bg-[#facf5a] p-2 sm:hidden">
        {/* parent */}
        <div className="grid   ">
          {/* --------------------child-------------------- */}
          <p className="text-center text-4xl py-3 ">Tech-Stack</p>

          <div className="bg-white grid grid-cols-2  w-full h-full ">
            {/* <div className="text-sm absolute top-[50%] left-[50%] h-full bg-black text-transparent
            transform -translate-x-1/2 -translate-y-1/2 ">
              x
            </div> */}

            <div className="projectToolTopic bg-gradient-to-r from-blue-200 to-purple-50">
              Frontend
            </div>

            <div className="p-2 bg-gradient-to-tl text-xl from-blue-400 to-white ">
              <div className="text-lg">
                <div className="flex">
                  <SiReact className="fill-blue-500 stockChartIcon " />
                  <span className="ml-1">React</span>
                </div>
                <p className=" text-lg">The user interfaces library</p>
              </div>

              <div className="">
                <div className="flex">
                  <SiTailwindcss className="fill-blue-400 stockChartIcon" />
                  <span className="ml-1">Tailwindcss</span>
                </div>
                <p className=" text-lg">The CSS framework</p>
              </div>
            </div>

            <div className="p-2 bg-gradient-to-br text-xl from-orange-50 to-purple-400 ">
              <div className="">
                <div className="flex">
                  <SiReactquery className="fill-amber-600 stockChartIcon" />
                  <span className="ml-1">
                    TanStack Query<span>{`(React Query)`}</span>
                  </span>
                </div>
                <p className=" text-lg">
                  The asynchronous state management tools
                </p>
              </div>

              <div className="">
                <div className="flex">
                  <SiRedux className="fill-purple-600 stockChartIcon" />
                  <span className="ml-1">Redux ToolKit</span>
                </div>
                <p className=" text-lg">The state management library</p>
              </div>
            </div>
          </div>

          <div className="bg-white grid grid-cols-2  w-full h-full mt-2">
    

            <div className="projectToolTopic bg-gradient-to-l from-green-200 to-red-50 ">
              Backend
            </div>

            <div className="p-2 border-l-2 border-l-black bg-gradient-to-br from-white to-red-600 text-xl">
              <div className="flex ">
                <SiNestjs className="fill-red-600 stockChartIcon" />
                <span className="ml-1">Nestjs</span>
              </div>
              <p className=" text-lg">The backend framework</p>
              <p className=" ">
                - RESTful API
              </p>
              <p className=" ">
                - Processing JSON data from third-party sources.
              </p>

            </div>
            <div className="p-2 bg-gradient-to-br text-xl from-white to-green-400 ">
              <div className="flex">
                <SiSupabase className="fill-[#2F98CA] stockChartIcon" />
                <span className="ml-1">Supabase</span>
              </div>
              <p className=" text-lg">The Backend-as-a-Service platform</p>
              <p className=" ">
                - Handling user authentication
              </p>
              <p className=" ">
                - Serving as a database
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StockChart;
