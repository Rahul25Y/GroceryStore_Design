import React from "react";
import Fruit1 from "../../assets/fruits/fruits1.webp";
import Fruit2 from "../../assets/fruits/fruits2.png";
import Fruit3 from "../../assets/fruits/fruits3.png";
function Services() {
  const ServicesData = [
    {
      id: 1,
      Image: Fruit1,
      title: "Fresh Fruits",
      subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      aosDelay: "300",
    },
    {
      id: 2,
      Image: Fruit2,
      title: "Fresh Fruits",
      subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      aosDelay: "300",
    },
    {
      id: 3,
      Image: Fruit3,
      title: "Orange Juice",
      subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      aosDelay: "300",
    },
  ];
  return (
    <div className="container my-16 space-y-4 overflow-y-hidden">
      {/* heading-section */}
      <div className=" text-center max-w-lg mx-auto space-x-2">
        <h1 data-aos="fade-up" className=" text-3xl font-bold text-dark">
          Fresh and <span className=" text-primary">Tasty Fruits</span>
        </h1>
        <p  data-aos="fade-up" className=" text-sm opacity-50 pt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex
          dolorem fuga.
        </p>
      </div>
      {/* card-box-container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ServicesData.map((data) => (
          <div
            key={data.id}
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="p-4 text-center space-y-6"
          >
            <img
              className="max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2"
              src={data.Image}
              alt=""
            />
            <div className=" space-y-2">
              <h1 className=" text-primary text-2xl font-bold">{data.title}</h1>
              <p className="text-sm  text-dark">{data.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
