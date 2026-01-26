"use client";

import { NavLinks } from "@/app/constants/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeSwitcher from "../../Helper/ThemeSwitcher";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const navRef = useRef(null);

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

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  });

  return (
    <div
      ref={navRef}
      className={`transition-all ${navBg ? "bg-background/80 backdrop-blur-md shadow-md" : "fixed"
        } duration-200 h-[12vh] z-[1000] fixed w-full top-0`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* {LOGO} */}
        <div className="flex items-center space-x-2 hover:cursor-pointer">
          <Image width={40} height={40} src="/images/webdevstudiohq-logo.png" alt="webdevstudioHQ logo" className="object-contain" />
          <h2 className="text-foreground font-bold text-xl uppercase tracking-wider hidden md:block">
            webdevstudio<span className="text-primary">HQ</span>
          </h2>
        </div>
        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((el) => (
            <Link
              key={el.id}
              className="text-base hover:text-primary text-foreground/80 font-medium transition-all relative group"
              href={el.url}
            >
              <p>{el.label}</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <button
            className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-primary hover:bg-primary/90 transition-all duration-300 text-primary-foreground flex items-center space-x-2 shadow-lg hover:shadow-primary/25"
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
            className="w-8 h-8 cursor-pointer text-foreground lg:hidden"
            onClick={openNav}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
