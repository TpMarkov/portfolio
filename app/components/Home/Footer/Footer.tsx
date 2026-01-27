import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useDesignMode } from "@/app/context/DesignContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { designMode } = useDesignMode();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/tsvetan-markov-270805290",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/TpMarkov",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="w-5 h-5" />,
      url: "mailto:webdevstudiohq@gmail.com",
    },
  ];

  return (
    <footer
      id="footer"
      className={`
                mt-0
                ${
                  designMode === "sap"
                    ? "bg-sap-base-bg border-t border-sap-border"
                    : "bg-background border-t border-border"
                }
            `}
    >
      <div
        className={`w-[90%] xl:w-[80%] mx-auto py-16 ${designMode === "sap" ? "py-12" : "py-20"}`}
      >
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Image
              width={designMode === "sap" ? 40 : 48}
              height={designMode === "sap" ? 40 : 48}
              src="/images/webdevstudiohq-logo.png"
              alt="webdevstudioHQ logo"
              className="object-contain"
            />
            <div>
              <h3
                className={`
                                text-foreground
                                ${
                                  designMode === "sap"
                                    ? "font-semibold text-xl tracking-tight"
                                    : "font-bold text-2xl uppercase tracking-wider"
                                }
                            `}
              >
                {designMode === "sap" ? (
                  <>
                    webdevstudio<span className="text-sap-primary">HQ</span>
                  </>
                ) : (
                  <>
                    webdevstudio<span className="text-primary">HQ</span>
                  </>
                )}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                Building digital excellence
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4
              className={`
                            text-foreground
                            ${
                              designMode === "sap"
                                ? "font-semibold text-sm tracking-wide"
                                : "font-black uppercase tracking-widest text-sm"
                            }
                        `}
            >
              Navigation
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/#home"
                className={`
                                hover:transition-colors text-sm
                                ${
                                  designMode === "sap"
                                    ? "text-sap-text-secondary hover:text-sap-primary font-medium"
                                    : "text-muted-foreground font-semibold uppercase tracking-tighter"
                                }
                            `}
              >
                Home
              </Link>
              <Link
                href="/#services"
                className={`
                                hover:transition-colors text-sm
                                ${
                                  designMode === "sap"
                                    ? "text-sap-text-secondary hover:text-sap-primary font-medium"
                                    : "text-muted-foreground font-semibold uppercase tracking-tighter"
                                }
                            `}
              >
                Services
              </Link>
              <Link
                href="/certificates"
                className={`
                                hover:transition-colors text-sm
                                ${
                                  designMode === "sap"
                                    ? "text-sap-text-secondary hover:text-sap-primary font-medium"
                                    : "text-muted-foreground font-semibold uppercase tracking-tighter"
                                }
                            `}
              >
                Certificates
              </Link>
              <Link
                href="/#projects"
                className={`
                                hover:transition-colors text-sm
                                ${
                                  designMode === "sap"
                                    ? "text-sap-text-secondary hover:text-sap-primary font-medium"
                                    : "text-muted-foreground font-semibold uppercase tracking-tighter"
                                }
                            `}
              >
                Works
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <h4
              className={`
                            text-foreground text-center md:text-right
                            ${
                              designMode === "sap"
                                ? "font-semibold text-sm tracking-wide"
                                : "font-black uppercase tracking-widest text-sm"
                            }
                        `}
            >
              Social
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                                        p-2.5 rounded-md transition-all duration-300
                                        ${
                                          designMode === "sap"
                                            ? "bg-sap-base-light text-sap-text-secondary hover:bg-sap-primary hover:text-white"
                                            : "bg-secondary hover:bg-primary"
                                        }
                                    `}
                  aria-label={link.name}
                >
                  {designMode === "sap" ? (
                    link.icon
                  ) : (
                    <span className="text-secondary-foreground group-hover:text-primary-foreground transition-colors">
                      {link.icon}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`mb-6 ${designMode === "sap" ? "" : "border-t border-border mb-8"}`}
        ></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <p className="text-muted-foreground">
              © {currentYear} webdevstudioHQ. All rights reserved.
            </p>
            <Link
              href="/privacy-policy"
              className={`
                                hover:transition-colors
                                ${
                                  designMode === "sap"
                                    ? "text-sap-text-secondary hover:text-sap-primary font-medium text-xs"
                                    : "font-bold uppercase tracking-widest text-[10px]"
                                }
                            `}
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            {designMode === "sap" ? (
              <>
                Built with{" "}
                <span className="text-sap-primary font-medium">Next.js</span> &{" "}
                <span className="text-sap-primary font-medium">
                  TailwindCSS
                </span>
              </>
            ) : (
              <>
                Built with{" "}
                <span className="text-primary font-semibold">Next.js</span> &{" "}
                <span className="text-primary font-semibold">TailwindCSS</span>
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
