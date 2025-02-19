import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { motion } from "framer-motion";
import SliderHeader from '../components/SliderHeader';

const Contact = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  
  const Section = ({ heading, content }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={sectionVariants}
      viewport={{ once: true }}
      className="mb-12 bg-gray-100 p-6 rounded-lg shadow-lg"
    >
     
    </motion.div>
  );
  return (
    <>
    <Navbar/>
     <div className=" font-sans bg-gray-100 py-1">
      {/* Header Section */}
      {/* <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mt-10 mb-6 w-full"
                      > */}
                        <SliderHeader/>
                         {/* <div className="relative mb-12">  
                        <img
                          src="/images/CONTACT/HeaderC/contactH.jpg" // Replace with your header image URL
                          alt="Contact Header"
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
                          <h1 className="text-4xl font-semibold z-10">Contact</h1>
                        </div>
                      </div> */}
                      {/* </motion.div> */}
                      <motion.h1
                                                  initial="hidden"
                                                  whileInView="visible"
                                                  variants={sectionVariants}
                                                  viewport={{ once: true }}
                                                  className="text-4xl font-bold text-black text-center mt-12"
                                                >
                                                  Contact us
                                         </motion.h1>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">Helpline</h3>
              <p className="text-gray-600 mt-2">+91-98106-23351</p>
              <p className="text-gray-600">+91-99992-24042</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">Send Email</h3>
              <p className="text-gray-600 mt-2">aippindia01@gmail.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600 mt-2">368, Panchayat Dham, Mayur Vihar, Phase – 1</p>
              <p className="text-gray-600">New Delhi – 110091</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows="5"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-lg font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <h2 className="text-3xl font-bold text-gray-900 text-center py-6 border-b border-gray-200">
            Our Location
          </h2>
          <div className="w-full h-96">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0528966264434!2d-122.42067968468182!3d37.77851927975839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b219939e7%3A0x1f465da69d00bbf!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1638562158078!5m2!1sen!2sus"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
     <Footer/>
    </> 
  );
};

export default Contact;
