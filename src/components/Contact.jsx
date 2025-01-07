import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20 '>
        <h2 className='my-10 text-center text-4xl'>Get in touch</h2>

        <div className="text-center tracking-tighter">
            <p className='my-4'>{CONTACT.phoneNo} </p>
            <a className='text-blue-400 hover:text-neutral-100 hover:border-neutral-100 border-b border-blue-400' href="#">{CONTACT.email} </a>
        </div>
    </div>
  )
}

export default Contact