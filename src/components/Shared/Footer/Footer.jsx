"use client";

import Image from "next/image";
import {
  FaBehance,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (!pathname.startsWith("/dashboard")) {
    return (
      <div className="mt-24 bg-[#1e1f22] px-5 lg:px-20 2xl:px-60 pt-20 print:hidden">
        <div className="flex flex-col lg:flex-row border-b border-gray-700 pb-16 ">
          <div className="flex-auto lg:w-32 px-5 lg:px-0">
            <div className="flex">
              <Image
                src="/lightit_logo.png"
                width={160}
                height={160}
                alt="logo"
                className=""
              />
            </div>
            <p className="text-[#fff] pt-8 pb-3 lg:pr-10 leading-8 tracking-wider">
              +44 208 089 9049
            </p>
            <div className="w-40 border-t border-gray-600"></div>

            <p className="text-[#fff] pt-3 lg:pr-10 leading-8 tracking-wider">
              sales@light-it.net
            </p>
          </div>

          <div className="flex-1 px-10 lg:px-2 hidden lg:block">
            <h4 className="text-white text-lg font-bold pb-5">Industries</h4>
            <ul className="text-[#fff] space-y-2">
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Finance & Banking
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Media & Advertising
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Retail
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Travel & Transportation
                </Link>
              </li>
              <li className="flex space-x-2 items-center group pt-5">
                <Link
                  href="/"
                  className="text-red-500 hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  See more
                </Link>
                <IoIosArrowDroprightCircle
                  style={{ width: "18px", height: "18px" }}
                  className="cursor-pointer text-red-500 group-hover:text-red-600 transition-all ease-in-out duration-500 group-hover:ml-5"
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 px-10 lg:px-2 hidden lg:block">
            <h4 className="text-white text-lg font-bold pb-5">Services</h4>
            <ul className="text-[#fff] space-y-2">
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Business Analysis
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Design Solutions
                </Link>
              </li>
              <li className="flex space-x-2 items-center group pt-5">
                <Link
                  href="/"
                  className="text-red-500 hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  See more
                </Link>
                <IoIosArrowDroprightCircle
                  style={{ width: "18px", height: "18px" }}
                  className="cursor-pointer text-red-500 group-hover:text-red-600 transition-all ease-in-out duration-500 group-hover:ml-5"
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 px-10 lg:px-2 hidden lg:block">
            <h4 className="text-white text-lg font-bold pb-5">Expertise</h4>
            <ul className="text-[#fff] space-y-2">
              <li>
                <Link
                  href=""
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Front-end Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Back-end Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  SaaS Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Data Mining & BI
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  AI & Chatbots
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li className="flex space-x-2 items-center group pt-5">
                <Link
                  href="/"
                  className="text-red-500 hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  See more
                </Link>
                <IoIosArrowDroprightCircle
                  style={{ width: "18px", height: "18px" }}
                  className="cursor-pointer text-red-500 group-hover:text-red-600 transition-all ease-in-out duration-500 group-hover:ml-5"
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 px-10 lg:px-5 hidden lg:block">
            <h4 className="text-white text-lg font-bold pb-5">About Us</h4>
            <ul className="text-[#fff] space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Success stories
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:underline hover:underline-offset-4 transition-all ease-out duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between py-10">
          <p className="text-[#fff] text-sm text-center lg:text-right">
            &copy;{new Date().getFullYear()} Light IT Global. All rights
            reserved
            <Link
              href=""
              rel="noopener noreferrer"
              className="underline pl-2 block md:inline"
            >
              Terms of Use and Privacy Policy
            </Link>
          </p>

          <div className="pb-10 lg:pb-0">
            <div className="flex space-x-10 justify-center">
              <Link href="#" rel="noopener noreferrer">
                <FaFacebookF
                  style={{ width: "20px", height: "20px" }}
                  className="cursor-pointer text-[#fff] hover:text-gray-400 transition-all ease-in-out duration-500"
                />
              </Link>
              <Link href="#" rel="noopener noreferrer">
                <RiInstagramFill
                  style={{ width: "20px", height: "20px" }}
                  className="cursor-pointer text-[#fff] hover:text-gray-400 transition-all ease-in-out duration-500"
                />
              </Link>
              <Link href="#" rel="noopener noreferrer">
                <FaLinkedinIn
                  style={{ width: "20px", height: "20px" }}
                  className="cursor-pointer text-[#fff] hover:text-gray-400 transition-all ease-in-out duration-500"
                />
              </Link>
              <Link href="#" rel="noopener noreferrer">
                <FaXTwitter
                  style={{ width: "20px", height: "20px" }}
                  className="cursor-pointer text-[#fff] hover:text-gray-400 transition-all ease-in-out duration-500"
                />
              </Link>

              <Link href="#" rel="noopener noreferrer">
                <FaBehance
                  style={{ width: "20px", height: "20px" }}
                  className="cursor-pointer text-[#fff] hover:text-gray-400 transition-all ease-in-out duration-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
