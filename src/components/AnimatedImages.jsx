import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import webDevImage from "../assets/WebDevImage.jpg";
import appDevImage from "../assets/AppDevImage.jpg";
import markettingImage from "../assets/MarketingImage.jpg";

const AnimatedImages = () => {
  const images = [
    { src: webDevImage, alt: "Web Development" },
    { src: appDevImage, alt: "App Development" },
    { src: markettingImage, alt: "Marketing" },
  ];
  const [index, setIndex] = React.useState(0);

  // Change image every 3 seconds to sync with text
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          initial={{ opacity: 0, x: 300 }} // Start from right
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 2,
            },
          }}
          exit={{
            opacity: 0,
            x: -300, // Exit to left
            transition: { duration: 0.5 },
          }}
          className="w-full h-[450px] object-contain"
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimatedImages;
