import Image from "next/image";
import stockChart from "../../public/stock-chart.svg";
import Link from "next/link";
import { AiOutlineFieldTime, AiOutlineApi } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
function StockChart() {
  return (
    <>
      <div className="grid bg-white pb-10 px-5
      sm:grid-cols-4  
      xm:grid-row-1 
      ">
        <div className=" text-black text-center
        sm:col-span-1 sm:flex sm:flex-col sm:justify-center
        xm:order-last xm:text-center xm:w-full xm:row-span-1">
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
        <Image className="w-full sm:col-span-3 xm:row-span-1" src={stockChart} alt={""} />
      </div>

      <div className=" bg-blue-500 justify-around">
        <p className="text-center text-5xl pt-5 xm:mb-5">Features</p>
        <div className="grid  gap-10  justify-around px-5 
        sm:grid-cols-3
        xm:grid-rows-1 xm:gap-1 xm:px-2
        ">
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
              historical data based on its recorded period of time.
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
            If I want to review the stock pattern in the past 10 years in a
            stock chart application, I need to keep scrolling back from the most
            recent date to the 10 years ago. It is not convenient. Therefore, I
            desire to have a function to click the record so as to display the
            specific historical data immediately.
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
  
    </>
  );
}
export default StockChart;
