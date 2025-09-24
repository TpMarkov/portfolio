import Image from "next/image";
import React from "react";
type Props = {
  name: string;
  image: string;
  role: string;
};
const ClientReviewCard = ({ name, image, role }: Props) => {
  return (
    <div className="m-2">
      <Image
        src={image}
        width={60}
        height={60}
        alt={name}
        className="rounded-full"
      />
      <p className="mt-6 text-base text-gray-200 font-medium">
        &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
        tempore perferendis cum voluptas nulla et ad sapiente suscipit commodi
        eum. &quot;
      </p>
      <h1 className="mt-6 text-xl font-bold text-cyan-200">{name}</h1>
      <p className="mt-1 text-white">{role}</p>
    </div>
  );
};

export default ClientReviewCard;
