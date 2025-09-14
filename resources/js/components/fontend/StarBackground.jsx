import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const StarBackground = ({ count = 2500 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let starArray = [];
      for (let i = 0; i < count; i++) {
        starArray.push({
          id: i,
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 3 + 1 + "px",
        });
      }
      setStars(starArray);
    };

    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, [count]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full opacity-75"
          style={{
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            y: [star.y, star.y - Math.random() * 20, star.y],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
