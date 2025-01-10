import React from 'react'
import { work } from '../constants'

const Work = () => {
  return (
    <div className='py-4 lg:py-16'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-3xl lg:text-4xl text-medium'>Our Work</h1>
            <p className="text-center max-md:text-sm px-4 lg:px-44">We offer and solve problems across various fields of tech. Find below some of our services and advanced tech and improve the efficiency of work done.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-24 py-8 lg:py-16'>
            {
                work.map((item, id) => {
                    return (
                        <div key={id} className="px-4 py-4 rounded-2xl flex flex-col gap-4 bg-purple bg-opacity-15">
                            <img src={item.image} alt="" className='lg:w-full lg:h-full w-[200x] h-[300px] hover:scale-105 duration-300 ease-linear' />
                            <h1 className='text-xl lg:text-2xl font-medium'>{item.title}</h1>
                            <p className='max-md:text-sm'>{item.description}</p>
                            <button className='w-fit hover:underline hover:text-purple duration-300 ease-linear max-md:text-sm'>Read more </button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Work