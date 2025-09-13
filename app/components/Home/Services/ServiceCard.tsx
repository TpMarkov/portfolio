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
      <Image width={60} height={60} src={icon} alt={name} />
      <h1 className="mt-6 text-xl md:text-2xl font-bold text-gray-200">
        {name}
      </h1>
      <p className="text-gray-300 mt-6">{description}</p>
    </div>
  );
};

export default ServiceCard;
