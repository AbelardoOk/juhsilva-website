import { CardPinturas } from "@/components/cardPinturas";
import Image from "next/image";
import { WhatsappLogo } from "../../public/whatsapp";
import { InstagramLogo } from "../../public/instagram";

export default function Home() {
  return (
    <main className="h-fulloverflow-hidden bg-[#EBEDE9]">
      <section className="flex justify-center bg-[url('/bg1.jpg')] bg-cover bg-center">
        <Image
          className="h-96 w-fit drop-shadow-md"
          src={"/letra.png"}
          alt="Juh Silva"
          width={1920}
          height={720}
        />
      </section>
      <section className="flex flex-col gap-16 px-36 pb-16 pt-24">
        <h2 className="mx-64 border-b-2 border-[#4B5842] pb-8 text-center font-alt text-6xl text-[#4B5842]">
          Pinturas
        </h2>

        <div className="inline-flex h-full w-full flex-nowrap gap-4 overflow-hidden">
          <ul className="flex animate-infinite-scroll items-center justify-center gap-4 md:justify-start">
            <li>
              <CardPinturas
                img1={"a.jpg"}
                img2={"b.jpg"}
                tit={"Pintura Legal"}
                price={"249.90"}
              />
            </li>
            <li>
              <CardPinturas
                img1={"a.jpg"}
                img2={"b.jpg"}
                tit={"Pintura Legal"}
                price={"249.90"}
              />
            </li>
            <li>
              <CardPinturas
                img1={"a.jpg"}
                img2={"b.jpg"}
                tit={"Pintura Legal"}
                price={"249.90"}
              />
            </li>
            <li>
              <CardPinturas
                img1={"a.jpg"}
                img2={"b.jpg"}
                tit={"Pintura Legal"}
                price={"249.90"}
              />
            </li>
            <li>
              <CardPinturas
                img1={"a.jpg"}
                img2={"b.jpg"}
                tit={"Pintura Legal"}
                price={"249.90"}
              />
            </li>
          </ul>
          <ul
            className="flex animate-infinite-scroll items-center justify-center gap-4 md:justify-start"
            aria-hidden="true"
          >
            <li>
              <CardPinturas
                img1={"a.jpg"}
                img2={"b.jpg"}
                tit={"Pintura Legal"}
                price={"249.90"}
              />
            </li>
            <li>
              <CardPinturas
                img1={"a.jpg"}
                img2={"b.jpg"}
                tit={"Pintura Legal"}
                price={"249.90"}
              />
            </li>
            <li>
              <CardPinturas
                img1={"a.jpg"}
                img2={"b.jpg"}
                tit={"Pintura Legal"}
                price={"249.90"}
              />
            </li>
            <li>
              <CardPinturas
                img1={"a.jpg"}
                img2={"b.jpg"}
                tit={"Pintura Legal"}
                price={"249.90"}
              />
            </li>
            <li>
              <CardPinturas
                img1={"a.jpg"}
                img2={"b.jpg"}
                tit={"Pintura Legal"}
                price={"249.90"}
              />
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="/"
            className="border-2 border-[#4B5842] px-8 py-2 font-alt text-lg uppercase text-[#4B5842] transition duration-300 hover:scale-105 hover:bg-[#4B5842] hover:text-[#DADDD8] hover:shadow-xl"
          >
            Mais trabalhos
          </a>
        </div>
      </section>
      <section className="grid h-screen grid-cols-2 items-center justify-around gap-16 px-36 py-16">
        <Image
          className="h-fit w-full"
          src={"/bigPaint.jpg"}
          alt="pintura grandona"
          width={3024}
          height={3024}
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col text-[#4B5842] ">
            <h3 className="font-alt text-4xl">Pinturas originais</h3>
            <h4 className="font-sans text-xl">
              Pinturas originais pintada por Julia Silva
            </h4>
          </div>

          <div>
            <a
              href="/"
              className="border-2 border-[#4B5842] bg-[#4B5842] px-8 py-2 text-left font-alt text-lg uppercase text-[#DADDD8] transition duration-300 hover:scale-105 hover:border-l-2 hover:border-t-2 hover:bg-transparent hover:text-[#4B5842] hover:shadow-inner"
            >
              Loja
            </a>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-16 px-36 py-16">
        <div className="flex flex-col gap-4 text-[#4B5842]">
          <div>
            <h2 className="font-alt text-5xl">Oie!</h2>
            <p className="text-pretty font-sans text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              commodi sequi aliquid laborum voluptatum sint quibusdam quisquam
              totam beatae, quis debitis aut dolore maxime facilis voluptatem
              dolorum obcaecati perspiciatis saepe?
            </p>
          </div>
          <div>
            <a
              href="/"
              className="border-2 border-b-4 border-r-4 border-[#4B5842] px-8 py-2 font-alt text-lg uppercase text-[#4B5842] transition-all duration-300 hover:scale-105 hover:border-b-2 hover:border-r-2 hover:bg-[#4B5842] hover:text-[#DADDD8] hover:shadow-inner"
            >
              Mais detalhes
            </a>
          </div>
        </div>
        <Image
          className="h-fit w-full"
          src={"/bigPaint.jpg"}
          alt="pintura grandona"
          width={3024}
          height={3024}
        />
      </section>

      <section className="flex flex-col items-center justify-center gap-8 bg-[url(/bg2.jpg)] bg-cover bg-center px-36 py-16">
        <div className="flex flex-col gap-1 text-center">
          <h2 className="font-alt text-6xl text-[#B7CE63] drop-shadow-lg">
            Quer conversar comigo?
          </h2>
          <p className="font-sans text-xl text-[#C7D59F]  drop-shadow-lg">
            Você pode entrar em contato comigo nas redes abaixo!
          </p>
        </div>
        <div className="flex flex-row gap-4  drop-shadow-lg">
          <a
            className="rounded-full border-2 border-[#C7D59F] p-4 text-[#C7D59F] transition-all duration-300 hover:scale-110 hover:border-[#B7CE63] hover:text-[#B7CE63]"
            href="/"
          >
            <InstagramLogo />
          </a>
          <a
            className="rounded-full border-2 border-[#C7D59F] p-4 text-[#C7D59F] transition-all duration-300 hover:scale-110 hover:border-[#B7CE63] hover:text-[#B7CE63]"
            href="/"
          >
            <WhatsappLogo />
          </a>
        </div>
        <p className="font-sans text-sm font-light text-[#C7D59F]">
          ©2024 juhsilva. Todos direitos reservados
        </p>
      </section>
    </main>
  );
}
