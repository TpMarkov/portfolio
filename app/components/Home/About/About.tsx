import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <section className="relative py-24 bg-secondary/50 border-y border-border overflow-hidden">
            <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 bg-card border border-border rounded-lg p-8 md:p-12 transition-shadow duration-500 hover:shadow-2xl">
                    {/* Image Section */}
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden border border-border shadow-soft">
                                <Image
                                    src="/images/image (1).jpg"
                                    alt="Profile"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    sizes="(max-width: 768px) 192px, 224px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="mb-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                                Let's Build Something <span className="text-primary">Amazing</span>
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto md:mx-0"></div>
                        </div>

                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                            Full-Stack Developer specializing in modern web technologies. Experienced in building
                            high-performance applications with React, Next.js, Node.js, and cloud platforms.
                            Passionate about creating exceptional user experiences and scalable solutions.
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="text-center p-4 bg-secondary/50 rounded-lg">
                                <div className="text-2xl md:text-3xl font-bold text-primary">8+</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Projects</div>
                            </div>
                            <div className="text-center p-4 bg-secondary/50 rounded-lg">
                                <div className="text-2xl md:text-3xl font-bold text-primary">Full-Stack</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Developer</div>
                            </div>
                            <div className="text-center p-4 bg-secondary/50 rounded-lg">
                                <div className="text-2xl md:text-3xl font-bold text-primary">Modern</div>
                                <div className="text-xs md:text-sm text-muted-foreground">Tech Stack</div>
                            </div>
                        </div>

                        {/* Brand Logo */}
                        <div className="flex items-center justify-center md:justify-start gap-3 opacity-60">
                            <Image
                                src="/images/webdevstudiohq-logo.png"
                                alt="webdevstudioHQ"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                webdevstudio<span className="text-primary">HQ</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
