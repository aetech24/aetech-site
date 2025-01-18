import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/node.jpeg";
import pythonIcon from "../assets/python.png";
// import javascriptIcon from "../assets/javascript.jpeg";
import typescriptIcon from "../assets/typescript.jpeg";
import mongodbIcon from "../assets/mongodb.jpeg";
import mysqlIcon from "../assets/mysql.jpeg";
import tailwindIcon from "../assets/tailwind.jpeg";
import figmaIcon from "../assets/figma.png";
import nextjsIcon from "../assets/nextjs.jpeg";
import phpIcon from "../assets/php.png";

const techStacks = [
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Python", icon: pythonIcon },
  // { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Next.js", icon: nextjsIcon },
  { name: "PHP", icon: phpIcon },
];

const TechStackSlider = () => {
  return (
    <div className="w-full py-8 px-4 lg:px-16">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // Specify the custom pagination container
          bulletActiveClass: "swiper-pagination-bullet-active bg-purple",
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="py-8"
      >
        {techStacks.map((tech, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center gap-4 p-6 border rounded-lg hover:border-purple transition-all duration-300 hover:shadow-lg">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-lg font-medium text-center">{tech.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Container */}
      <div className="custom-pagination flex justify-center mt-4"></div>
    </div>
  );
};

export default TechStackSlider;
