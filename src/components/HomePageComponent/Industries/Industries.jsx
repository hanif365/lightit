import Image from "next/image";
import Link from "next/link";
import React from "react";

const Industries = () => {
  const industries = [
    {
      id: 1,
      img: "/industry1.jpg",
      name: "Healthcare",
      description:
        "Telemedicine, pharma & biotechnology solutions, hospital management, patient databases, EHRs, and more!",
    },
    {
      id: 2,
      img: "/industry2.jpg",
      name: "Finance & Banking",
      description:
        "Digital banking, decentralized finance, cryptocurrencies & trading platforms, Insurtech, loan & tax management software.",
    },
    {
      id: 3,
      img: "/industry3.jpg",
      name: "Education",
      description:
        "Learning Management Systems, virtual classrooms, AI/ML-based interactive solutions, special needs education services.",
    },
    {
      id: 4,
      img: "/industry4.jpg",
      name: "Media & Advertising",
      description:
        "Marketing campaigns automation, real-time visualization, trade promotion management, sales forecasting.",
    },
    {
      id: 5,
      img: "/industry5.jpg",
      name: "Retail",
      description:
        "eCommerce platforms & marketplaces, AI-powered analytics, Big Data-driven lead enrichment.",
    },
    {
      id: 6,
      img: "/industry6.jpg",
      name: "Travel & Transportation",
      description:
        "Peer-to-peer delivery, transportation management, geospatial engineering, & navigation systems.",
    },
  ];
  return (
    <div className="px-14 2xl:px-72 pt-20 pb-16  bg-[#f1f4fd]">
      <h1 className="lg:text-5xl 2xl:text-6xl font-bold text-center">
        Our Industries
      </h1>
      <div className="grid grid-cols-3 gap-x-5 gap-y-6 pt-20">
        {industries?.map((industry) => (
          <div
            className="bg-white rounded-2xl group overflow-hidden cursor-pointer"
            key={industry.id}
          >
            <Image
              className="rounded-2xl group-hover:scale-110 transition-all duration-300"
              src={industry.img}
              alt="Industry Photo"
              width={1000}
              height={1000}
            />
            <div className="p-4">
              <h2 className="lg:text-3xl font-bold">{industry.name}</h2>
              <p className="lg:text-lg tracking-wide py-5">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-10">
        <Link
          href=""
          className="px-8 py-4 md:mt-3 font-bold tracking-wider overflow-hidden text-white bg-red-400 hover:bg-red-500 rounded cursor-pointer delay-100 duration-500 ease-in-out"
          type="button"
        >
          See All Industries
        </Link>
      </div>
    </div>
  );
};

export default Industries;
