import { useState } from "react";
import {
  SelectAPlan,
  SelectImageTypes,
  Summary,
  BookShoot,
} from "@/components/elements";

export const PricingPage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold py-9">CALCULATOR</h1>
      <div className="flex flex-wrap">
        <div className="md:pr-6 basis-full lg:basis-1/2">
          <SelectAPlan />
          <SelectImageTypes />
        </div>
        <div className="basis-full lg:basis-1/2 lg:pl-6">
          <Summary />
          <BookShoot />
        </div>
      </div>
    </>
  );
};
