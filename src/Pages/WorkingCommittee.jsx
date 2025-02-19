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

export default function WorkingCommittee() {
    const sections = [
        {
          heading: "ASSETS OF AIPP:",
          content:
            "The Parishad has established a large campus spread over 7.5 acres of land in the heart of fresh rate colony known as Mayur Vihar Phase-1, Delhi. It has a permanent office building and residential house for the officers and the employees. Also, there is a guest house with sufficient facilities where the elected representatives may stay during their visits to Delhi.\n\nThe AIPP has also a rich library on the campus and is aiming at making it a special library on Panchayat Raj in India.",
        },
        {
          heading: "LEADERSHIP OF THE AIPP:",
          content:
            "At present, the AIPP is functioning under the able and dynamic leadership of Shri Subodh Kant Sahay, President of AIPP. He has injected a new life to the AIPP. His Slogan is: AIPP = struggle for achieving the rights of PRIs from the state government as enshrined in the 73rd Constitutional Amendment 1993. His today’s priority is to strengthen the AIPP and the State Panchayat Parishad. His leadership has brought continuity and stability to AIPP. He is being assisted by an executive committee consisting of 31 members.",
        },
        {
          heading: "AGENDA FOR THE FUTURE:",
          content:
            "The AIPP will make an effort to establish an information window of its own office and the offices of State Panchayat Parishad so that the people may know about programmes related to rural development. Organizations of the state and district levels have to be made more active. Regular publication of Panchayat Sandesh, the monthly journal of AIPP in English and Hindi is to be managed and the target is that each elected member PRIs receives a copy of it regularly.\n\nA seminar on Decentralization is in the pipeline. Also, the AIPP has to be made economically viable. Last but not least is the agenda for establishing a training center for the officers, elected representatives of PRIs, and NGOs interested in gaining knowledge related to Panchayati Raj in India.",
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
          Working Committee
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