import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold text-4xl">Captur</h1>
        </Link>

        <ul className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile button */}
        <div
          onClick={handleNav}
          className="block sm:hidden z-10 cursor-pointer ease-in duration-500"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100vw] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <li className="p-4 text-4xl hover:text-gray-300">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-300">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-300">
            <Link href="/portfolio">Work</Link>
          </li>
          <li className="p-4 text-4xl hover:text-gray-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
