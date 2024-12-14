import React from "react";
import Banner from "../../assets/website/banner.jpg";
import appStore from "../../assets/website/app_store.png";
import playStore from "../../assets/website/play_store.png";
function AppBanner() {
  const bannerstyle = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };
  return (
    <>
      <div className="container my-16">
        <div
          style={bannerstyle}
          className="sm:min-h-[400px] sm:flex sm:justify-center sm:items-center rounded-lg"
        >
          <div className="md:pl-80">
          <div className=" space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-4xl font-bold">
              Download the app
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-center sm:px-20"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              magnam harum accusantium odit?
            </p>
            {/* img-s */}
            <div className="flex justify-center items-center gap-5 ">
            <a href="#">
            <img src={appStore} alt="" 
            className=" max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
            </a>
            <a href="#">
            <img src={playStore} alt="" 
             className=" max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
            </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppBanner;
