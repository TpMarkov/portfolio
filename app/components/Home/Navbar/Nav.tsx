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
import { SignedIn, SignedOut, SignInButton, UserButton, SignOutButton } from "@clerk/nextjs";

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
      className={`transition-all duration-300 h-[10vh] sm:h-[12vh] z-[1000] fixed w-full top-0 flex items-center ${navBg ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* {LOGO} */}
        <Link href="/#home" className="flex items-center space-x-2 hover:cursor-pointer group">
          <Image width={40} height={40} src="/images/webdevstudiohq-logo.png" alt="webdevstudioHQ logo" className="object-contain" />
          <h2 className="text-foreground font-bold text-xl uppercase tracking-wider hidden md:block group-hover:text-primary transition-colors">
            webdevstudio<span className="text-primary">HQ</span>
          </h2>
        </Link>
        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((el) => (
            <Link
              key={el.id}
              className="text-sm uppercase tracking-widest hover:text-primary text-foreground font-black transition-all relative group cursor-pointer"
              href={`${el.url}`}
            >
              {el.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />

          <SignedOut>
            <Link href="/sign-up">
              <button className="px-8 py-3.5 text-sm cursor-pointer bg-primary hover:bg-primary/90 transition-all duration-300 text-primary-foreground font-bold shadow-lg hover:shadow-primary/25 uppercase tracking-tighter italic border border-primary">
                Get Started
              </button>
            </Link>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center space-x-4">
              <SignOutButton>
                <button className="text-[10px] font-bold uppercase tracking-widest border border-border px-4 py-2 hover:bg-secondary transition-all cursor-pointer italic text-muted-foreground hover:text-foreground">
                  Sign Out
                </button>
              </SignOutButton>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 border-2 border-primary/20 hover:border-primary/50 transition-all rounded-none",
                    userButtonTrigger: "rounded-none",
                    userButtonPopoverCard: "rounded-none"
                  }
                }}
              />
            </div>
          </SignedIn>

          <button
            className="hidden sm:flex px-8 py-3.5 text-sm cursor-pointer bg-secondary border border-border hover:bg-muted transition-all duration-300 text-foreground items-center space-x-2 shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              return downloadFileAtURL(PDF_FILE_URL);
            }}
          >
            <Link href="https://app.enhancv.com/share/89888e8a/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic">
              <div className="w-full flex items-center gap-x-5 uppercase tracking-widest font-bold text-[10px]">
                <FaDownload />
                Resume
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
