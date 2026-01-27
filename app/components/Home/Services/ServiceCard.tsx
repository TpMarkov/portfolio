import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  name: string;
  description: string;
  sapMode?: boolean;
}

const ServiceCard = ({ icon, name, description, sapMode = false }: Props) => {
  return (
    <div
      className={`
      flex items-start flex-col
      ${sapMode ? "p-6 bg-sap-white border border-sap-border rounded-lg hover:shadow-md transition-shadow" : ""}
    `}
    >
      <Image
        width={sapMode ? 48 : 60}
        height={sapMode ? 48 : 60}
        src={icon}
        alt={name}
        className={sapMode ? "" : "dark:invert-0 light:invert-[.5]"}
      />
      <h1
        className={`
        mt-6 text-foreground hover:transition-colors
        ${
          sapMode
            ? "text-xl font-semibold tracking-tight"
            : "text-xl md:text-2xl font-bold"
        }
        ${sapMode ? "hover:text-sap-primary" : "hover:text-primary"}
      `}
      >
        {name}
      </h1>
      <p
        className={`
        mt-6 leading-relaxed
        ${sapMode ? "text-sap-text-secondary text-sm" : "text-muted-foreground"}
      `}
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
