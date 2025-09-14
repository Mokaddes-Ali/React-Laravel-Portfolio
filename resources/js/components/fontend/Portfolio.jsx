import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import portfolio1 from '../../../assets/Images/project1.jpg';
import portfolio2 from '../../../assets/Images/project2.jpg';
import portfolio3 from '../../../assets/Images/project3.jpg';
import portfolio4 from '../../../assets/Images/project4.jpg';
import portfolio5 from '../../../assets/Images/project5.jpg';
import portfolio6 from '../../../assets/Images/project6.jpg';
import portfolio7 from '../../../assets/Images/project7.jpg';
import portfolio8 from '../../../assets/Images/project8.jpg';

const projects = [
  {
    image: portfolio1,
    name: 'Full-Stack Construction Project',
    github: 'https://github.com/Mokaddes-Ali/Full-Stack-Construction-Project',
    live: 'Coming Soon',
  },
  {
    image: portfolio2,
    name: 'Project 2',
    github: 'https://github.com/project2',
    live: 'https://liveproject2.com',
  },
  {
    image: portfolio3,
    name: 'Project 3',
    github: 'https://github.com/project3',
    live: 'https://liveproject3.com',
  },
  {
    image: portfolio4,
    name: 'Project 4',
    github: 'https://github.com/project4',
    live: 'https://liveproject4.com',
  },
  {
    image: portfolio5,
    name: 'Project 5',
    github: 'https://github.com/project5',
    live: 'https://liveproject5.com',
  },
  {
    image: portfolio6,
    name: 'Project 6',
    github: 'https://github.com/project6',
    live: 'https://liveproject6.com',
  },
  {
    image: portfolio7,
    name: 'Project 7',
    github: 'https://github.com/project7',
    live: 'https://liveproject7.com',
  },
  {
    image: portfolio8,
    name: 'Project 8',
    github: 'https://github.com/project8',
    live: 'https://liveproject8.com',
  },
];


const Portfolio = () => {
  const handleLiveLink = (liveLink, projectName) => {
    if (liveLink === 'Coming Soon') {
      alert(`Live link for ${projectName} is coming soon! You can visit the GitHub link instead.`);
    } else {
      window.open(liveLink, '_blank');
    }
  };

  return (
    <div className="w-full" id="portfolio">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[100%] w-[100%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        {/* Section Header */}
        <motion.h1 variants={slideUpVariants} className="text-yellow-500 text-2xl uppercase font-semibold">
          TESTIMONIAL
        </motion.h1>


        <motion.p
          variants={slideUpVariants}
          className="text-black text-4xl uppercase font-bold text-center"
        >
          My Working <span className="text-yellow-500">PROJECTS</span>
          <br /> Working Now
        </motion.p>

        <motion.div variants={slideUpVariants} className="bg-yellow-500 w-[120px] h-[6px] mb-8"></motion.div>

        {/* Portfolio Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full m-auto grid lg:grid-cols-3 grid-cols-1 gap-6"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg transition-all duration-300"
            >
              <img
                src={project.image}
                alt={`project image ${index + 1}`}
                className="w-full h-[250px] p-1 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center space-y-2">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white text-xl "
                  >
                    GitHub
                  </a>
                  <a
                    onClick={() => handleLiveLink(project.live, project.name)}
                    className="hover:text-blue-500 text-xl"
                  >
                    {project.live === 'Coming Soon' ? 'Visit(Coming Soon)' : 'Visit'}
                  </a>
                </div>
                <button
                  onClick={() => alert(`See details of ${project.name}`)}
                  className="mt-2 bg-orange-500 px-4 py-2 rounded text-white hover:bg-orange-600"
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;