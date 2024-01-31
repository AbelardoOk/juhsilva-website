import { CardPinturas } from "@/components/cardPinturas";
import Image from "next/image";

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
          <ul className="animate-infinite-scroll flex items-center justify-center gap-4 md:justify-start">
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
            className="animate-infinite-scroll flex items-center justify-center gap-4 md:justify-start"
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
          <a className="border-2 border-[#4B5842] px-8 py-2 font-alt text-lg uppercase text-[#4B5842] transition-colors duration-300 hover:bg-[#4B5842] hover:text-[#DADDD8]">
            Mais trabalhos
          </a>
        </div>
      </section>
    </main>
  );
}
