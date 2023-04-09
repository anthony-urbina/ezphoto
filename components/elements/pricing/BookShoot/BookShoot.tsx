import { AiOutlineArrowRight } from "react-icons/ai";

export const BookShoot = () => {
  return (
    <div className=" pt-9">
      <button className="flex items-center justify-center w-full py-6 text-2xl font-bold text-white bg-black hover:bg-[#969C9D] hover:text-black delay-100">
        BOOK A SHOOT
        <AiOutlineArrowRight className="ml-4 hover:text-black" />
      </button>
    </div>
  );
};
