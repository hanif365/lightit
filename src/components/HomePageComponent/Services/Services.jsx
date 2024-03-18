import { FaArrowRightLong } from "react-icons/fa6";
import serviceData from "../../../data/servicesData.json";

const Services = () => {
  return (
    <div className="px-14 2xl:px-72 pt-20 pb-24 bg-[#f1f4fd]">
      <h1 className="lg:text-5xl 2xl:text-6xl font-bold text-center">
        Services we provide
      </h1>
      <div className="grid grid-cols-3 gap-x-6 gap-y-10 pt-20 ">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl p-8 cursor-pointer hover:drop-shadow-2xl"
          >
            <h2 className="lg:text-3xl font-bold">{service.name}</h2>
            <p className="lg:text-lg tracking-wider py-5">
              {service.description}
            </p>
            <div className="flex items-center text-red-500 hover:text-red-600 group">
              <p className="mr-5 font-medium">Learn more</p>
              <FaArrowRightLong
                className="group-hover:ml-3 duration-300"
                size={20}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
