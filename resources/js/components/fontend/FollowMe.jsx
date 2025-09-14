import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const FollowMe = () => {
  return (
    <div className="fixed right-2 top-1/2 transform -translate-y-1/2 z-50 flex items-center">
      {/* FOLLOW ME Text Outside */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex flex-col items-center mr-2"
      >
      </motion.div>

      {/* Social Media Card */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center space-y-2 bg-lime-100 shadow-lg p-2 rounded-lg"
      >
        <h3 className="text-sm text-gray-800">Follow</h3>
        <div className="flex flex-col space-y-2">
          <a href="https://www.facebook.com/mokaddes.ali.56232938/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700">
            <FaFacebookF size={15} />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600">
            <FaWhatsapp size={15} />
          </a>
          <a href="https://www.linkedin.com/in/mokaddes-ali/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600">
            <FaLinkedinIn size={15} />
          </a>
          <a href="https://github.com/Mokaddes-Ali" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-900">
            <FaGithub size={15} />
          </a>
          {/* Email Button */}
          <a
            href="mailto:mokaddes.ru2000@gmail.com?subject=Hello Mokaddes&body=I wanted to contact you regarding..."
            className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
          >
            <FaEnvelope size={15} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default FollowMe;
