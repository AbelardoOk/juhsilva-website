import React from "react";
import { Logo } from "../../public/logo";

export function Header() {
  return (
    <header className="sticky px-64 bg-[#EBEDE9]">
      <div className="flex flex-row text-2xl justify-center gap-16 font-alt text-[#6b7e5e] py-3 [&_div]:flex [&_div]:flex-row [&_div]:gap-8 items-center">
        <div>
          <a
            href=""
            className="hover:text-[#4B5842] transition-colors duration-300 border-b-2 border-transparent hover:border-[#4B5842]"
          >
            Início
          </a>
          <a
            href=""
            className="hover:text-[#4B5842] transition-colors duration-300 border-b-2 border-transparent hover:border-[#4B5842]"
          >
            Ilustrações
          </a>
        </div>

        <Logo />

        <div>
          <a
            href=""
            className="hover:text-[#4B5842] transition-colors duration-300 border-b-2 border-transparent hover:border-[#4B5842]"
          >
            Contato
          </a>
          <a
            href=""
            className="hover:text-[#4B5842] transition-colors duration-300 border-b-2 border-transparent hover:border-[#4B5842]"
          >
            Sobre
          </a>
        </div>
      </div>
    </header>
  );
}
