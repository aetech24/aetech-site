import React from 'react'
import { pricing } from '../constants'
import Check from '../assets/check.png'
import ScrollToTop from '../components/ScrollToTop';

const Pricing = () => {
  return (
    <div className='py-4 lg:py-16'>
      <div className='flex flex-col items-center gap-4'>
            <h1 className='text-3xl lg:text-4xl text-medium'>Our Pricing</h1>
            <p className="text-center max-md:text-sm px-4 lg:px-44">We offer and solve problems across various fields of tech. Find below some of our services and advanced tech and improve the efficiency of work done.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-16 lg:px-24 lg:py-16 py-8'>
          {
            pricing.map((item, id) => {
              return(
                <div key={id} className='bg-purple bg-opacity-15 px-4 pt-10 pb-24 rounded-xl flex flex-col gap-8'>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-semibold'>{item.plan}</h1>
                    <p className='text-4xl font-semibold'>$ {item.price}</p>
                  </div>
                  <div className='bg-gradient-to-r from-pink to-purple py-2 px-8 rounded-full text-white text-center cursor-pointer'>{item.button}</div>
                  <ol className="list-item">
                      {item.listing.map((skill, id) => {
                          return <li key={id} className='flex items-center gap-2 py-1'>
                            <img src={Check} alt="" className='w-6 h-6'/>
                            <p className=''>{skill}</p>
                          </li>
                      })}
                  </ol>
                </div>
              )
            })
          }
        </div>
        <ScrollToTop />
    </div>
  )
}

export default Pricing