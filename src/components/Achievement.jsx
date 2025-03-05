import React from 'react'
import { ACHIEVEMENTS, EXPERIENCES } from '../constants'
import { motion } from 'motion/react'

export const Achievement = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:0.5}} className='my-20 text-center text-4xl '>Achievements</motion.h2>

            <div>
                {ACHIEVEMENTS.map((achievements, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}} className='w-full lg:w-1/4 font-bold'>
                            <p className='mb-2 text-sm text-neutral-400'>{achievements.title} </p>
                        </motion.div>

                        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                            {/* <h6 className='mb-2 font-semibold'>{achievements.role} - <span className='text-sm text-purple-3 00'>{achievements.company} </span></h6> */}

                            <p className='mb-4 text-neutral-400 text-sm'>
                                {achievements.description}
                            </p>

                            {/* {achievements.technologies.map((tech, index) => (
                                <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500   hover:bg-white hover:text-purple-900 cursor-pointer' key={index}>{tech}</span>
                            ))} */}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
  )
}
