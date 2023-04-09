import { useState } from "react";

interface SelectAPlan {
  updatePlan: (selctedPlan: string) => void;
  plan: string;
}

export const SelectAPlan = ({ updatePlan, plan }: SelectAPlan) => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleSwitch = () => {
    console.log("switch is:", !isOn);
    setIsOn(!isOn);
  };

  const handleSelectPlan = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const target = event.target as HTMLInputElement;
    const li = target.closest("li");
    if (!li) {
      console.error("no li found");
      return;
    }
    const { planId } = li.dataset;
    if (planId) {
      updatePlan(planId);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <div className="basis-1/2">
          <h3 className="text-2xl font-bold">SELECT A PLAN</h3>
        </div>
        <div className="basis-1/2">
          <div className="flex items-center justify-end cursor-pointer">
            <label
              htmlFor="toggle"
              className="cursor-pointer md:mr-2 mr-[.125rem]"
            >
              Pay yearly <br className="md:hidden" /> (Save 20%)
            </label>
            <div
              onClick={toggleSwitch}
              className={`relative border rounded-2xl h-[29px] pr-[3.39rem] flex items-center transition ${
                isOn ? "bg-black" : "bg-[#888888] "
              }`}
            >
              <input
                id="toggle"
                type="button"
                className={` cursor-pointer absolute bg-white rounded-full left-0 transform h-[25px] w-[25px] transition duration-250 ease-in-out box-shadow duration-150 outline-none
                ${isOn ? "translate-x-[28px]" : "translate-x-[1px]"}`}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-[#c3cbcd] border-r-2">
        <ul className="cursor-pointer md:flex" onClick={handleSelectPlan}>
          <li
            data-plan-id="1"
            className={`py-2 md:py-6 font-bold md:basis-1/3  pl-4 ${
              plan === "1" ? "bg-[#dce4e4]" : "bg-white"
            }`}
          >
            PAY AS YOU GO
            <span className="block font-bold text-[#807777]">
              Free of charge
            </span>
          </li>
          <li
            data-plan-id="2"
            className={`py-2 md:py-6 font-bold md:basis-1/3 pl-4   ${
              plan === "2" ? "bg-[#dce4e4]" : "bg-white"
            }`}
          >
            GROWTH
            <span className="block font-bold text-[#807777]">
              $350 every 6 mo.
            </span>
          </li>
          <li
            data-plan-id="3"
            className={`py-2 md:py-6 font-bold md:basis-1/3 pl-4   ${
              plan === "3" ? "bg-[#dce4e4]" : "bg-white"
            }`}
          >
            ENTERPRISE
            <span className="block font-bold text-[#807777]">
              $1400 every 6 mo.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
