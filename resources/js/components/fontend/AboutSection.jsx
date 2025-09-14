import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import aboutImage from '../../../assets/Images/600-removebg-preview.png';
// import Skill from './SkillsSection';

const TimelineItem = ({ time, title, description, isEnd }) => (
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </div>
    <div className={`timeline-${isEnd ? 'end' : 'start'} mb-10 md:text-end`}>
      <time className="font-mono italic">{time}</time>
      <div className="text-lg font-black">{title}</div>
      {description}
    </div>
    {!isEnd && <hr />}
  </li>
);

const AboutSection = () => {

  const timelineData = [
    {
      time: "2023-2024",
      title: "Software Development Course",
      description:
        "Enrolled in a 9-month software development course at Themezone Academy. This course is helping me build a strong foundation in software development.",
      isEnd: true,
    },
    {
      time: "2024-Present",
      title: "Coding Interview & Problem Solving Course",
      description:
        "Currently enrolled in a coding interview and problem-solving course at Ostad. This course is enhancing my problem-solving skills and preparing me for technical interviews.",
    },
    {
      time: "2024-Present",
      title: "GitHub, VS Code, HTML & CSS Course",
      description:
        "Currently learning GitHub, VS Code shortcuts, and HTML & CSS through Udemy. These skills are essential for web development and version control.",
      isEnd: true,
    },
    {
      time: "2019-2023",
      title: "Bachelor's Degree",
      description:
        "Graduated from Rajshahi University with a CGPA of 3.16 out of 4.00. During this time, I completed a course in C++ during my second year and used R Language for university projects. I also gained proficiency in SPSS for data analysis.",
    },
    {
      time: "2024-Present",
      title: "Master's Degree",
      description:
        "Currently pursuing a Master's degree at Rajshahi University. Alongside my studies, I am continuously improving my technical skills.",
    },
    {
      time: "2023-2024",
      title: "Microsoft Office Course",
      description:
        "Completed a 4-month course on Microsoft Office from Digital Geek. This course enhanced my skills in using Microsoft Office tools for various tasks and projects.",
      isEnd: true,
    },
  ];

  return (
    <div className="dark:z-50 m-auto py-16 flex flex-col items-center gap-12 dark:bg-darkBackground dark:text-darkText" id="about">
      {/* Main Heading */}
      <motion.h1 variants={slideUpVariants} className="text-yellow-500 text-3xl font-bold text-center">
        About Me
      </motion.h1>
      <motion.h2 
        variants={slideUpVariants} 
        className="text-black dark:text-white text-4xl uppercase font-bold -mt-5 text-center"
      >
        Full Stack Web Developer
      </motion.h2>
      <motion.div variants={slideUpVariants} className="bg-yellow-500 -mt-6 w-24 h-1" />

      <div className="flex lg:flex-row flex-col gap-10 items-start w-full">
        {/* Left Section: Education & Certification (50%) */}
        <motion.div initial="hidden" whileInView="visible" variants={slideUpVariants} className="lg:w-1/2 w-full">
          <h2 className="text-yellow-500 text-3xl font-bold mb-6">Education & Certification</h2>
          {/* Timeline */}
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </ul>
        </motion.div>

        {/* Right Section: Image & Skills (50%) */}
        <div className="lg:w-1/2 w-full flex flex-col items-center gap-6">
          {/* Image */}
          <motion.div initial="hidden" whileInView="visible" variants={zoomInVariants} className="z-50">
            <img src={aboutImage} alt="Mokaddes Ali" className="rounded-full shadow-lg w-[250px] h-[250px] object-cover" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" variants={slideUpVariants} className="w-full">
            {/* <Skill /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
