import React, { useRef, useState } from "react";
import Head from "../Head";
import Bg from "../../assets/back.jpg";
import emailjs from "emailjs-com";

const ContactForm = ({ theme }) => {
  const [formData, setFormData] = useState({
    name1: "",
    emailFrom: "",
    subject: "",
    message: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xfhn0ub",
        "template_ymz242y",
        form.current,
        "LN0xcbti0KzM2g5eA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for your message! Your email has been sent.");
          setFormData({ name1: "", emailFrom: "", subject: "", message: "" });
        },
        (error) => {
          console.log("EmailJS Error:", error.text);
          alert(
            "There was an issue sending your message. Please try again later."
          );
        }
      );
  };

  return (
    <div id="contact">
      <Head name="Contact Me" size="text-[4rem]" width="md:w-[460px]" />
      <div className="relative  bg-cover bg-center">
        <div
          className=" w-80 md:w-[30rem] mx-auto p-6 sm:p-8 bg-gray-500 rounded-xl border-8  border-orange-300 shadow-4xl mt-12 mb-8 backdrop-blur-lg"
          
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div className="relative z-0 mb-4 w-full group">
              
              <input
                type="text"
                name="name1"
                value={formData.name1}
                onChange={handleChange}
                className={`block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer `}
                placeholder=""
                required
              />
              <label className={`absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-gray-300
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold`}>Name:</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              
              <input
                type="email"
                name="emailFrom"
                value={formData.emailFrom}
                onChange={handleChange}
                className={`block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer `}
                placeholder=""
                required
              />
              <label className={`absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-gray-300
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold`}>Email</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer "
                placeholder=""
                required
              />
              <label
                className="absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-gray-300
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold"
              >
                Subject
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`block py-2  px-0 w-full text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none text-white focus:outline-none focus:ring-0 focus:border-yellow-500 peer `}
                placeholder=""
                rows="5"
                required
              ></textarea>
              <label className={`absolute glow-label duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-gray-300
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:glow-label peer-focus:text-yellow-500  peer-focus:font-semibold`}>Message</label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-transform duration-800 transform hover:scale-110 w-full sm:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
