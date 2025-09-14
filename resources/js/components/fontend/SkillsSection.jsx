import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaDatabase, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiVisualstudiocode, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-600" />, progress: 95, color: "bg-orange-500" },
      { name: "Tailwind CSS/Boostrap", icon: <SiTailwindcss className="text-blue-600" />, progress: 80, color: "bg-blue-500" },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, progress: 65, color: "bg-yellow-400" },
      { name: "React", icon: <FaReact className="text-blue-400" />, progress: 80, color: "bg-cyan-400" },
    
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: <FaGithub className="text-gray-700" />, progress: 90, color: "bg-gray-400" },
      { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" />, progress: 95, color: "bg-blue-600" },
      { name: "Postman", icon: <SiPostman className="text-orange-500" />, progress: 85, color: "bg-orange-400" },
      { name: "Figma", icon: <FaFigma className="text-purple-600" />, progress: 70, color: "bg-purple-400" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", icon: <FaPhp className="text-purple-700" />, progress: 60, color: "bg-purple-500" },
      { name: "Laravel", icon: <FaLaravel className="text-red-600" />, progress: 65, color: "bg-red-500" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500" />, progress: 70, color: "bg-blue-400" },
      { name: "SQL", icon: <FaDatabase className="text-gray-500" />, progress: 75, color: "bg-gray-500" },
    ],
  },
];

const SkillCategory = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <h3 className="text-pink-400 underline underline-offset-1 text-md lg:text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-4">
      {skills.map((skill, index) => (
        <li key={index} className="text-white">
          <div className="flex items-center space-x-3 mb-2">
            <div className="text-2xl">{skill.icon}</div>
            <span className="text-md">{skill.name}</span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: `${skill.progress}%` }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className={`h-2.5 ${skill.color} rounded-full`}
            ></motion.div>
          </div>
          <p className="text-sm text-gray-300 mt-1">{skill.progress}%</p>
        </li>
      ))}
    </ul>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <div className="w-full text-center">
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        initial="hidden"
        whileInView="visible"
        className="text-yellow-500 text-3xl font-bold mb-8"
      >
        Skills & Technologies
      </motion.h2>
      <div className="grid lg:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;