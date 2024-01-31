import React from "react";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky bg-[#EBEDE9] px-64">
      <div className="flex flex-row items-center justify-center gap-16 font-alt text-2xl text-[#6b7e5e] [&_div]:flex [&_div]:flex-row [&_div]:gap-8">
        <div>
          <a
            href=""
            className="border-b-2 border-transparent transition-colors duration-300 hover:border-[#4B5842] hover:text-[#4B5842]"
          >
            Início
          </a>
          <a
            href=""
            className="border-b-2 border-transparent transition-colors duration-300 hover:border-[#4B5842] hover:text-[#4B5842]"
          >
            Ilustrações
          </a>
        </div>

        <Image
          className="h-fit w-20"
          src={"/logo.png"}
          alt="Juh"
          width={1080}
          height={1080}
        />

        <div>
          <a
            href=""
            className="border-b-2 border-transparent transition-colors duration-300 hover:border-[#4B5842] hover:text-[#4B5842]"
          >
            Contato
          </a>
          <a
            href=""
            className="border-b-2 border-transparent transition-colors duration-300 hover:border-[#4B5842] hover:text-[#4B5842]"
          >
            Sobre
          </a>
        </div>
      </div>
    </header>
  );
}
