import { useState } from "react";
import { SelectAPlan, SelectImageTypes, Summary } from "@/components/elements";

export const PricingPage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold py-9">CALCULATOR</h1>
      <div className="basis-full">
        <SelectAPlan />
        <SelectImageTypes />
      </div>
      <div className="basis-full">
        <Summary />
      </div>
    </>
  );
};
