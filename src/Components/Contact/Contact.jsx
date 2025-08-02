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
    <div id="contact" className="mt-32 mb-20 flex flex-col justify-center items-center">
      <Head name="Contact Me" size="text-[3.5rem]" width="md:w-[460px]" />

      <div className="w-full max-w-[90%] sm:max-w-xl md:max-w-2xl bg-white/10 dark:bg-white/5 backdrop-blur-md border-4 border-orange-300 dark:border-orange-400 rounded-2xl shadow-xl p-8 sm:p-10 mt-12">
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Name', name: 'name1', type: 'text' },
            { label: 'Email', name: 'emailFrom', type: 'email' },
            { label: 'Subject', name: 'subject', type: 'text' },
          ].map((field) => (
            <div className="relative" key={field.name}>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className={`peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent py-3 text-base text-gray-500 dark:text-white placeholder-transparent focus:outline-none focus:border-yellow-500 ${ formData.name1 ? 'pt-6' : '' }`}
                placeholder={field.label}
                required
              />
              <label
                className="absolute left-0 top-3 text-sm text-gray-500 dark:text-gray-300 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-yellow-500"
              >
                {field.label}
              </label>
            </div>
          ))}

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Message"
              className={`peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent py-3 text-base text-gray-500 dark:text-white placeholder-transparent focus:outline-none focus:border-yellow-500 resize-none ${formData.message ? 'pt-6' : ''} `}
              required
            />
            <label
              className="absolute left-0 top-3 text-sm text-gray-400 dark:text-gray-300 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-yellow-500"
            >
              Message
            </label>
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;