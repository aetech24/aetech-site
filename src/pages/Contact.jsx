import React from 'react'
import Map from '../assets/map.png'
import ScrollToTop from '../components/ScrollToTop';

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
            <div className='flex flex-col gap-4'>
                <h1 className="font-semibold text-purple text-xl">Our Location</h1>
                <iframe className='rounded-md max-md:w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6260413691666!2d-0.1759250258576224!3d5.622100294358928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b13b0062aad%3A0x75de9717e31b2442!2sAccra%20Mall!5e0!3m2!1sen!2sgh!4v1737045530042!5m2!1sen!2sgh" width="560" height="530" style={{border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <ScrollToTop />
    </div>
  )
}

export default Contact