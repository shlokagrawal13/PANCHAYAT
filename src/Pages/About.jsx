import React from 'react';
import ConferenceTable from "../components/ConferenceTable";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
const conferenceHeaders = ["Sr. No.", "Place", "Date", "Inaugurated", "President/Headership"];
const aboutConferences = [
  { sr: 1, place: "Deoghar (Bihar)", date: "12.04.1958", inaugurated: "Sh. Guljari Lal Nanda (Planning Minister, Govt. of India)", president: "Balvant Rai Mehta" },
  { sr: 2, place: "Ujjain (M.P)", date: "13.11.1959", inaugurated: "Sh. Jawahar Lal Nehru (Prime Minister of India)", president: "Balvant Rai Mehta" },
  { sr: 3, place: "Jaipur (Rajasthan)", date: "13.05.1961", inaugurated: "Sh. Mohal Lal Sukhadia (Chief Minister of Rajasthan)", president: "J. P. Narayan" },
  { sr: 4, place: "Bangalore (Karnataka)", date: "18.07.1964", inaugurated: "Sh. Balwant Rai Mehta (Chief Minister of Gujrat)", president: "J. P. Narayan" },
  { sr: 5, place: "Bardoli (Gujarat)", date: "24.11.1968", inaugurated: "Sh. Morarji Desai (Deputy Prime Minister of India)", president: "J. P. Narayan" },
  { sr: 6, place: "New Delhi", date: "24.03.1973", inaugurated: "Sh. VV. Giri (President of India)", president: "Dr. S. K. Dey" },
  { sr: 7, place: "Bhuvneswar (Orissa)", date: "16.10.1973", inaugurated: "Smt. Indira Gandhi (Prime Minister of India)", president: "Dr. L. S. Tyagi" },
  { sr: 8, place: "Patna (Bihar)", date: "08.04.1978", inaugurated: "Sh. Dhanik Lal Mandal (Home Minister, Govt. of India)	", president: "Dr. L. S. Tyagi" },
  { sr: 9, place: "New Delhi", date: "19.12.1978", inaugurated: "Sh. Morarji Desai (Prime Minister of India)", president: "Dr. L. S. Tyagi" },
  { sr: 10, place: "Kurukshetra (Haryana)", date: "12.07.1980", inaugurated: "Rao Virendra Singh(Agriculture Minister, Govt. of India)", president: "Dr. L. S. Tyagi" },
  { sr: 11, place: "Nagpur (Maharashtra)", date: "19.09.1981", inaugurated: "Sh. Ratubhai Adani(Gandhian, Sarvoday Leader)", president: "Dr. L. S. Tyagin" },
  { sr: 12, place: "Gandhinagar (Gujarat)", date: "25.05.1983", inaugurated: "Smt. Indira Gandhi (Prime Minister of India)", president: "Dr. L. S. Tyagi" },
  { sr: 13, place: "New Delhi", date: "22.09.1986", inaugurated: "Sh. Rajiv Gandhi (Prime Minister of India)", president: "Dr. L. S. Tyagi" },
  { sr: 14, place: "New Delhi", date: "11.06.1990", inaugurated: "Dr. Shankar Dayal Sharma (Dy. President of India)	", president: "Dr. L. S. Tyagi" },
  { sr: 15, place: "New Delhi", date: "08.11.1995", inaugurated: "Dr. Jagannath Mishra (Minister of Rural Development & Employment, G.0.1)", president: "Sh. S. Chaudhari" },
  { sr: 16, place: "New Delhi", date: "22.11.2006	", inaugurated: "Dr. Raghuvansh Prasad Singh(Minister of Rural Development & Employment, 6.0.1)	", president: "Sh. S. K. Sahay" },
  { sr: 17, place: "New Delhi", date: "08.10.2008", inaugurated: "	Somnath Chatargee (Speaker of Lok Sabha)", president: "Sh. S. K. Sahay" },
  { sr: 18, place: "New Delhi", date: "19.03.2023", inaugurated: "Sh. R.K Sinha (Eminent Journalist & Former MP (Rajya Sabha)", president: "Sh. S. K. Sahay" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ConferenceTable
        title="NATIONAL CONFERENCES OF AIPP"
        description="The greatest achievement of the All India Panchayat Parishad is the historical 73 Amendment in the Constitution of India which has placed Panchayati Raj Institutions as integral part of Indian Polity. The three tier Panchayati Raj Institutions which has been envisaged by late Balwant Rai Mehta and Late Loknayak Jai Prakash Narayan. The historical 73 amendment have become now five tier polity of our country and village Panchayat, Taluka Panchayat (Block Samiti) and Zilla Parishads have become people’s government at their respective levels for all-round development of rural India. This 73 historical amendment in the Constitution of India is a unique feature of the decentralized system of largest people democracy in the world."
        headers={conferenceHeaders}
        conferences={aboutConferences}
        image="/images/ABOUT/AboutH.jpg"
      />
      <Footer />
    </div>
  );
}