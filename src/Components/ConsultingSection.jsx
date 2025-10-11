// // src/components/ConsultingSection.jsx
// import React from "react";
// import consultingImg from "../images/img4.jpg"; // replace with your image path

// const services = [
//   {
//     title: "Benifical Invest",
//     desc: "Fusce pellentesque li quiipsum viverra interdum sed ac augue.",
//   },
//   {
//     title: "Best Solution",
//     desc: "Fusce pellentesque li quiipsum viverra interdum sed ac augue.",
//   },
//   {
//     title: "Quick Support",
//     desc: "Fusce pellentesque li quiipsum viverra interdum sed ac augue.",
//   },
// ];

// const ConsultingSection = () => {
//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
//         {/* Left Content */}
//         <div className="flex-1">
//           <p className="text-gray-600 uppercase mb-2">Welcome to Business</p>
//           <h2 className="text-4xl font-bold text-blue-500 mb-4">Consulting</h2>
//           <p className="text-gray-700 mb-8">
//             Sed sit amet tellus at orci consectetur blandit. Fusce pellentesque li quiipsum
//             viverra interdum sed ac augue. Nullam rutrum turpis ondimen tristique. Etiam
//             pharetra sagittis mollis.
//           </p>

//           {/* Services */}
//           <div className="space-y-6 mb-8">
//             {services.map((service, index) => (
//               <div key={index}>
//                 <h3 className="text-lg font-semibold">{service.title}</h3>
//                 <p className="text-gray-600">{service.desc}</p>
//               </div>
//             ))}
//           </div>

//           <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
//             Read More
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1">
//           <img
//             src={consultingImg}
//             alt="Consulting"
//             className="w-full h-auto rounded shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConsultingSection;
