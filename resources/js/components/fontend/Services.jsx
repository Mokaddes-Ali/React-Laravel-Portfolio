import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

// Import images at the top
import webDesignImage from '../../../assets/Images/webdesign.jpg';
import responsiveImage from '../../../assets/Images/responsive.jpg';
import backendImage from '../../../assets/Images/backend.png';
import databaseImage from '../../../assets/Images/download (3).jpg';
import versionImage from '../../../assets/Images/version.png';
import apiImage from '../../../assets/Images/api.jpg';

// Mock data for services (replace with your actual data)
const allservices = [
  {
    icon: webDesignImage, // Use the imported image
    title: "Web Development",
    about: "Building responsive and user-friendly websites using modern technologies like React, Tailwind CSS, and Laravel.",
  },
  {
    icon: responsiveImage, // Use the imported image
    title: "Responsive Design",
    about: "Creating user-friendly and highly adaptable layouts for all devices using modern frameworks like Tailwind CSS and Bootstrap.",
  },
  {
    icon: backendImage, // Use the imported image
    title: "Backend Development",
    about: "Developing robust backend systems with PHP, Laravel, and MySQL.",
  },
  {
    icon: databaseImage, // Use the imported image
    title: "Database Management",
    about: "Designing and managing databases for optimal performance and scalability.",
  },
  {
    icon: versionImage, // Use the imported image
    title: "Version Control",
    about: "Using GitHub for efficient version control and collaboration.",
  },
  {
    icon: apiImage, // Use the imported image
    title: "API Integration",
    about: "Integrating third-party APIs for seamless functionality.",
  },
];

const Services = () => {
  return (
    <div className="w-full"
     style={{
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none"><circle cx="10" cy="10" r="2" fill="%23eab308"/><circle cx="30" cy="30" r="2" fill="%23eab308"/><circle cx="50" cy="50" r="2" fill="%23eab308"/><circle cx="70" cy="70" r="2" fill="%23eab308"/></svg>')`,
        backgroundRepeat: "repeat",
        backgroundSize: "50px 50px",
      }}
      >
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px] px-9"
      id="services"
    >
      {/* Section Heading */}
      <motion.h1
        variants={slideUpVariants}
        className="text-yellow-500 text-2xl"
      >
        Services Offer
      </motion.h1>
      <motion.p
        variants={slideUpVariants}
        className="text-black text-4xl uppercase font-bold text-center"
      >
        MY BEST SERVICES
      </motion.p>
      <motion.div
        variants={slideUpVariants}
        className="bg-yellow-500 w-[120px] h-[6px]"
      ></motion.div>
  
      {/* Service Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="w-full z-50 grid lg:grid-cols-3 grid-cols-1 justify-center items-stretch gap-[20px] mt-[30px]"
      >
        {allservices.map((item, index) => (
          <motion.div
            variants={zoomInVariants}
            key={index}
            className="group flex z-50 flex-col justify-start items-center gap-5 p-8 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
          >
            {/* Service Icon */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-[120px] lg:w-[300px] h-auto border-2 border-yellow-500 group-hover:bg-yellow-500 rounded-lg p-2 transition-all duration-300"
            />
            {/* Service Details */}
            <div className="flex z-50 flex-col justify-center items-center gap-3 text-center group-hover:text-yellow-500 transition-all duration-300">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="text-[16px] text-gray-600">{item.about}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
  
  );
};

export default Services;




// import { motion } from 'framer-motion';
// import { slideUpVariants, zoomInVariants } from './animation';

// const ServicesSection = () => {
//   return (
//     <div className="lg:w-[80%] w-[90%] m-auto py-[60px] text-center" id="services">
//       <motion.h2 variants={slideUpVariants} className="text-yellow-500 text-3xl font-bold mb-6">
//         Services
//       </motion.h2>
//       <motion.div variants={slideUpVariants} className="grid lg:grid-cols-3 grid-cols-1 gap-6">
//         {/* Web Development */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <motion.h3 variants={zoomInVariants} className="text-yellow-500 text-xl font-semibold mb-4">
//             Web Development
//           </motion.h3>
//           <p className="text-white text-lg">
//             Build responsive, scalable, and user-friendly websites using modern technologies like React, Laravel, and Tailwind CSS.
//           </p>
//         </div>

//         {/* API Development */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <motion.h3 variants={zoomInVariants} className="text-yellow-500 text-xl font-semibold mb-4">
//             API Development
//           </motion.h3>
//           <p className="text-white text-lg">
//             Develop secure and efficient RESTful APIs for seamless communication between front-end and back-end systems.
//           </p>
//         </div>

//         {/* Database Management */}
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <motion.h3 variants={zoomInVariants} className="text-yellow-500 text-xl font-semibold mb-4">
//             Database Management
//           </motion.h3>
//           <p className="text-white text-lg">
//             Design, implement, and manage databases using MySQL, MongoDB, and Firebase for optimal performance and scalability.
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ServicesSection;