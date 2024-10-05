import { cn } from "@/lib/utils";
import { HomecardProps } from "@/types";
import Image from "next/image";
import React from "react";

const HomeCard = ({
  className,
  img,
  title,
  description,
  handleClick,
}: HomecardProps) => {
  console.log(typeof `bg-${className}`);

  return (
    <section
      onClick={handleClick}
      className={`bg-${className} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} alt={title.toLowerCase()} width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
