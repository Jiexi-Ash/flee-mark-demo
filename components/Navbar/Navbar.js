import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "redux/reducers/authSlice";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.authenticated);
  const role = useSelector((state) => state.auth.user.role) || "";

  const handleSignOut = () => {
    dispatch(signOutUser());
    router.push("/");
  };

  return (
    <header className="max-w-8xl px-8 py-6 container mx-auto">
      <nav className="flex items-center justify-between mb-8">
        <h2 className="text-md md:text-2xl uppercase font-PlayFair font-bold tracking-wider">
          flee-mark
        </h2>
        <ul className="flex items-center space-x-4  md:space-x-8">
          <li>
            <Link href="/clothing/browse">
              <a className="text-[12px] md:text-sm text-black hover:text-primaryRed/80 transition-all duration-200 ease-in-out">
                Browse
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-[12px]  md:text-sm text-black hover:text-primaryRed/80 transition-all duration-200 ease-in-out">
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-[12px] md:text-sm text-black hover:text-primaryRed/80 transition-all duration-200 ease-in-out">
                Account
              </a>
            </Link>
          </li>
          {auth && role === "seller" && (
            <li>
              <Link href="/">
                <a className="text-[12px] md:text-sm text-black hover:text-primaryRed/80 transition-all duration-200 ease-in-out">
                  Dashboard
                </a>
              </Link>
            </li>
          )}

          {auth ? (
            <li
              className="text-[12px]  md:text-sm text-white bg-primaryRed px-4 py-1 rounded-md hover:bg-primaryRed/80 md:py-2 md:px-8"
              onClick={handleSignOut}
            >
              Logout
            </li>
          ) : (
            <li className="px-4 py-1 bg-primaryRed rounded-md hover:bg-primaryRed/80 md:py-2 md:px-8">
              <Link href="/login">
                <a className="text-[12px]  md:text-sm text-white">Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <hr className="border border-primaryRed hover:border-red-500 duration-500" />
    </header>
  );
}

export default Navbar;
