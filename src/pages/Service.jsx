import React from 'react'
import {services} from '../constants'
import { LuGraduationCap } from "react-icons/lu";


const Service = () => {
  return (
    <div className='py-4 lg:py-16'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-3xl lg:text-4xl text-medium'>Our Services</h1>
            <p className="text-center max-md:text-sm px-4 lg:px-44">Gathring, analyzing an understanding user requirements, slope & objectives, we create detailed specifications and documented solutions for businesses.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-20 px-4 py-8 lg:py-16">
            {services.map((item, id) => {
                return (
                    <div key={id} className="px-4 py-16 border border-black rounded-2xl flex flex-col gap-4">
                        <div className="p-2 text-4xl rounded-xl bg-pink text-white w-fit"><LuGraduationCap /></div>
                        <h1 className='text-2xl font-medium'>{item.title}</h1>
                        <ol className="list-item">
                            {item.skills.map((skill, id) => {
                                return <li key={id}>{skill}</li>
                            })}
                        </ol>
                        <p>Read More ...</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Service