import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const SelectImageTypes = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    console.log("switch is:", !isOn);

    setIsOn(!isOn);
  };
  return (
    <div className="pt-8">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-2xl font-bold">SELECT IMAGE TYPES</h3>
      </div>
      <div className="border border-[#c3cbcd] border-r-2 flex flex-col">
        <div
          data-type-id="0"
          className="flex items-center border-b border-[#c3cbcd] w-full justify-between px-4"
        >
          <div className="flex py-4 ">
            <input type="checkbox" id="standard" className="w-6 mr-2" />
            <label htmlFor="standard" className="text-[#807777]">
              Paired
            </label>
          </div>
          <AiOutlineInfoCircle size={24} color="#ababab" />
        </div>
        <div
          data-type-id="1"
          className="flex items-center border-b border-[#c3cbcd] w-full justify-between px-4"
        >
          <div className="flex py-4 ">
            <input type="checkbox" id="standard" className="w-6 mr-2" />
            <label htmlFor="standard" className="text-[#807777]">
              Standard
            </label>
          </div>
          <AiOutlineInfoCircle size={24} color="#ababab" />
        </div>
        <div
          data-type-id="2"
          className="flex items-center border-b border-[#c3cbcd] w-full justify-between px-4"
        >
          <div className="flex py-4 ">
            <input type="checkbox" id="standard" className="w-6 mr-2" />
            <label htmlFor="standard" className="text-[#807777]">
              Group
            </label>
          </div>
          <AiOutlineInfoCircle size={24} color="#ababab" />
        </div>
        <div
          data-type-id="3"
          className="flex items-center border-b border-[#c3cbcd] w-full justify-between px-4"
        >
          <div className="flex py-4 ">
            <input type="checkbox" id="standard" className="w-6 mr-2" />
            <label htmlFor="standard" className="text-[#807777]">
              Ghost mannequin
            </label>
          </div>
          <AiOutlineInfoCircle size={24} color="#ababab" />
        </div>
        <div
          data-type-id="4"
          className="flex items-center border-b border-[#c3cbcd] w-full justify-between px-4"
        >
          <div className="flex py-4 ">
            <input type="checkbox" id="standard" className="w-6 mr-2" />
            <label htmlFor="standard" className="text-[#807777]">
              Jewelry / Watches
            </label>
          </div>
          <AiOutlineInfoCircle size={24} color="#ababab" />
        </div>
        <div
          data-type-id="5"
          className="flex items-center justify-between w-full px-4"
        >
          <div className="flex py-4 ">
            <input type="checkbox" id="standard" className="w-6 mr-2" />
            <label htmlFor="standard" className="text-[#807777]">
              Hand Model
            </label>
          </div>
          <AiOutlineInfoCircle size={24} color="#ababab" />
        </div>
      </div>
    </div>
  );
};
