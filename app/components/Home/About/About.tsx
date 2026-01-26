import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <section className="relative py-32 bg-secondary/50 border-y border-border overflow-hidden">
            {/* Background Asset 4 - Global Tech */}
            <div className="absolute top-0 right-0 h-full w-[40%] opacity-[0.08] dark:opacity-15 pointer-events-none z-0">
                <Image
                    src="/background-ornaments/4.png"
                    alt="Global Tech"
                    fill
                    className="object-contain object-right"
                />
            </div>
            <div className="relative z-10 w-[90%] xl:w-[80%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Image Section - Spans 5 columns - Shifted */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-start">
                        <div className="relative group">
                            {/* Decorative architectural anchors */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-primary/30 z-0"></div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-primary/30 z-0"></div>

                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                                <Image
                                    src="/images/image (1).jpg"
                                    alt="Profile"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 256px, 320px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Section - Spans 7 columns */}
                    <div className="lg:col-span-7">
                        <div className="mb-10">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-6 leading-tight uppercase italic">
                                We craft <br />
                                <span className="text-primary not-italic">Digital Magic</span>
                            </h2>
                            <p className="text-muted-foreground text-xl mb-8 leading-relaxed font-semibold opacity-90">
                                Full-Stack Developer specializing in modern web technologies. Experienced in building
                                high-performance applications with React, Next.js, Node.js, and cloud platforms.
                                Passionate about creating exceptional user experiences and scalable solutions.
                            </p>
                        </div>

                        {/* Quick Stats - Asymmetrical Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                            <div className="p-6 bg-card border border-border rounded-xl flex flex-col items-center sm:items-start group hover:border-primary/50 transition-colors">
                                <div className="text-4xl font-black text-primary mb-1 tracking-tighter italic">8+</div>
                                <div className="text-xs uppercase tracking-widest text-muted-foreground font-black">Success Projects</div>
                            </div>
                            <div className="p-6 bg-card border border-border rounded-xl flex flex-col items-center sm:items-start group hover:border-primary/50 transition-colors sm:translate-y-4">
                                <div className="text-4xl font-black text-primary mb-1 tracking-tighter italic">Full</div>
                                <div className="text-xs uppercase tracking-widest text-muted-foreground font-black">Stack Focus</div>
                            </div>
                            <div className="p-6 bg-card border border-border rounded-xl flex flex-col items-center sm:items-start group hover:border-primary/50 transition-colors">
                                <div className="text-4xl font-black text-primary mb-1 tracking-tighter italic">Mod</div>
                                <div className="text-xs uppercase tracking-widest text-muted-foreground font-black">Modern Tech Bundle</div>
                            </div>
                        </div>

                        {/* Brand Signature */}
                        <div className="flex items-center gap-4 pt-4 border-t border-border w-fit">
                            <Image
                                src="/images/webdevstudiohq-logo.png"
                                alt="webdevstudioHQ"
                                width={40}
                                height={40}
                                className="object-contain grayscale opacity-50 transition-opacity hover:opacity-100"
                            />
                            <div className="h-4 w-px bg-border"></div>
                            <span className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em]">
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
