import React from "react";
import Image from "next/image";

interface CertificateCardProps {
    title: string;
    issuer: string;
    image: string;
    date: string;
}

const CertificateCard = ({ title, issuer, image, date }: CertificateCardProps) => {
    return (
        <div className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 flex flex-col h-full">
            {/* Certificate Image Wrapper */}
            <div className="relative aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Read-only overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white text-xs font-black uppercase tracking-[0.2em] bg-primary/80 backdrop-blur-sm px-3 py-1 rounded">
                        Official Document
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary italic">
                            Certification
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
                            {date}
                        </span>
                    </div>
                    <h3 className="text-xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors leading-tight uppercase italic line-clamp-2">
                        {title}
                    </h3>
                </div>

                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        Issued by: <span className="text-foreground">{issuer}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CertificateCard;
