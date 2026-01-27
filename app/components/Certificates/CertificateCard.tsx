import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  issuer: string;
  image: string;
  date: string;
  sapMode?: boolean;
}

const CertificateCard = ({
  title,
  issuer,
  image,
  date,
  sapMode = false,
}: Props) => {
  if (sapMode) {
    return (
      <div className="h-full">
        <div className="bg-white border border-[#e5e7eb] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="relative w-full aspect-[16/10]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-5">
            <p className="text-xs font-medium text-[#0070f2] uppercase tracking-[0.15em] mb-2">
              {issuer}
            </p>
            <h3 className="text-lg font-semibold text-[#11181c] mb-2">
              {title}
            </h3>
            <p className="text-xs text-[#6b7280] font-medium uppercase tracking-wider">
              {date}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/30">
        <div className="relative w-full aspect-[16/10]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
            {issuer}
          </p>
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-black">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
