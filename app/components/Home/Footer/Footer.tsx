import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="w-6 h-6" />,
            url: "https://linkedin.com/in/tsvetan-markov-270805290", // TODO: Replace with your LinkedIn
        },
        {
            name: "GitHub",
            icon: <FaGithub className="w-6 h-6" />,
            url: "https://github.com/TpMarkov", // TODO: Replace with your GitHub
        },
        {
            name: "Email",
            icon: <FaEnvelope className="w-6 h-6" />,
            url: "mailto:markowcvetan@gmail.com",
        },
    ];

    return (
        <footer id="footer" className="bg-background border-t border-border mt-0">
            <div className="w-[90%] xl:w-[80%] mx-auto py-20">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                    {/* Logo and Brand */}
                    <div className="flex items-center space-x-3">
                        <Image
                            width={48}
                            height={48}
                            src="/images/webdevstudiohq-logo.png"
                            alt="webdevstudioHQ logo"
                            className="object-contain"
                        />
                        <div>
                            <h3 className="text-foreground font-bold text-2xl uppercase tracking-wider">
                                webdevstudio<span className="text-primary">HQ</span>
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                Building digital excellence
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-foreground font-black uppercase tracking-widest text-sm">Navigation</h4>
                        <div className="flex flex-wrap gap-x-8 gap-y-2">
                            <Link href="/#home" className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-tighter">Home</Link>
                            <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-tighter">Services</Link>
                            <Link href="/certificates" className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-tighter">Certificates</Link>
                            <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm font-semibold uppercase tracking-tighter">Works</Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-foreground font-black uppercase tracking-widest text-sm text-center md:text-right">Social</h4>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300"
                                    aria-label={link.name}
                                >
                                    <span className="text-secondary-foreground group-hover:text-primary-foreground transition-colors">
                                        {link.icon}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>
                        © {currentYear} webdevstudioHQ. All rights reserved.
                    </p>
                    <p className="text-xs">
                        Built with{" "}
                        <span className="text-primary font-semibold">Next.js</span> &{" "}
                        <span className="text-primary font-semibold">TailwindCSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
