import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiCodechef } from "react-icons/si";
import { motion } from "motion/react"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center '>
            <img className='mx2 w-10' src={logo} alt="logo" />
        </div>
        {/* <div>
        <ul className="flex space-x-6">
          <li><Link to="/">Hero</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/tech">Tech</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </div> */}
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
            <motion.a whileHover={{ scale: 1.4 }} className='hover:text-blue-500' target='_blank' href="https://www.linkedin.com/in/keshav-kartik-sharma-b7b928238/"><FaLinkedin /></motion.a>
            <motion.a whileHover={{ scale: 1.4 }} className='hover:text-blue-500' target='_blank' href="https://github.com/Keshav4762"><FaGithub /></motion.a>
            <motion.a whileHover={{ scale: 1.4 }} className='hover:text-blue-500' target='_blank' href="https://www.instagram.com/keshavk_4762/"><FaInstagram /></motion.a>
            <motion.a whileHover={{ scale: 1.4 }} className='hover:text-blue-500' target='_blank' href="https://x.com/keshav4762"><BsTwitterX /></motion.a>
            <motion.a whileHover={{ scale: 1.4 }} className='hover:text-blue-500' target='_blank' href="https://www.codechef.com/users/keshav4762"><SiCodechef /></motion.a>
        </div>
    </nav>
)
}

export default Navbar