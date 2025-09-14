import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-10 py-2">
        {/* Social Media Section */}
        <div className="flex justify-center space-x-6">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex space-x-6"
          >
            <a
              href="https://www.facebook.com/mokaddes.ali.56232938/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mokaddes-ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a
              href="https://github.com/Mokaddes-Ali"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-900 transition duration-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="mailto:mokaddes.ru2000@gmail.com?subject=Hello Mokaddes&body=I wanted to contact you regarding..."
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-300"
            >
              <FaEnvelope size={22} />
            </a>
          </motion.div>
        </div>

        {/* Links Section */}
          <div className="flex justify-center space-x-6">
            <a href="#home" className="text-lg hover:text-orange-500 transition duration-300">Home</a>
            <a href="#about" className="text-lg hover:text-orange-500 transition duration-300">About</a>
            <a href="#services" className="text-lg hover:text-orange-500 transition duration-300">Services</a>
            <a href="#portfolio" className="text-lg hover:text-orange-500 transition duration-300">Portfolio</a>
            <a href="#testimonial" className="text-lg hover:text-orange-500 transition duration-300">Testimonial</a>
            <a href="#contact" className="text-lg hover:text-orange-500 transition duration-300">Contact</a>
          </div>

        {/* Copyright Section */}
        <div className="text-lg text-center lg:text-right">
          <p>© 2025 Mokaddes Ali.Rights Reserved.</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;

