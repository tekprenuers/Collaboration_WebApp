// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Vector1 from "../assets/vector-illustration/vector-1.jpg";
// import Vector2 from "../assets/vector-illustration/vector-2.jpg";
// import Vector3 from "../assets/vector-illustration/vector-3.jpg";

// const ImageSlider: React.FC = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     beforeChange: (_: number, next: number) => setActiveSlide(next),
//     customPaging: (i: number) => (
//       <div
//         className={`w-3 h-3 rounded-full transition-all duration-500 absolute -top-6 ${
//           activeSlide === i
//             ? "bg-orange-500 w-7 scale-80"
//             : "bg-gray-300 w-3 h-3"
//         }`}
//       ></div>
//     ),
//   };

//   return (
//     <div className="hidden md:flex w-1/2 h-full max-w-2xl items-center justify-cente">
//       <div className="w-full max-w-lg relative">
//         <Slider {...settings} className="">
//           {[Vector1, Vector2, Vector3].map((vector, index) => (
//             <div key={index} className="flex justify-center">
//               <img
//                 src={vector}
//                 alt={`Vector ${index + 1}`}
//                 className={`rounded-2xl transition-all duration-500 ${
//                   activeSlide === index ? "h-[30rem]" : "h-[28rem]"
//                 } w-full object-contain`}
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;



import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Vector1 from "../assets/vector-illustration/vector-1.jpg";
import Vector2 from "../assets/vector-illustration/vector-2.jpg";
import Vector3 from "../assets/vector-illustration/vector-3.jpg";

const ImageSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-500 absolute right-16 -top-6 ${
          activeSlide === i
            ? "bg-orange-500 w-7 scale-80"
            : "bg-gray-300 w-3 h-3"
        }`}
      ></div>
    ),
  };

  return (
    <div className="hidden md:flex  h-full  items-center justify-center">
      <div className="w-full max-w-lg relative">
        <Slider {...settings}>
          {[Vector1, Vector2, Vector3].map((vector, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={vector}
                alt={`Vector ${index + 1}`}
                className="w-[400px] h-[650px] object-cover rounded-2xl transition-all duration-500"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
