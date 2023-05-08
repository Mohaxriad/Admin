import React from "react";
import Chart from "./chart/Chart";
import Chart2 from "./chart2/chart2";



function RightPart() {
  return (
    <div className="col-span-3 items-start justify-start flex flex-col w-full pt-12 pb-6">
      {/* top section */}
 
      <div className="border-t border-gray-200 w-full my-4" />
      {/* chart */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-2 ">
        <h1 className="text-xl font-bold xl:text-3xl"> Visiteurs/Nombre de recherches par mois </h1>
        <Chart />
      </div>
      {/* bottom part */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-2 ">
        <h1 className="text-xl font-bold xl:text-3xl py-4 "> Les crèches qui ont plus de réservation </h1>
        <Chart2/>
      </div>
    </div>
  );
}

export default RightPart;
