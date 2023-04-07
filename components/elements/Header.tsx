// Header.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export const Header: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [showMenuItems, setShowMenuItems] = useState<boolean>(false);

  const chooseButton = () => {
    if (!session) {
      return (
        <button
          className="hidden px-6 py-2 text-2xl font-medium transition transform border md:block hover:scale-95 focus:outline-none"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      );
    } else {
      return (
        <button
          className="hidden px-6 py-2 text-2xl font-medium transition transform border md:block hover:scale-95 focus:outline-none"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      );
    }
  };

  const handleMenuClick = () => {
    console.log("showMenuItems", showMenuItems);
    setShowMenuItems(!showMenuItems);
  };

  const toggleMenuItems = () => {
    return showMenuItems ? "py-4" : "hidden md:block";
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">ezphoto.studio</h1>
        <FaBars
          size={26}
          onClick={handleMenuClick}
          className="cursor-pointer md:hidden"
        />
        {chooseButton()}
      </div>
      <div className={`text-center mt-4 ${toggleMenuItems()}`}>
        <ul>
          <li className="my-2 hover:bg-[#374151] rounded-md hover:text-white cursor-pointer md:inline-block">
            <a href="" className="px-4 py-2 text-xl font-medium rounded-lg ">
              Our Work
            </a>
          </li>
          <li className="my-2 hover:bg-[#374151] rounded-md hover:text-white cursor-pointer md:inline-block">
            <a
              href="/pricing"
              className="px-4 py-2 text-xl font-medium rounded-lg "
            >
              Pricing
            </a>
          </li>
          <li className="my-2 hover:bg-[#374151] rounded-md hover:text-white cursor-pointer md:inline-block">
            <a href="" className="px-4 py-2 text-xl font-medium rounded-lg ">
              About
            </a>
          </li>
          <li className="my-2 hover:bg-[#374151] rounded-md hover:text-white cursor-pointer md:inline-block">
            <a href="" className="px-4 py-2 text-xl font-medium rounded-lg ">
              Book
            </a>
          </li>
          <li className="my-2 hover:bg-[#374151] rounded-md hover:text-white cursor-pointer md:inline-block">
            <a href="" className="px-4 py-2 text-xl font-medium rounded-lg ">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
