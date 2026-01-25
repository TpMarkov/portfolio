import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  name: string;
  description: string;
}

const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div className="flex items-start flex-col">
      <Image width={60} height={60} src={icon} alt={name} className="dark:invert-0 light:invert-[.5]" />
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors">
        {name}
      </h1>
      <p className="text-muted-foreground mt-6 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
