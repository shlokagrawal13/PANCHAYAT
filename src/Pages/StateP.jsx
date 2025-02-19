import ConferenceTable from "../components/ConferenceTable";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const statePresidentHeaders = ["Sr. No." ,"Name"," ", " ","Tenure"]
const StatePConferences = [
  { sr: 1,place: "Sh. Balwant Rai Mehta",president: "	1958 - 1961",},
  { sr: 2,place: "Sh. Jai Prakash Narayan", president: "1961 - 1968"},
  { sr: 3,place: "Sh. Surendra Kumar Dey	",president: "1968 - 1973" },
  { sr: 4,place: "Dr. Lal Singh Tyagi	", president: "1973 - 1990" },
  { sr: 5,place: "Sh. Sahdev Chaudhary	",president: "1990 - 1998" },
  { sr: 6,place: "Sh. Jagdish Narayan Mandal", president: "1998 - 2002" },
  { sr: 7,place: "Sh. Dr. Kishore Taviyad (Working President)", president: "2002 - 2003" },
  { sr: 8,place: "Sh. Subodh Kant Sahay",  president: "2003 - 2013" },
  { sr: 9,place: "Sh. Subodh Kant Sahay", president: "2013 - 2019" },
  { sr: 10,place: "Sh. Subodh Kant Sahay",  president: "2019 -" },

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

export default function StateP() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ConferenceTable
        title="PRESIDENT OF AIPP FROM 1958 TO TILL DATE :"
        description="The greatest achievement of the All India Panchayat Parishad is the historical 73 Amendment in the Constitution of India which has placed Panchayati Raj Institutions as integral part of Indian Polity. The three tier Panchayati Raj Institutions which has been envisaged by late Balwant Rai Mehta and Late Loknayak Jai Prakash Narayan. The historical 73 amendment have become now five tier polity of our country and village Panchayat, Taluka Panchayat (Block Samiti) and Zilla Parishads have become people’s government at their respective levels for all-round development of rural India. This 73 historical amendment in the Constitution of India is a unique feature of the decentralized system of largest people democracy in the world."
        headers={statePresidentHeaders}
        conferences={StatePConferences}
        image="/images/ABOUT/AboutH.jpg"
      />
      <Footer />
    </div>
  );
}