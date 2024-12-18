import React, { useRef, useState } from 'react';
import Head from '../Head';
import Bg from '../../assets/back.jpg';
import emailjs from 'emailjs-com';

const ContactForm = ({ theme }) => {
  const [formData, setFormData] = useState({
    name1: '',
    emailFrom: '',
    subject: '',
    message: '',
  });
  const form = useRef();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_xfhn0ub', 'template_ymz242y', form.current, 'LN0xcbti0KzM2g5eA')
      .then((result) => {
        console.log(result.text);
        alert('Thank you for your message! Your email has been sent.');
        setFormData({ name1: '', emailFrom: '', subject: '', message: '' });
      }, (error) => {
        console.log('EmailJS Error:', error.text);
        alert('There was an issue sending your message. Please try again later.');
      });
  };

  return (
    <div id="contact" >
      <Head name="Contact Me" size="text-[4rem]"  width="md:w-[460px]" />
      <div className="relative  bg-cover bg-center">
        <div className=" w-80 md:w-[30rem] mx-auto p-6 sm:p-8 bg-gray-700 rounded-lg border border-gray-300 shadow-4xl mt-12 mb-8 backdrop-blur-lg"  style={{ background: `url(${Bg})` }}>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4" >
            <div className="mb-4">
              <label className={`block text-sky-100 font-bold`}>Name:</label>
              <input
                type="text"
                name="name1"
                value={formData.name1}
                onChange={handleChange}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className={`block text-sky-100 font-bold`}>Email</label>
              <input
                type="email"
                name="emailFrom"
                value={formData.emailFrom}
                onChange={handleChange}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className={`block text-sky-100 font-bold`}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                placeholder="Enter subject"
                required
              />
            </div>
            <div className="mb-4">
              <label className={`block text-sky-100 font-bold`}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-110 w-full sm:w-auto"
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
