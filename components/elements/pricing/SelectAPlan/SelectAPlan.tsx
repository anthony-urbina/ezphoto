import { useState } from "react";

export const SelectAPlan = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    console.log("switch is:", !isOn);

    setIsOn(!isOn);
  };
  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <div className=" basis-1/2">
          <h3 className="text-2xl font-bold">SELECT A PLAN</h3>
        </div>
        <div className="basis-1/2">
          <div className="flex items-center justify-end cursor-pointer">
            <label htmlFor="toggle" className="cursor-pointer">
              Pay yearly (Save 20%)
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
        <ul className="cursor-pointer">
          <li className="py-2 font-bold hover:bg-[#dce4e4] pl-4">
            PAY AS YOU GO
            <span className="block font-bold text-[#807777]">
              Free of charge
            </span>
          </li>
          <li className="py-2 font-bold pl-4  hover:bg-[#dce4e4]">
            GROWTH
            <span className="block font-bold text-[#807777]">
              $350 every 6 mo.
            </span>
          </li>
          <li className="py-2 font-bold pl-4  hover:bg-[#dce4e4]">
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
