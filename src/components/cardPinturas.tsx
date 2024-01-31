import React from "react";
import Image from "next/image";

export function CardPinturas({
  img1,
  img2,
  tit,
  price,
}: {
  img1: string;
  img2: string;
  tit: string;
  price: string;
}) {
  return (
    <a href="/" className="group flex flex-col gap-2 text-[#4B5842]">
      <div className="relative w-72">
        <Image
          className="transform transition-transform duration-300 hover:scale-110"
          src={`/${img1}`}
          alt=""
          width={1080}
          height={1350}
        />
        <Image
          className="absolute left-0 top-0 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          src={`/${img2}`}
          alt=""
          width={1080}
          height={1350}
        />
      </div>
      <div>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-sm">"{tit}"</p>
        <p className="text-base">Por R${price}</p>
      </div>
    </a>
  );
}
