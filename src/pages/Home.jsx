import React from "react";
import Hero from "../assets/hero.png";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { PiDownloadSimple } from "react-icons/pi";
import { HiOutlineCode, HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";
import { head } from "../constants";
import FramerMotionText from "../components/FramerMotionText";
import AnimatedImages from "../components/AnimatedImages";

const Home = () => {
  return (
    <div className="w-full">
      <div className="lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[80vh] flex items-center w-full bg-radial-gradient">
        <div className="w-full flex justify-between items-center">
          <div className="w-full lg:w-1/2 max-md:items-center max-md:text-center flex flex-col gap-4 lg:gap-6 md:px-16 px-4">
            <FramerMotionText />
            <p className="text-sm md:text-lg lg:text-xl">
              To create a world of understanding technology, build businesses with
              modern and advanced tech, and improve the efficiency of work done.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex text-white lg:text-xl justify-center items-center bg-gradient-to-r from-pink to-purple hover:bg-gradient-to-l hover:from-pink hover:to-purple rounded-3xl hover:scale-105 duration-500 ease-linear transition-all">
                <Link
                  to="/contact"
                  className="py-1 lg:py-2 px-2 lg:px-4 flex items-center gap-2"
                >
                  Contact Us
                  <BsArrowUpRight />
                </Link>
              </div>
              <div className="flex text-purple lg:text-xl justify-center items-center rounded-3xl border border-purple hover:scale-105 duration-500 ease-linear">
                <Link
                  to="/contact"
                  className="py-1 lg:py-2 px-2 lg:px-4 flex items-center gap-2"
                >
                  Requirement
                  <PiDownloadSimple />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full max-md:hidden">
            <AnimatedImages />
          </div>
        </div>
      </div>
      <div className="py-16">
            <div className="flex flex-col items-center gap-3">
                <h1 className="text-3xl lg:text-4xl">What We Do</h1>
                <p className="px-4 max-md:text-sm lg:px-60 text-center">We are dynamic tech start-up focused on turning ideas into ground-breaking solutions. By leveraging advance technology and innovative software development, we design, create products and services that solve an address real world challenges, empower businesses, fuel growth and derive results.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-start gap-4 lg:gap-10 py-16 lg:px-24 px-4">
                <div className="flex flex-col items-start border-[1px] p-[15px] rounded-[10px] gap-[10px] w-[380px] h-[219px]">
                    <div className="p-4 text-3xl text-[#580491] rounded-full"><HiOutlineCode />
                    </div>
                    <h1 className="font-semibold lg:text-xl text-start">Languages</h1>
                    <p className=" max-md:text-sm text-start w-[350px] h-[88px]">We use up-to-date Programming languages and libraries to implement our works.</p>
                </div>
                <div className="flex flex-col border-[1px] p-[15px] rounded-[10px] gap-[10px] w-[380px] h-[219px] items-start">
                    <div className="p-4 text-3xl text-[#580491] rounded-full"><HiOutlineAcademicCap /></div>
                    <h1 className="font-semibold lg:text-xl text-start">Education</h1>
                    <p className=" max-md:text-sm text-start w-[350px] h-[88px]">Training a generation of tech nerds, bringing out the potential of our generation.</p>
                </div>
                <div className="flex flex-col border-[1px] p-[15px] rounded-[10px] gap-[10px] w-[380px] h-[219px] items-start">
                    <div className="p-4 text-3xl text-[#580491] rounded-full ">
                    <HiOutlineBriefcase className=''/></div>
                    <h1 className="font-semibold lg:text-xl text-start ">Projects</h1>
                    <p className=" max-md:text-sm text-start w-[350px] h-[88px]">We accept and take every challenge, building every project with deep understanding and passion bringing out the essential of every project.</p>
                </div>
            </div>
        <div className="flex flex-col items-center gap-3 py-5">
          <h1 className="text-3xl lg:text-4xl">Tech We Use</h1>
          <p className="md:px-72 max-md:text-sm text-center px-4">
            To create a world of understanding technology, build businesses with
            modern and advanced tech and improve the efficiency of work done.
          </p>
        </div>
      </div>
      <div className="bg-purple px-4 lg:px-24 py-16">
        <div className="flex flex-col items-center gap-3 py-5 text-white">
          <h1 className="text-3xl lg:text-4xl">Meet Our Team</h1>
          <p className="lg:px-72 max-md:text-sm text-center">
            To create a world of understanding technology, build businesses with
            modern and advanced tech and improve the efficiency of work done.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {head.map((item, id) => {
            return (
              <div
                key={id}
                className="flex flex-col items-center gap-3 bg-white rounded-2xl py-6 px-2 hover:scale-105 duration-300 ease-linear cursor-pointer"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-[250px] h-[300px] rounded-full"
                />
                <div className="flex flex-col gap-1 text-center">
                  <h1 className="text-xl font-semibold">{item.name}</h1>
                  <p className="text-sm font-thin">{item.role}</p>
                </div>
                <p className="text-sm text-center">{item.testimonial}</p>
                <div>Testimonials</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
