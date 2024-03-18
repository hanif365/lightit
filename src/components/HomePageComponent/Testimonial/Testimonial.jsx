"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mamadou Djigo",
      designation: "Senegal Country Director, Head of QA",
      speech:
        "We found the most impressive about Light IT Global their engagement and availability as well as their focus on quality. Our cooperation was very successful, and the process was really clear.",
      img: "/testimonial1.svg",
    },
    {
      id: 1,
      name: "David Yudovich",
      designation: "SEO",
      speech:
        "We always felt that the project team was working on our behalf and our tight collaboration produced excellent results.",
      img: "/testimonial2.svg",
    },
    {
      id: 1,
      name: "Oleksandr Borysov",
      designation: "Director Of Technology",
      speech:
        "Everyone tries to do their best to deliver and match the bar we set! They're incredibly professional and knowledgeable about their field and its best practices.",
      img: "/testimonial3.svg",
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
    <div className="px-14 2xl:px-72 pt-20 pb-20 bg-[#f1f4fd]">
      <Slider {...settings}>
        {testimonials?.map((testimonial) => (
          <div className="" key={testimonial.id}>
            <div className="flex">
              <div className="w-1/4">
                <div className="pt-16">
                  <Image
                    className="w-full h-full"
                    src={testimonial.img}
                    alt="Success Story Photo"
                    width={200}
                    height={100}
                  />

                  <div className="text-right pt-20">
                    <p className="text-sm">Verified by</p>
                    <p className="font-bold text-sm">Clutch</p>
                  </div>
                </div>
              </div>
              <div className="w-3/4 pl-40">
                <FaQuoteLeft size={40} className="text-red-500 mb-5" />
                <p className="lg:text-xl font-semibold tracking-wider pl-10">
                  {testimonial.speech}
                </p>

                <p className="font-bold pt-10 pl-10 italic">
                  {testimonial.name}
                </p>
                <p className="text-sm pl-10 pb-10 italic">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
