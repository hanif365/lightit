"use client";

import ContactForm from "./ContactForm/ContactForm";
import Image from "next/image";

const Contact = () => {
  const contactData1 = [
    {
      id: 2,
      img: "/contactLogo2.svg",
    },
    {
      id: 3,
      img: "/contactLogo3.svg",
    },
    {
      id: 4,
      img: "/contactLogo4.svg",
    },
    {
      id: 5,
      img: "/contactLogo5.svg",
    },
    {
      id: 6,
      img: "/contactLogo6.svg",
    },
    {
      id: 7,
      img: "/contactLogo7.svg",
    },
    {
      id: 8,
      img: "/contactLogo8.svg",
    },
    {
      id: 9,
      img: "/contactLogo9.svg",
    },
  ];

  const contactData2 = [
    {
      id: 1,
      img: "/contactLogo10.svg",
    },
    {
      id: 2,
      img: "/contactLogo11.svg",
    },
    {
      id: 3,
      img: "/contactLogo12.png",
    },
  ];

  return (
    <div className="px-14 2xl:px-72 pt-20 pb-16">
      <h1 className="lg:text-5xl 2xl:text-6xl font-bold text-center">
        Have a Project in Mind?
      </h1>
      <p className="lg:text-xl font-medium text-center pt-5 pb-16">
        Book a free consultation with tech experts
      </p>

      <div className="flex">
        <div className="w-7/12 ">
          <ContactForm />
        </div>
        <div className="w-5/12 ">
          <div className="grid grid-cols-4 gap-x-3 gap-y-5 items-center border-b-[1px] pb-5">
            {contactData1?.map((contact1) => (
              <Image
                className="grayscale hover:grayscale-0"
                src={contact1.img}
                alt="contact page logo"
                width={100}
                height={100}
                key={contact1.id}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-x-20 gap-y-5 items-center pt-5 px-4">
            {contactData2?.map((contact2) => (
              <Image
                className="grayscale hover:grayscale-0"
                src={contact2.img}
                alt="contact page logo"
                width={100}
                height={100}
                key={contact2.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
