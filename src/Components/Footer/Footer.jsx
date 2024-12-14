import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
function Footer() {
  return (
    <div className=' bg-gradient-to-r from-primary to-secondary pt-12 pb-8'>
    <div className='container'>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white'>
        {/* company-section */}
        <div className=' space-y-4'>
        <h1 className=' text-3xl font-bold'>
        Orange Mint
        </h1>
        <p className=' text-white text-sm max-w-[300px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores assumenda error nemo modi repudiandae?
        </p>
        </div>
        {/* link-section */}
        <div className=' space-y-6'>
        <h1 className=' text-3xl font-bold'>
        Quick Links
        </h1>
        <div className='grid grid-cols-2 gap-3'>
          {/* first-link */}
          <div className=''>
            <ul className=' space-y-2'>
            <li>
            <a href='#'>Home</a> 
            </li>
            <li>
            <a href='#'>About</a>
            </li>
            <li>
            <a href='#'>Contact</a>
            </li>
            <li>
            <a href='#'>Search Fruits</a>
            </li>
            <li>
            <a href='#'>Privacy Policy</a>
            </li>
            </ul>
            </div>
            {/* second-link */}
            <div className=''>
            <ul className=' space-y-2'>
            <li>
            <a href='#'>Home</a> 
            </li>
            <li>
            <a href='#'>About</a>
            </li>
            <li>
            <a href='#'>Contact</a>
            </li>
            <li>
            <a href='#'>Search Fruits</a>
            </li>
            <li>
            <a href='#'>Privacy Policy</a>
            </li>
            </ul>
            </div>
            
        </div>
        </div>
        
        {/* social */}
        <div className=' space-y-6'> 
            <h1 className=' text-4xl font-bold'>Follow Us</h1>
           <div>
            <p>+91 (123) 456-7890</p>
            <p>Indore,Madhya Pradesh </p>
           </div>
           <div className='flex items-center gap-4'>
            <FaFacebook className=' text-3xl hover:scale-115 duration-200'/>
            <FaInstagram className=' text-3xl hover:scale-115 duration-200'/>
            <FaLinkedin className=' text-3xl hover:scale-115 duration-200'/>
            <IoLogoGoogleplus className=' text-3xl hover:scale-115 duration-200'/>
           </div>
        </div>
        
     </div>
     <div className='border w-full mt-7'></div>
     <div className='text-sm text-center pt-5 text-white'>Copyright © 2024 Company Name. All rights reserved.</div>
    </div>
      
    </div>
  )
}

export default Footer
