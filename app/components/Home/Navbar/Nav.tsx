"use client";

import { NavLinks } from "@/app/constants/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  // TODO: Change this with actual url when deploying - keep the /resume.pdf part of the url when replacing
  const PDF_FILE_URL =
    "https://portfolio-xi-umber-iqmksi764o.vercel.app/resume/resume.pdf";

  const downloadFileAtURL = (url: string) => {
    const fileName = url.split("/").pop() as string;

    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);

      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#0f142ed9] shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* {LOGO} */}
        <div className="flex items-center space-x-2 hover:cursor-pointer">
          <Image width={32} height={32} src="/images/logo.png" alt="logo" />
          <h2 className="text-white font-semibold text-lg">Tsvetan</h2>
        </div>
        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((el) => (
            <Link
              key={el.id}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all"
              href={el.url}
            >
              <p>{el.label}</p>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              return downloadFileAtURL(PDF_FILE_URL);
            }}
          >
            <Link href="https://app.enhancv.com/share/89888e8a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic">
              <div className="w-full flex items-center gap-x-5">
                <FaDownload />
                Download CV
              </div>
            </Link>
          </button>
          {/* Burger menu */}
          <HiMenuAlt3
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
            onClick={openNav}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
