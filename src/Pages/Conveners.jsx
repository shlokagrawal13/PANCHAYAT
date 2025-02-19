import React from "react";
import { motion } from "framer-motion";
import SliderHeader from "../components/SliderHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


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
    <h2 className="text-2xl font-semibold mb-4 pb-2 text-black" >{heading}</h2>
    <p className="text-gray-700 text-lg" > {content}</p>
  </motion.div>
);

export default function Conveners() {
  const sections = [
    {
      heading: "Conveners: At A Glance",
      content:
        "All India Panchayat Parishad (AIPP) is the apex body of the Panchayati Raj Institutions in the country. AIPP was set up in 1958 at a conference in Deoghar, Jasidih, Bihar. It was launched in the presence of Late Shri Balwant Rai Mehta, Loknayak Shri Jay Prakash Narayan, and Shri Guljari Lal Nanda amongst others. Shri Balwant Rai Mehta was elected as the first President. The central office of the organization was moved to Delhi in 1961 where it established its headquarters namely, Panchayat Dham in Mayur Vihar Phase-1 in East Delhi on a plot measuring 7.5 acres in area. Loknayak Shri Jay Prakash Narayan took over the reins of the organization in 1961 and continued as the president till 1968. He was followed by late Shri Surendra Kumar Dey.",
    },
    {
      heading: "Gandhi Ji’s Concept of Gram Swaraj",
      content:
        "The AIPP aims at achieving Gandhi ji’s dream of 'Gram Swaraj'. Each village shall produce food, grain, and cotton for cloths. Each village should have sufficient land on which its cattle may graze and the children and the young may play to entertain themselves. Each village shall be democratic and prosperous. None will be illiterate and unemployed. There shall be nutritious food for all, every house for living, and enough cotton cloth to cover bodies for all. Each person shall be aware of cleanliness and good health. Each village shall have its own theatre and assembly hall. Pure drinking water shall be provided. Caste discrimination and untouchability shall have no place. Gaps between the rich and the poor shall be bridged.",
    },
    {
      heading: "Organisation",
      content:
        "There are about 908,804,812 rural habitations in the country. There are an estimated 262,800 gram panchayats in India today. The All India Panchayat Parishad operates through its Working Committee which has a strength of 31 elected representatives. The General Body elects members to the council which operates as the advisory body, generally consisting of members of Zilla Parishads, Blocks, and Panchayat Samitis. In addition, AIPP has 29 state affiliates/organizations that extend the system to the grassroots level.",
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      <SliderHeader/>
      <div className="container mx-auto px-4 py-20">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
          className="text-4xl font-bold text-black text-center mb-12"
        >
          Conveners
        </motion.h1>
        {sections.map((section, index) => (
          <Section key={index} heading={section.heading} content={section.content} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}