import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const BookShoot = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    console.log("switch is:", !isOn);

    setIsOn(!isOn);
  };
  return (
    <div className=" pt-9">
      <button className="flex items-center justify-center w-full py-6 text-2xl font-bold text-white bg-black ">
        BOOK A SHOOT
        <AiOutlineArrowRight color="white" className="ml-4" />
      </button>
    </div>
  );
};
