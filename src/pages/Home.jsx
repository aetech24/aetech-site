import React from 'react'
import Hero from '../assets/hero.png'
import { Link } from 'react-router-dom'
import { FaCode } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import { PiDownloadSimple } from "react-icons/pi";
import { team } from '../constants';


const Home = () => {
  return (
    <div className="w-full">
        <div className="lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[80vh] flex items-center w-full bg-radial-gradient">
            {/* <img src={Hero} className="bg-cover bg-center relative w-full h-full" /> */}
            <div className="absolute w-full z-50 bg-opacity-50"></div>
            <div className="absolute w-full max-md:items-center max-md:text-center flex flex-col gap-4 lg:gap-6 md:px-16 lg:w-[60%] px-4">
                <div className="text-4xl lg:text-5xl flex flex-col lg:gap-2">
                    <p>Web Development</p>
                    <p>App Development</p>
                    <p>Marketing</p>
                </div>
                <p className="text-sm md:text-lg lg:text-xl">
                    To create a world of understanding technology, build businesses with modern and advanced tech, and improve the efficiency of work done.
                </p>
                <div className="flex items-center gap-6">
                    <div className="flex text-white lg:text-xl justify-center items-center bg-gradient-to-r from-pink to-purple rounded-3xl hover:scale-110 duration-500 ease-linear">
                        <Link to="/contact" className="py-1 lg:py-2 px-2 lg:px-4 flex items-center gap-2">
                            Contact Us
                            <BsArrowUpRight />
                        </Link>
                    </div>
                    <div className="flex text-purple lg:text-xl justify-center items-center rounded-3xl border border-purple hover:scale-110 duration-500 ease-linear">
                        <Link to="/contact" className="py-1 lg:py-2 px-2 lg:px-4 flex items-center gap-2">
                            Requirement
                            <PiDownloadSimple />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-16">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-3xl lg:text-4xl">What We Do</h1>
                <p className="px-4 max-md:text-sm lg:px-72 text-center">To create a world of understanding technology, build businesses with modern and advanced tech and improve the efficiency of work done.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-4 lg:gap-10 py-16 lg:px-24 px-4">
                <div className="flex flex-col gap-2 items-center">
                    <div className="p-4 text-3xl text-white bg-gradient-to-b from-pink to-purple rounded-full"><FaCode/></div>
                    <h1 className="font-semibold lg:text-xl">Languages</h1>
                    <p className="text-center max-md:text-sm">We use up-to-date Programming languages and libaries to implement our works.</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <div className="p-4 text-3xl text-white bg-gradient-to-b from-pink to-purple rounded-full"><LuGraduationCap /></div>
                    <h1 className="font-semibold lg:text-xl">Education</h1>
                    <p className="text-center max-md:text-sm">Training a generation of tech nerds, bringing out the pontential of our 
                    generation.</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <div className="p-4 text-3xl text-white bg-gradient-to-b from-pink to-purple rounded-full"><IoBriefcaseOutline/></div>
                    <h1 className="font-semibold lg:text-xl">Projects</h1>
                    <p className="text-center max-md:text-sm">We accept and take every challenge, building every porject with deep 
                    understanding and passion bringing out the essential of every project.</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3 py-5">
                <h1 className="text-3xl lg:text-4xl">Tech We Use</h1>
                <p className="md:px-72 max-md:text-sm text-center px-4">To create a world of understanding technology, build businesses with modern and advanced tech and improve the efficiency of work done.</p>
            </div>
        </div>
        <div className="bg-purple px-4 lg:px-24 py-16">
            <div className="flex flex-col items-center gap-3 py-5 text-white">
                <h1 className="text-3xl lg:text-4xl">Meet Our Team</h1>
                <p className="lg:px-72 max-md:text-sm text-center">To create a world of understanding technology, build businesses with modern and advanced tech and improve the efficiency of work done.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {team.map((item, id) => {
                    return(
                        <div key={id} className="flex flex-col items-center gap-3 bg-white rounded-2xl py-12 px-2">
                            <img src={item.image} alt="" className="w-32"/>
                            <div className="flex flex-col gap-1">
                                <h1 className="text-xl font-semibold">{item.name}</h1>
                                <p className="text-sm font-thin">{item.role}</p>
                            </div>
                            <p className="text-lg lg:text-xl text-center">{item.message}</p>
                            <div>
                                Testimonials
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Home