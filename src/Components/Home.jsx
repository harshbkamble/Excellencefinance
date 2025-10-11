// import React, { useState } from "react";
// import a1 from "../images/img1.jpg";
// import a2 from "../images/img2.jpg";
// import a3 from "../images/img3.jpg";

// const Home = () => {
//   const slides = [a1, a2, a3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? slides.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === slides.length - 1 ? 0 : prev + 1
//     );
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       {/* Carousel wrapper */}
//       <div className="relative w-full h-full">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`${
//               index === currentIndex ? "block" : "hidden"
//             } duration-700 ease-in-out`}
//           >
//             <img
//               src={slide}
//               className="w-screen h-screen object-cover"
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Slider indicators */}
//       <div className="absolute z-30 flex -translate-x-1/2 bottom-10 left-1/2 space-x-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-4 h-4 rounded-full ${
//               index === currentIndex ? "bg-white" : "bg-gray-400"
//             }`}
//             aria-label={`Slide ${index + 1}`}
//           ></button>
//         ))}
//       </div>

//       {/* Prev button */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
//       >
//         <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 text-2xl">
//           ❮
//         </span>
//       </button>

//       {/* Next button */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
//       >
//         <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 text-2xl">
//           ❯
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Home;
