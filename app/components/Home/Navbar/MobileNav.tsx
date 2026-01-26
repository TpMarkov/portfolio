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
        className={`text-foreground fixed justify-center flex ${navOpen} flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-card border-l border-border space-y-6 z-[100050] right-0 p-12`}
      >
        {NavLinks.map((el) => {
          return (
            <Link key={el.id} href={el.url} onClick={closeNav}>
              <p className="text-foreground w-fit text-2xl font-black uppercase tracking-tighter italic border-b-2 border-primary pb-1 hover:text-primary transition-colors cursor-pointer">
                {el.label}
              </p>
            </Link>
          );
        })}
        <IoMdClose
          className="absolute top-8 right-8 w-10 h-10 cursor-pointer text-foreground hover:text-primary transition-colors"
          onClick={closeNav}
        />
      </div>
      {/* cross icon */}
    </div>
  );
};

export default MobileNav;
