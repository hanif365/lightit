import { FaArrowRightLong } from "react-icons/fa6";
import serviceData from "../../../data/servicesData.json";

const Services = () => {
  return (
    <div className="px-5 lg:px-14 2xl:px-72 pt-20 pb-24 bg-[#f1f4fd]">
      <h1 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold text-center">
        Services we provide
      </h1>
      <div className="grid lg:grid-cols-3 gap-x-6 gap-y-3 lg:gap-y-10 pt-10 lg:pt-20">
        {serviceData.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl p-4 lg:p-8 cursor-pointer lg:hover:drop-shadow-2xl flex lg:block"
          >
            <h2 className="text-lg lg:text-3xl font-bold">{service.name}</h2>
            <p className="hidden lg:block lg:text-lg tracking-wider py-5">
              {service.description}
            </p>
            <div className="flex items-center text-red-500 hover:text-red-600 group">
              <p className="invisible lg:visible mr-2 lg:mr-5 font-medium">
                Learn more
              </p>
              <FaArrowRightLong
                className="lg:group-hover:ml-3 duration-300 absolute lg:static right-10 lg:right-0"
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
