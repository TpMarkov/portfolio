import Image from "next/image";
import React from "react";
type Props = {
  name: string;
  image: string;
  role: string;
};
const ClientReviewCard = ({ name, image, role }: Props) => {
  return (
    <div className="m-2 p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <Image
        src={image}
        width={60}
        height={60}
        alt={name}
        className="rounded-full"
      />
      <p className="mt-6 text-base text-muted-foreground font-medium italic">
        &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
        tempore perferendis cum voluptas nulla et ad sapiente suscipit commodi
        eum. &quot;
      </p>
      <h1 className="mt-6 text-xl font-bold text-primary">{name}</h1>
      <p className="mt-1 text-foreground font-semibold">{role}</p>
    </div>
  );
};

export default ClientReviewCard;
