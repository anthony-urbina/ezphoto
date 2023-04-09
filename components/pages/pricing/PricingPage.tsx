import {
  SelectAPlan,
  SelectImageTypes,
  Summary,
  BookShoot,
} from "@/components/elements";
import { useState } from "react";

interface Cart {
  plan: string;
  types: ImageTypes;
}

export interface ImageTypes {
  [key: string]: number;
}

export const PricingPage = () => {
  const [cart, setCart] = useState<Cart>({
    plan: "1",
    types: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
  });

  const updatePlan = (selectedPlan: string) => {
    const copyCart = { ...cart };
    copyCart.plan = selectedPlan;
    setCart(copyCart);
  };

  const updateTypes = (selectedTypes: ImageTypes) => {
    const copyCart = { ...cart };
    for (const key in selectedTypes) {
      copyCart.types[key] = selectedTypes[key];
    }
    setCart(copyCart);
  };

  const { plan } = cart;
  return (
    <>
      <h1 className="text-4xl font-bold py-9">CALCULATOR</h1>
      <div className="flex flex-wrap">
        <div className="md:pr-6 basis-full lg:basis-1/2">
          <SelectAPlan updatePlan={updatePlan} plan={plan} />
          <SelectImageTypes updateTypes={updateTypes} types={cart.types} />
        </div>
        <div className="basis-full lg:basis-1/2 lg:pl-6">
          <Summary />
          <BookShoot />
        </div>
      </div>
    </>
  );
};
