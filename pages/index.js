import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="lg:mt-10 grid md:grid-cols-2 gap-4">
        <div className="w-full relative h-[400px] bg-mens  bg-cover bg-no-repeat bg-center">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/50">
            <div className="flex justify-center items-center h-full">
              <div className="px-4 py-2 border border-white/60 text-center cursor-pointer group hover:bg-white/60 transition-all duration-200 ease-in-out lg:bg-black/60  lg:w-48 lg:py-12 lg:px-2 lg:rounded-md">
                <Link href="/clothing/men">
                  <a className="text-xl md:text-2xl text-white group-hover:text-black font-PlayFair uppercase font-bold select-none">
                    Browse mens
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative h-[400px] bg-female bg-cover bg-no-repeat bg-center">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/50">
            <div className="flex justify-center items-center h-full">
              <div className="px-4 py-2 border border-white/60 text-center cursor-pointer group hover:bg-white/60 transition-all duration-200 ease-in-out lg:bg-black/60  lg:w-48 lg:py-12 lg:px-2 lg:rounded-md">
                <Link href="/clothing/women">
                  <a className="text-xl md:text-2xl text-white group-hover:text-black font-PlayFair uppercase font-bold select-none">
                    {"Browse Women's "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative h-[250px] bg-accessory bg-cover bg-no-repeat bg-bottom mt-5">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/50">
          <div className="flex justify-center items-center h-full">
            <div className="px-4 py-2 border border-white/60 text-center cursor-pointer group hover:bg-white/60 transition-all duration-200 ease-in-out lg:bg-black/60  lg:w-48 lg:py-6 lg:px-2 lg:rounded-md">
              <Link href="/clothing/accessory">
                <a className="text-xl text-white group-hover:text-black font-PlayFair uppercase font-bold select-none">
                  {"Browse Women's "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
