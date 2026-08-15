import React, { useRef, useState } from "react";
import Head from "../../../components/ui/Head";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const ContactForm = ({ theme }) => {
  const [formData, setFormData] = useState({
    name1: "",
    emailFrom: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
          alert("There was an issue sending your message. Please try again later.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div id="contact" className="mt-32 mb-20 flex flex-col justify-center items-center px-4">
      <Head name="Contact Me" size="text-[3.5rem]" width="md:w-[460px]" />

      <div className="w-full max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Information Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 flex flex-col gap-6 w-full"
        >
          <div className="p-6 rounded-3xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 backdrop-blur-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Let's Connect</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500/10 text-orange-500 rounded-2xl">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold font-mono uppercase">Email Me</p>
                  <a href="mailto:zeeshanahmad4414@gmail.com" className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                    zeeshanahmad4414@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 text-green-500 rounded-2xl">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold font-mono uppercase">Call / WhatsApp</p>
                  <a href="https://wa.me/qr/ZTM6KULLWXRZH1" target="_blank" rel="noreferrer" className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-green-500 transition-colors">
                    +92 340 7695029
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 font-semibold font-mono uppercase">Location</p>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Lahore, Punjab, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 w-full p-8 rounded-3xl bg-white/10 dark:bg-black/30 border border-white/20 dark:border-white/10 backdrop-blur-lg shadow-xl"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="name1"
                  value={formData.name1}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 dark:border-gray-700 bg-transparent py-3 text-base text-gray-800 dark:text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Name"
                  required
                />
                <label className="absolute left-0 top-3 text-sm text-gray-400 dark:text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-500">
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="emailFrom"
                  value={formData.emailFrom}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 dark:border-gray-700 bg-transparent py-3 text-base text-gray-800 dark:text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Email"
                  required
                />
                <label className="absolute left-0 top-3 text-sm text-gray-400 dark:text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-500">
                  Email
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="peer w-full border-b-2 border-gray-300 dark:border-gray-700 bg-transparent py-3 text-base text-gray-800 dark:text-white placeholder-transparent focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="Subject"
                required
              />
              <label className="absolute left-0 top-3 text-sm text-gray-400 dark:text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-500">
                Subject
              </label>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Message"
                className="peer w-full border-b-2 border-gray-300 dark:border-gray-700 bg-transparent py-3 text-base text-gray-800 dark:text-white placeholder-transparent focus:outline-none focus:border-orange-500 resize-none transition-colors"
                required
              />
              <label className="absolute left-0 top-3 text-sm text-gray-400 dark:text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-500">
                Message
              </label>
            </div>

            <div className="pt-2 text-right">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transition duration-300 disabled:opacity-60"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <FaPaperPlane size={14} className={isSubmitting ? "animate-pulse" : ""} />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;