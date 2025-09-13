import { NavLinks } from "@/app/constants/constant";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed inset-0 transform ${navOpen} transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* navlinks */}
      <div
        className={`text-white fixed justify-center flex ${navOpen} flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}
      >
        {NavLinks.map((el) => {
          return (
            <Link key={el.id} href={el.url}>
              <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {el.label}
              </p>
            </Link>
          );
        })}
        <IoMdClose
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
          onClick={closeNav}
        />
      </div>
      {/* cross icon */}
    </div>
  );
};

export default MobileNav;
