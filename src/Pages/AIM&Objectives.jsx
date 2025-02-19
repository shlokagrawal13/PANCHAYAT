import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SliderHeader from "../components/SliderHeader";

const objectives = [
  "To bring together on a common platform the Panchayati Raj Institutions in the country (at the village, block and district levels) so that they may :",
  "Draw strength from mutual association and become effective instruments of democracy and national development;",
  "Take counsel together as to how tackle common problems and advance towards common goals;",
  "Profit from one another’s experience and coordinate with each other.",
  "Be able to develop a national outlook rather than become parochial by remaining isolated from one another.",
  "To create awareness and educated opinion in regard to Panchayati Raj so that there is greater public participation in the process of self-government.",
  "To promote the spirit of community, self-help, mutual aid, and socio-economic development among village folk.",
  "To inculcate in the Panchayati Raj personnel a proper sense of responsibility towards the community as a whole, and particularly towards its economically and socially weaker sections.",
  "To undertake training of the related personnel and, to that end,",
  "To cooperate with the Central and State Governments, educational institutions, and voluntary organizations to achieve the above objective.",
  "To carry on study and research in subjects related to Panchayati Raj in particular and rural life and problems in general.",
  "To conduct surveys, evaluation projects, field investigations, etc.",
  "To Prepare and publish books, pamphlets, periodicals, papers etc.",
  "To cooperate with the Central and State Governments, educational institutions and voluntary organizations for furthering one or more or all of the above objects, and",
  "To do everything else that might be necessary in order to further and achieve these objects of AIPP.",
  "To coordinate the activities of State Panchayat Parishads."
];

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


export default function AimObjectives() {
  return (
    <>
      <Navbar />
      <div className="px-0 py-1 min-h-screen bg-gray-100">
      <SliderHeader />
        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10 mb-6 w-full"
        >
          <div className="relative mb-12">
          
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
              <h1 className="text-4xl font-semibold z-10">AIM & Objective</h1>
            </div>
          </div>
        </motion.div> */}
        

        <div className="container mx-auto px-4 py-20">
        <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionVariants}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-black text-center mb-12"
                  >
                    Aim & Objective
           </motion.h1>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 bg-[#B48F60] p-6 rounded-lg shadow-lg"
          >
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4 ">
              {objectives.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                    // border: "2px solid #4CAF50",
                    backgroundColor: "#f0fdf4"
                  }}
                  className="p-2 rounded-md border-b-2" 
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}