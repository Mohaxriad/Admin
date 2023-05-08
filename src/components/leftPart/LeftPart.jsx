import React from "react";
import InvestItem from "./InvestItem";
import { InvestDB } from "./utils/InvestmentsDB";
import { CashIcon, CreditCardIcon, HomeIcon, UsersIcon } from "@heroicons/react/outline";


function LeftPart() {
  return (
    <div className=" col-span-2 min-h-[90vh] border-r border-gray-200 items-start justify-start flex flex-col w-full ">
      {/* top section*/}
      {/* top section*/}
      <div className="w-full items-start justify-start flex flex-col px-12 pt-12 pb-6">
        <h1 className="font-bold text-xl xl:text-2xl pb-2 text-[#F55D4C]"> Tableau de bord </h1>
        <p className="text-md text-gray-800">
          Statistiques
        </p>
    </div>
        <div className="md:flex items-center justify-center w-full lg:space-y-0 space-y-4  lg:space-x-4  px-12">
        <div className="space-y-6 w-full items-center justify-center flex flex-col ">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex bg-[#FB9B90]">
            <HomeIcon className=" w-8 h-8 stroke-1 " />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2> Nombre de crèches </h2>
            <h2 className="font-bold text-xl">1860 </h2>
          </span>
        </div>
        {/* duplicate above ☝ */}
        <div className="space-y-6 w-full items-center justify-center flex flex-col ">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex bg-[#FB9B90]">
            <UsersIcon className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2> Nombre des utillisateurs </h2>
            <h2 className="font-bold text-xl">36000 </h2>
          </span>
        </div>
       
      </div>
      {/* bottom section*/}
      <div className="w-full items-start justify-start flex flex-col px-12 py-6">
        
        <div className="w-full space-y-5 overflow-y-auto max-h-[350px] py-6 scrollbar-hide">
          {InvestDB.map((item) => (
            <InvestItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftPart;
