import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { planning } from "../../../Data/export";

const Working = () => {
  return (
    <div className="w-full bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
        id="services"
      >
        <motion.h1 variants={slideUpVariants} className="text-yellow-500 text-2xl">
          STEP BY STEP
        </motion.h1>
        <motion.p
          variants={slideUpVariants}
          className="text-black text-4xl uppercase font-bold text-center"
        >
          WHAT I DO ?
        </motion.p>
        <motion.div variants={slideUpVariants} className="bg-yellow-500 w-[120px] h-[6px]"></motion.div>

        {/* Card Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full grid lg:grid-cols-3 z-50 md:grid-cols-2 grid-cols-1 gap-[30px] mt-[30px]"
        >
          {planning.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-center items-center gap-4 border-2 border-yellow-500 
              rounded-xl py-16 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl 
              hover:bg-yellow-500 hover:text-white text-center h-[300px] w-full"
            >
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-yellow-500 
                rounded-full transition-all duration-300 group-hover:bg-black">
                <item.icon className="size-[85px] rounded-full p-5 text-black transition-all duration-300 group-hover:text-white" />
              </div>
              <h1 className="text-2xl font-bold uppercase transition-all duration-300 group-hover:text-white">
                {item.title}
              </h1>
              <p className="text-[18px] text-gray-600 transition-all duration-300 group-hover:text-white">
                {item.about}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working;
