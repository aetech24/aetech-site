import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-2xl flex flex-col gap-2 border cursor-pointer hover:shadow-lg duration-300 ease-linear">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // navigation
        loop={true}
        className="w-full h-[250px]"
      >
        {project.images ? (
          project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                src={image} 
                alt={`${project.title} image ${index + 1}`} 
                className='w-full h-[250px] object-cover rounded-t-2xl' 
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <img 
              src={project.image} 
              alt={project.title} 
              className='w-full h-[250px] object-cover rounded-t-2xl' 
            />
          </SwiperSlide>
        )}
      </Swiper>
      <div className='px-4 py-1 flex flex-col gap-2'>
        <h1 className='text-xl lg:text-2xl font-medium'>{project.title}</h1>
        <p className='text-sm'>{project.description}</p>
        {/* <button className='w-fit hover:underline hover:text-purple duration-300 ease-linear max-md:text-sm'>
          Read more 
        </button> */}
      </div>
    </div>
  );
};

export default ProjectCard;
