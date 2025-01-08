import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react";

const iconVariant = (duration, delay) => ({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            delay: delay,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h1>

        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}}  className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconVariant(1,0.2)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:bg-blue-50 cursor-pointer'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div variants={iconVariant(1,0.4)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:bg-blue-50 cursor-pointer'>
                <RiNextjsLine className='text-7xl' />
            </motion.div>
            <motion.div variants={iconVariant(1,0.6)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:bg-blue-50 cursor-pointer'>
                <SiMongodb className='text-7xl text-green-500' />
            </motion.div>
            <motion.div variants={iconVariant(1,0.8)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:bg-blue-50 cursor-pointer'>
                <RiTailwindCssFill className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div variants={iconVariant(1,1)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4 hover:bg-blue-50 cursor-pointer'>
                <IoLogoNodejs className='text-7xl text-green-500' />
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Tech