import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from "../assets/kkprofile2.jpg"

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35 '>
        <div className='flex flex-wrap '>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl '>Keshav Kartik Sharma</h1>
                    <span className='bg-gradient-to-r from-pink-300 via-sky-500 to-purple-500 bg-clip-text text-4xl tracking-tight  text-transparent'>Full Stack Developer</span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter '>{HERO_CONTENT}</p>
                </div>
            </div>
            <div className=' items-center w-full lg:w-1/2 lg:p-8 '>
                <div className='flex linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) drop-shadow-2xl opacity-50 justify-center items-center'>
                    <img className='flex rounded-3xl justify-center items-center ' src={profilePic} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero