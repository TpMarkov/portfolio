import Image from "next/image";
import React from "react";
type Props = {
  image: string;
  title: string;
};
const BlogCard = ({ image, title }: Props) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg shadow-md border border-border">
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="mt-4 text-muted-foreground font-medium text-base sm:text-lg">
        24 September 2025
      </p>
      <h1 className="mt-5 text-lg sm:text-xl font-bold text-foreground hover:underline hover:text-primary cursor-pointer transition-all">
        {title}
      </h1>
      <div className="mt-4 flex gap-2 items-center">
        <p className="px-4 py-1.5 bg-secondary text-secondary-foreground text-sm sm:text-base font-bold rounded-full">
          React
        </p>
        <p className="px-4 py-1.5 bg-secondary text-secondary-foreground text-sm sm:text-base font-bold rounded-full">
          Next JS
        </p>
        <p className="px-4 py-1.5 bg-secondary text-secondary-foreground text-sm sm:text-base font-bold rounded-full">
          Tailwind
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
