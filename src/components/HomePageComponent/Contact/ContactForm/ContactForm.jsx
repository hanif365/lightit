import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const initialState = {
  firstName: "",
  lastName: "",
  user_email: "",
  phone: "",
  company: "",
  message: "",
  agree: false,
};

const errorInitialState = {
  firstName: "",
  lastName: "",
  user_email: "",
  agree: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState(errorInitialState);

  const handleChange = (e) => {
    setErrors(errorInitialState);
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "This field cannot be empty";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "This field cannot be empty";
    }
    if (!formData.user_email.trim()) {
      newErrors.user_email = "This field cannot be empty";
    }
    if (!formData.agree) {
      newErrors.agree = "Please agree to the Terms and Conditions";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
              setFormData(initialState);
              toast.success("Message sent successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            },
            (err) => {
              toast.error("Failed to send message. Please try again later.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setFormData(initialState);
            }
          );
      } catch (error) {
        toast.error("Failed to send message. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData(initialState);
      }
    }
  };

  const hasErrors = Object.values(errors).some((error) => error !== "");

  return (
    <div className="lg:pr-28">
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-x-5">
          <div className="space-y-5">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                className={`w-full bg-[#f1f4fd] rounded-md p-3 outline-none`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name *"
                className={`w-full bg-[#f1f4fd] rounded-md p-3 outline-none`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Email *"
                className={`w-full bg-[#f1f4fd] rounded-md p-3 outline-none`}
              />
              {errors.user_email && (
                <p className="text-red-500 text-sm">{errors.user_email}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+ Phone"
                className={`w-full bg-[#f1f4fd] rounded-md p-3 outline-none`}
              />
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className={`w-full bg-[#f1f4fd] rounded-md p-3 outline-none`}
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter a message"
                className={`w-full bg-[#f1f4fd] rounded-md p-3 outline-none h-[184px]`}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-8">
          <label className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2 w-5 h-5 rounded-xl cursor-pointer"
            />
            <span>
              I agree to the{" "}
              <a href="" className="underline font-semibold">
                Terms and Conditions
              </a>
            </span>
          </label>
          {errors.agree && (
            <p className="text-red-500 text-sm">{errors.agree}</p>
          )}
        </div>
        <ToastContainer />
        <div className="">
          <button
            type="submit"
            disabled={hasErrors}
            className={`w-full lg:w-auto px-20 py-3 md:mt-3 font-bold tracking-wider overflow-hidden text-white bg-red-400 rounded cursor-pointer ${
              hasErrors ? "opacity-50 cursor-not-allowed" : "hover:bg-red-500 "
            } delay-100 duration-500 ease-in-out`}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
