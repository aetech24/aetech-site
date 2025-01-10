import React from 'react'
import Map from '../assets/map.png'

const Contact = () => {
  return (
    <div className="py-4 lg:py-16">
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-4xl text-medium'>Contact Us</h1>
            <p className="text-center px-4 lg:px-44">We offer and solve problems across various fields of tech. Find below some of our services and advanced tech and improve the efficiency of work done.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-6 lg:py-16 px-4 lg:px-24 w-full'>
            <div className="flex flex-col gap-8">
                <h1 className="font-semibold text-purple text-xl">Send Us A Message</h1>
                <form action="" className="flex flex-col gap-5">
                    <label htmlFor="" className="flex flex-col gap-2">Name
                        <input type="text" className="border border-gradient-to-b from-pink to-purple p-2 rounded-lg" />
                    </label>
                    <label htmlFor="" className="flex flex-col gap-2">Email
                        <input type="text" className="border border-gradient-to-b from-pink to-purple p-2 rounded-lg" />
                    </label>
                    <label htmlFor="" className="flex flex-col gap-2">Message
                        <textarea rows={8} type="text" className="border border-gradient-to-b from-pink to-purple p-2 rounded-lg" />
                    </label>
                    <button className="py-2 px-4 text-white bg-gradient-to-r from-pink to-purple rounded-2xl mt-4">Send Message</button>
                </form>
            </div>
            <div>
                <h1 className="font-semibold text-purple text-xl">Our Location</h1>
                <img src={Map} alt="" className='w-full mt-8 h-[80%]' />
            </div>
        </div>
    </div>
  )
}

export default Contact