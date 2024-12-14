import React, { useState } from "react";
import orangeImg from '../../assets/orangebg.png'
import Navbar from "../Navbar/Navbar";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Hero = () => {
    const [sidebar, setSidebar] = useState(false);
  return (
    <main className="md:px-12  md:py-6 bg-primaryDark">
      <section className=" relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          {/* navbar-section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
          {/* Hero-section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px] ">
            {/* text content-section */}
            <div className="text-white mt-[90px] md:mt-0 p-4 space-y-4">
              <h1 data-aos="fade-up" className="text-3xl pl-6 md:pl-14">01__________</h1>
              <h1 data-aos="fade-up" className=" text-5xl font-bold uppercase text-shadow">A Healthy Fruit</h1>
              <p data-aos="fade-up"  data-aos-delay="300" className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ipsum excepturi molestiae rerum numquam hic. 
              </p>
              <button data-aos="fade-up" className="primary-btn">Shop now</button>
            </div>
            {/* image-section */}
              <div>
                <img data-aos="zoom-in-up" src={orangeImg} alt=""
                className=" relative  w-[400px] img-shadow"
                />
              </div>
            {/* blank box-div */}
            <div className=" md:hidden"></div>
          </div>
        </div>
        {/* bg large-text */}
        <h1 className="large-text ">Orange</h1>
        {/* sidebar-section */}
        {
            sidebar &&(
            <div className=" absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10">
            <div className="w-full h-full flex justify-center items-center">
                <div className="text-white flex justify-center items-center flex-col">
                    {/* link */}
                    <div className=" w-[1px] h-[70px] bg-white ">

                    </div>
                    <div className="mb-2 inline-block p-2  rounded-full border border-white cursor-pointer">
                    <FaFacebook className=" text-2xl"/>
                    </div>
                    <div className=" inline-block p-2 rounded-full border border-white cursor-pointer">
                    <FaInstagram className=" text-2xl"/>
                    </div>
                    <div className="mt-2 inline-block p-2 rounded-full border border-white cursor-pointer">
                    <FaLinkedin className=" text-2xl"/>
                    </div>
                    {/* link */}
                    <div className=" w-[1px] h-[70px] bg-white">
                   
                    
                    </div>
                </div>
            </div>

            </div>
            )
        }
      </section>
    </main>
  );
};

export default Hero;
