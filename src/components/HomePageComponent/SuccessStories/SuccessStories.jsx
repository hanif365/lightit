"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      name: "Decentralized SaaS Big Data Solution for a Network of Clinics",
      dept: "Healthcare",
      description:
        "A comprehensive, scalable SAAS solution helps medical professionals operate MRI images more efficiently. It not only reduces the need for manual labor but also provides employees with an easy-to-use digital catalog. The platform has already been successfully incorporated into the infrastructure of one of the clinics in Israel and has processed more than 1 million images.",
      img1: "/success_story_1a.jpg",
      img2: "/success_story_1b.jpg",
      tags: [
        "IT Consulting",
        "Mobile Development",
        "Quality Assurance",
        "Web Development",
        "Design",
        "DevOps",
      ],
    },
    {
      id: 2,
      name: "A Powerful All-in-One Fintech CRM Development",
      dept: "Finance & Banking",
      description:
        "An innovative “all-in-one” solution for brokers combines all of the features necessary for a modern CRM and an in-depth analytical tool. The users are able to fully control all of the processes: from new employees/clients onboarding to transactions/trades management and real-time data processing. The platform is fully compliant and is currently utilized by AvaTrade — one of the most popular online brokers in the world.",
      img1: "/success_story_2a.jpg",
      img2: "/success_story_2b.jpg",
      tags: ["IT Consulting", "Web Development", "Quality Assurance", "Design"],
    },
    {
      id: 3,
      name: "An interactive SAAS solution enhancing eLearning experience",
      dept: "Education",
      description:
        "A web-based eLearning platform was created by Light IT Global for one of the respected international educational facilities. A highly precise matching algorithm helps the students find a teacher that fully meets their educational needs. A wide range of digital tools (e.g., audio and video conferencing, chat, file exchange, etc.) makes the process convenient and effective for everyone involved.",
      img1: "/success_story_3.jpg",
      img2: "",
      tags: ["IT Consulting", "Web Development", "Quality Assurance"],
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="px-5 lg:px-14 2xl:px-72 pt-20 pb-16">
      <h1 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold text-center">
        Success Stories
      </h1>
      <div className="pt-16">
        <Slider {...settings}>
          {successStories?.map((successStory) => (
            <div className="" key={successStory.id}>
              <div className="flex flex-col-reverse lg:flex-row">
                <div className="w-full lg:w-7/12 lg:pr-10">
                  <h2 className="text-xl pt-10 lg:pt-0 lg:text-3xl font-bold">
                    {successStory.name}
                  </h2>
                  <p className="text-[#2954DA] text-sm bg-[#F1F4FD] p-2 my-5 w-40 rounded-2xl text-center">
                    {successStory.dept}
                  </p>
                  <p className="lg:text-lg text-[#353538] tracking-wide py-5">
                    {successStory.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {successStory?.tags.map((tag, index) => (
                      <p
                        key={index}
                        className="text-sm px-3 py-2  rounded-2xl text-center border"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center text-red-500 hover:text-red-600 group pt-8 pb-5 lg:pb-0 cursor-pointer">
                    <p className="mr-5 font-medium">Learn more</p>
                    <FaArrowRightLong
                      className="group-hover:ml-3 duration-300"
                      size={20}
                    />
                  </div>
                </div>

                <div className="w-full lg:w-5/12">
                  <div className="flex space-x-3 overflow-x-hidden">
                    <Image
                      className="w-full h-full"
                      src={successStory.img1}
                      alt="Success Story Photo"
                      width={200}
                      height={100}
                    />
                    {successStory?.img2 && (
                      <Image
                        className="w-full h-full lg:mt-10"
                        src={successStory.img2}
                        alt="Success Story Photo"
                        width={200}
                        height={100}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SuccessStories;
