import Image from "next/image";
import React from "react";

const Awards = () => {
  const awards = [
    {
      id: 1,
      img: "/award1.svg",
    },
    {
      id: 2,
      img: "/award2.svg",
    },
    {
      id: 3,
      img: "/award3.svg",
    },
    {
      id: 4,
      img: "/award4.svg",
    },
    {
      id: 5,
      img: "/award5.svg",
    },
    {
      id: 6,
      img: "/award6.svg",
    },
    {
      id: 7,
      img: "/award7.svg",
    },
    {
      id: 8,
      img: "/award8.svg",
    },
    {
      id: 9,
      img: "/award9.svg",
    },
    {
      id: 10,
      img: "/award10.svg",
    },
  ];
  return (
    <div className="px-5 lg:px-14 2xl:px-72 pt-20 pb-32">
      <h1 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold text-center">
        Awards and Recognitions
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 lg:gap-x-12 gap-y-14 pt-16 lg:pt-20">
        {awards?.map((award) => (
          <Image
            key={award.id}
            src={award.img}
            alt="award"
            width={800}
            height={800}
            className="grayscale hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Awards;
