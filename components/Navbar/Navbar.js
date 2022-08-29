import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="max-w-8xl px-8 py-6 container mx-auto">
      <nav className="flex items-center justify-between mb-8">
        <h2 className="text-2xl uppercase font-PlayFair font-bold tracking-wider">
          flee-mark
        </h2>
        <ul className="flex items-center space-x-4  md:space-x-8">
          <li>
            <Link href="/clothing/browse">
              <a className="text-sm text-black hover:text-primaryRed/80 transition-all duration-200 ease-in-out">
                Browse
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-sm text-black hover:text-primaryRed/80 transition-all duration-200 ease-in-out">
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-sm text-black hover:text-primaryRed/80 transition-all duration-200 ease-in-out">
                Blog
              </a>
            </Link>
          </li>

          <li className="bg-primaryRed px-4 py-1 rounded-md hover:bg-primaryRed/80 md:py-2 md:px-8">
            <Link href="/">
              <a className="text-sm text-white">Login</a>
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="border border-primaryRed hover:border-red-500 duration-500" />
    </header>
  );
}

export default Navbar;
