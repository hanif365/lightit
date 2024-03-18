"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEquals, FaXmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const changeBackgroundNavbar = () => {
    if (window.scrollY >= 100) {
      setShowNavbar(true);
    } else if (window.scrollY < 100) {
      setShowNavbar(false);
    }
  };
  console.log("showNavbar", showNavbar);

  console.log("pathname: ", pathname);

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundNavbar);

    return () => {
      window.removeEventListener("scroll", changeBackgroundNavbar);
    };
  }, []);

  if (!pathname.startsWith("/dashboard")) {
    return (
      <div>
        <nav
          className={`w-full fixed top-0 left-0 right-0 z-10 ${
            showNavbar
              ? "bg-white text-gray-600 shadow-md"
              : "bg-transparent text-white border-b-[1px] border-gray-700"
          }`}
        >
          <div className="justify-between px-4 mx-auto lg:max-w-7xl 2xl:max-w-screen-2xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between pt-3 md:pt-0 md:mt-3 md:block">
                <Link href="/" onClick={() => {}}>
                  <div className="flex items-center">
                    <Image
                      src="/lightit_logo.png"
                      width={160}
                      height={160}
                      alt="logo"
                      className=""
                    />
                  </div>
                </Link>

                <div className="md:hidden">
                  <button
                    className="text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar((prev) => !prev)}
                  >
                    {navbar ? (
                      <FaXmark
                        style={{
                          width: "35px",
                          height: "35px",
                          color: "red",
                        }}
                      />
                    ) : (
                      <FaEquals
                        style={{
                          width: "35px",
                          height: "35px",
                          color: "#000000",
                        }}
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Middle part of Navbar */}
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-3 ${
                  navbar ? "p-12 md:p-0 block" : "hidden"
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex">
                  <Link
                    href="/industries"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    <li
                      className={`text-base font-bold py-6 md:mr-4 text-center border-b-2 md:border-b-0 hover:md:border-b-2 border-red-500 cursor-pointer transition duration-500 ease-in-out ${
                        pathname === "/industries"
                          ? "md:border-b-2 border-red-500"
                          : ""
                      }`}
                    >
                      Industries
                    </li>
                  </Link>

                  <Link
                    href="/services"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    <li
                      className={`text-base font-bold py-6 md:mx-4 text-center border-b-2  md:border-b-0 hover:md:border-b-2 border-red-500 cursor-pointer transition duration-500 ease-in-out ${
                        pathname === "/services"
                          ? "md:border-b-2 border-red-500"
                          : ""
                      }`}
                    >
                      Services
                    </li>
                  </Link>
                  <Link
                    href="/expertise"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    <li
                      className={`text-base font-bold py-6 md:mx-4 text-center border-b-2  md:border-b-0 hover:md:border-b-2 border-red-500 cursor-pointer transition duration-500 ease-in-out ${
                        pathname === "/expertise"
                          ? " md:border-b-2 border-red-500"
                          : ""
                      }`}
                    >
                      Expertise
                    </li>
                  </Link>
                  <Link
                    href="/success-stories"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    <li
                      className={`text-base font-bold py-6 md:mx-4 text-center border-b-2  md:border-b-0 hover:md:border-b-2 border-red-500 cursor-pointer transition duration-500 ease-in-out ${
                        pathname === "/success-stories"
                          ? " md:border-b-2 border-red-500"
                          : ""
                      }`}
                    >
                      Success Stories
                    </li>
                  </Link>

                  <Link
                    href="/company"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    <li
                      className={`text-base font-bold py-6 md:mx-4 text-center border-b-2  md:border-b-0 hover:md:border-b-2 border-red-500 cursor-pointer transition duration-500 ease-in-out ${
                        pathname === "/company"
                          ? " md:border-b-2 border-red-500"
                          : ""
                      }`}
                    >
                      Company
                    </li>
                  </Link>
                  <Link
                    href="/blog"
                    onClick={() => {
                      setNavbar((prev) => !prev);
                    }}
                  >
                    <li
                      className={`text-base font-bold py-6 md:ml-4 text-center border-b-2  md:border-b-0 hover:md:border-b-2 border-red-500 cursor-pointer transition duration-500 ease-in-out ${
                        pathname === "/blog"
                          ? " md:border-b-2 border-red-500"
                          : ""
                      }`}
                    >
                      Blog
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div>
              <Link
                href="/contact-us"
                className="px-12 py-3 md:mt-3 font-bold tracking-wider overflow-hidden  bg-red-400 hover:bg-red-500 rounded text-white cursor-pointer delay-100 duration-500 ease-in-out"
                type="button"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
