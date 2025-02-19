import { motion } from "framer-motion";

export default function ConferenceTable({ title, description, conferences, image, headers }) {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div  
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-3/4"
        >
          <img src={image} alt="Conference" className="w-60 rounded-lg shadow-lg" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-700"
        >
          {description}
        </motion.p>
      </div>
      <div className="overflow-x-auto mt-10">
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full border border-gray-300 shadow-lg table-auto min-w-max"
        >
         <thead>
            <tr className="bg-gray-800 text-white text-sm md:text-base">
              {headers.map((header, index) => (
                <th key={index} className="p-3">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {conferences.map((conf, index) => (
              <motion.tr
                key={index}
                whileHover={{ scale: 1.02 }}
                className="border-b border-gray-300 bg-[#B48F60] text-gray-200 hover:bg-gray-200 hover:text-gray-900 transition text-sm md:text-base"
              >
                <td className="p-3 text-center">{conf.sr}</td>
                <td className="p-3 text-center">{conf.place}</td>
                <td className="p-3 text-center">{conf.date}</td>
                <td className="p-3 text-center">{conf.inaugurated}</td>
                <td className="p-3 text-center">{conf.president}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
}