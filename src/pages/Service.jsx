import React, { useState } from 'react'
import { services } from '../constants'
import { LuGraduationCap } from "react-icons/lu"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"

const Service = () => {
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className='py-4 lg:py-16'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-3xl lg:text-4xl text-medium'>Our Services</h1>
                <p className="text-center max-md:text-sm px-4 lg:px-44">Gathring, analyzing an understanding user requirements, slope & objectives, we create detailed specifications and documented solutions for businesses.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-20 px-4 py-8 lg:py-4">
                {services.map((item, id) => {
                    return (
                        <div key={id} className="px-4 py-6 border border-black hover:border-purple transition-colors duration-300 rounded-2xl flex flex-col gap-4">
                            <div className="p-2 text-4xl rounded-xl bg-pink text-white w-fit"><LuGraduationCap /></div>
                            <h1 className='text-xl font-medium'>{item.title}</h1>
                            <ol className="list-none space-y-2">
                                {item.skills.slice(0, expandedItems[id] ? undefined : 2).map((skill, skillId) => (
                                    <li key={skillId} className="text-sm flex items-start gap-2">
                                        <span className="text-purple mt-1">•</span>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ol>
                            {item.skills.length > 2 && (
                                <button 
                                    onClick={() => toggleExpand(id)}
                                    className="text-purple text-sm flex items-center gap-1 hover:text-pink transition-colors duration-300"
                                >
                                    {expandedItems[id] ? (
                                        <>Hide <IoIosArrowUp className="text-lg" /></>
                                    ) : (
                                        <>Read More <IoIosArrowDown className="text-lg" /></>
                                    )}
                                </button>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Service