import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const Summary = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    console.log("switch is:", !isOn);

    setIsOn(!isOn);
  };
  return (
    <div className="pt-8 lg:pt-0">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-2xl font-bold">SUMMARY</h3>
      </div>
      <div className="border border-[#c3cbcd] border-r-2 flex py-4 flex-col">
        <div className="border-b border-[#c3cbcd] text-[#353535] py-1">
          <div className="flex justify-between w-full px-4 pb-1 ">
            <div>
              <p>Number of images:</p>
            </div>
            <div>
              <p>0</p>
            </div>
          </div>
          <div className="flex justify-between w-full px-4 py-1 ">
            <div>
              <p>Price per image:</p>
            </div>
            <div>
              <p>$0</p>
            </div>
          </div>
          <div className="flex justify-between w-full px-4 py-1 ">
            <div>
              <p>Image subtotal:</p>
            </div>
            <div>
              <p>$0</p>
            </div>
          </div>
          <div className="flex justify-between w-full px-4 py-5">
            <div>
              <p>Membership plan:</p>
            </div>
            <div>
              <p>Free of charge</p>
            </div>
          </div>
        </div>
        <div className="border-b border-[#c3cbcd] py-4 text-[#353535] ">
          <div className="flex justify-between w-full px-4 py-1 ">
            <div className="flex">
              <p className="pr-2">Savings:</p>
              <AiOutlineInfoCircle size={24} color="#ababab" />
            </div>
            <div>
              <p>$0</p>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-1">
          <div className="flex justify-between w-full px-4 font-bold text-black">
            <div>
              <p className="pr-2">TOTAL</p>
            </div>
            <div>
              <p>$0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
