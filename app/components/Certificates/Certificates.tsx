import React from "react";
import Image from "next/image";
import { CERTIFICATES } from "@/app/constants/constant";
import CertificateCard from "./CertificateCard";

const Certificates = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="w-[90%] xl:w-[80%] mx-auto">
                {/* Header Section */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-6 leading-tight uppercase italic flex items-center gap-4">
                        Professional <span className="text-primary not-italic">Milestones</span>
                    </h2>
                    <p className="max-w-2xl text-muted-foreground text-lg font-semibold opacity-90">
                        A curated showcase of professional certifications and qualifications that validate my technical expertise and commitment to continuous learning.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {CERTIFICATES.map((cert) => (
                        <div key={cert.id} className="h-full">
                            <CertificateCard
                                title={cert.title}
                                issuer={cert.issuer}
                                image={cert.image}
                                date={cert.date}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
