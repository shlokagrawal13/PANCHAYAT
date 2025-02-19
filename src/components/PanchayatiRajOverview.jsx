import React from 'react';
import CardRoom from './CardRoom';

function PanchayatiRajOverview() {
  return (
    <div data-scroll data-scroll-speed="" className="w-full py-10 bg-[#1F2937] mt-0 sm:mt-1 rounded-tl-3xl text-white relative ">
      {/* Header Section */}
      <div className="py-10 px-5 md:px-20">
        <h1 className="text-3xl md:text-6xl leading-tight">
          True democracy means reaching the grassroots, and the Panchayati Raj system helps people easily connect with leaders and administrators to solve local issues.
        </h1>
      </div>

      {/* Two-Column Layout */}
      <div className="flex flex-col md:flex-row w-full py-10 px-5 md:px-20 border-t-2 border-b-2">
        <div className="md:w-1/2 mb-5 md:mb-0">
          <h1 className="text-xl md:text-2xl font-semibold">
            How has the All India Panchayat Parishad (AIPP)
          </h1>
        </div>
        <div className="md:w-1/2">
          <p className="text-sm md:text-base leading-relaxed">
            All India Panchayat Parishad (AIPP) is a Govt. recognized autonomous apex Federation of Panchayati Raj Institutions, addressing the issues of rural India and aiming to strengthen the Panchayati Raj system, a decentralized form of self-governance at village level to solve local socio-economic problems effectively related to agriculture, health, education, natural resource management, and unemployment. AIPP continuously strives for constitutional rights to the Panchayats (self-governance system) and creation of a separate Ministry of Panchayati Raj as per the dream of Mahatma Gandhi since 1958 within and outside the Parliament under the leadership of prominent personalities like Shri Balwant Rai Mehta, Lok-Nayak Shri Jai Prakash Narayan, Shri Lal Bahadur Shastri (former Prime Minister), Shri S.K. Dey (former Community Development Minister Govt. of India) and achieved at last as 73rd Amendment Act come into force in 1992 and separate Ministry of Panchayati Raj created in 2003. AIPP was set up in the year 1958 at a conference held at Giridih in Bihar state. It was launched in the presence of Shri Balwant Rai Mehta, Bharat Ratna Lok Nayak Jai Prakash Narayan and Shri Guljari Lal Nanda amongst others. Shri Balwant Rai Mehta was elected as the first President. The central office of the organization was moved to Delhi in 1961 where its headquarter was established at Khasra no. 368, Panchayat Dham, Mayur Vihar Phase-1, Delhi-110091 spreading on an area of 7.5 acres.
          </p>
        </div>
      </div>

      {/* CardRoom Component */}
      <CardRoom />
    </div>
  );
}

export default PanchayatiRajOverview;
