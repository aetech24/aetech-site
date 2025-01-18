import React, { useState } from 'react'
import Vision from '../assets/project.png'
import { team } from '../constants';
import TeamMember from '../components/TeamMember';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="pt-4 lg:pt-16">
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl text-medium'>About Us</h1>
            <p className="text-center px-4 lg:px-44">We offer and solve problems across various fields of tech. Find below some of our services and advanced tech and improve the efficiency of work done.</p>
        </div>
        <div className='grid grid-cols-1 my-10 items-center lg:grid-cols-2 gap-8 lg:gap-16 py-6 lg:py-16 px-4 lg:px-24 w-full bg-purple bg-opacity-20'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl font-semibold'>Our Vision</h1>
                <p>Our vision is to create a world of understanding technology, build businesses with modern and advanced tech, and improve the efficiency of work done.</p>
            </div>
            <img src={Vision} alt="" className='w-[500px] h-[330px]'/>
        </div>
        <div className='grid grid-cols-1 my-10 items-center lg:grid-cols-2 gap-8 lg:gap-16 py-6 lg:py-16 px-4 lg:px-24 w-full'>
            <img src={Vision} alt="" className='w-[500px] h-[330px]'/>
            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl font-semibold'>Our Mission</h1>
                <p>Our aim is to revolutionize business technology, foster innovation, collaboration and growth and to be the forefront of technological advancements, providing cutting edge solutions and services to clients.</p>
            </div>
        </div>
        <div className="bg-purple px-4 lg:px-24 py-16">
            <div className="flex flex-col items-center gap-3 py-5 text-white">
                <h1 className="text-3xl lg:text-4xl">Meet Our Team</h1>
                <p className="lg:px-72 max-md:text-sm text-center">To create a world of understanding technology, build businesses with modern and advanced tech and improve the efficiency of work done.</p>
            </div>

            {/* CEO Section */}
            <div className="flex justify-center mb-4">
                <div 
                    className="flex flex-col items-center gap-3 bg-white rounded-2xl py-12 px-24 lg:px-16 cursor-pointer hover:shadow-lg transition-all hover:scale-105 duration-300 ease-linear"
                    onClick={() => handleOpenModal(team[0])}
                >
                    <img src={team[0].image} alt="" className="w-[250px] h-[300px] rounded-full object-cover"/>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-center">{team[0].name}</h1>
                        <p className="text-lg font-medium text-center text-purple">{team[0].role}</p>
                    </div>
                </div>
            </div>

            {/* Other Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {team.slice(1).map((item, id) => {
                    return(
                        <div 
                            key={id} 
                            className="flex flex-col items-center gap-3 bg-white rounded-2xl py-12 px-2 cursor-pointer hover:shadow-lg transition-all hover:scale-105 duration-300 ease-linear"
                            onClick={() => handleOpenModal(item)}
                        >
                            <img src={item.image} alt="" className="rounded-full w-[250px] h-[300px]"/>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-xl font-semibold text-center">{item.name}</h1>
                                <p className="text-sm font-medium text-center text-purple">{item.role}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        {selectedMember && (
          <TeamMember
            member={selectedMember} 
            onClose={handleCloseModal}
          />
        )}
        <ScrollToTop />
    </div>
  )
}

export default About