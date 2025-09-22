// import React from "react";

// const FeaturedCourses = () => {
//   return (
//     <section className="w-full bg-white py-12 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//           Our Featured Courses
//         </h2>
//         <p className="text-gray-600 text-lg mb-10">
//           Elevate Your Skills in Laptop, and MacBook Repairs with Expert Training and Practical Expertise.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Course Card */}
//         <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden">
//           <a href="">
//             <img
//               src="https://i.ibb.co/HDqj3hZC/1758199699163.png"
//               alt="Laptop with macbook repair training"
//               className="w-full h-52"
//             />
//           </a>
//           <div className="p-6 space-y-3">
//             <div className="flex items-center justify-between">
//               <div className="text-yellow-500 text-xl">★★★★★</div>
//               <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 640 512">
//                 <path d="M216 288h-48c-8.84..."></path>
//               </svg>
//             </div>
//             <h3 className="text-md font-semibold text-blue-600 hover:underline">
//               <a href="">
//                 Laptop With MacBook Advanced Chip Level Training
//               </a>
//             </h3>
//             <p className="text-gray-700 text-sm">
//               Contact Us For Latest Price & Discount Offers
//             </p>
//             <div className="text-sm text-gray-600 space-y-1">
//               <div className="flex items-center gap-2 py-2">
//               <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"></path></svg>
              
//                 <span>All Updated Lessons</span>
//               </div>
//               <div className="flex items-center gap-2">
//               <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
//                 <span>Flexible Schedule</span>
//               </div>
//             </div>
//             <p className="text-gray-500 text-sm">
//               Learn the basics and advanced topics of Laptop with MacBook repairs.
//             </p>
//           </div>
//         </div>
//         <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden">
//           <a href="">
//             <img
//               src="https://i.ibb.co/twRpFxDS/1758199961512.png"
//               alt="Laptop with macbook repair training"
//               className="w-full h-52"
//             />
//           </a>
//           <div className="p-6 space-y-3">
//             <div className="flex items-center justify-between">
//               <div className="text-yellow-500 text-xl">★★★★★</div>
//               <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 640 512">
//                 <path d="M216 288h-48c-8.84..."></path>
//               </svg>
//             </div>
//             <h3 className="text-md font-semibold text-blue-600 hover:underline">
//               <a href="">
//                 Laptop With HP Advanced Chip Level Training
//               </a>
//             </h3>
//             <p className="text-gray-700 text-sm">
//               Contact Us For Latest Price & Discount Offers
//             </p>
//             <div className="text-sm text-gray-600 space-y-1">
//               <div className="flex items-center gap-2 py-2">
//               <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"></path></svg>
              
//                 <span>All Updated Lessons</span>
//               </div>
//               <div className="flex items-center gap-2">
//               <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
//                 <span>Flexible Schedule</span>
//               </div>
//             </div>
//             <p className="text-gray-500 text-sm">
//               Learn the basics and advanced topics of Laptop with HP repairs.
//             </p>
//           </div>
//         </div>
//         <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden">
//           <a href="">
//             <img
//               src="https://i.ibb.co/6Rh715Nk/1758200018820.png"
//               alt="Laptop with macbook repair training"
//               className="w-full h-52"
//             />
//           </a>
//           <div className="p-6 space-y-3">
//             <div className="flex items-center justify-between">
//               <div className="text-yellow-500 text-xl">★★★★★</div>
//               <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 640 512">
//                 <path d="M216 288h-48c-8.84..."></path>
//               </svg>
//             </div>
//             <h3 className="text-md font-semibold text-blue-600 hover:underline">
//               <a href="">
//                 Laptop With DELL Advanced Chip Level Training
//               </a>
//             </h3>
//             <p className="text-gray-700 text-sm">
//               Contact Us For Latest Price & Discount Offers
//             </p>
//             <div className="text-sm text-gray-600 space-y-1">
//               <div className="flex items-center gap-2 py-2">
//               <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"></path></svg>
              
//                 <span>All Updated Lessons</span>
//               </div>
//               <div className="flex items-center gap-2">
//               <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>
//                 <span>Flexible Schedule</span>
//               </div>
//             </div>
//             <p className="text-gray-500 text-sm">
//               Learn the basics and advanced topics of Laptop with Dell repairs.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCourses;


import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock, 
  Shield, 
  Award,
  MapPin,
  PhoneCall,
  Play,
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
// Professional Featured Courses Component
const ProfessionalFeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "MacBook Advanced Chip Level Training",
      // image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=250&fit=crop",
      image: "https://i.ibb.co/HDqj3hZC/1758199699163.png",
      rating: 4.9,
      students: "2.5k+",
      duration: "12 weeks",
      level: "Advanced",
      price: "Contact for pricing",
      highlights: ["Chip-level diagnostics", "Board repair techniques", "Latest tools & equipment"],
      category: "Hardware"
    },
    {
      id: 2,
      title: "HP Laptop Repair Mastery",
      // image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=250&fit=crop",
      image: "https://i.ibb.co/twRpFxDS/1758199961512.png",
      rating: 4.8,
      students: "1.8k+",
      duration: "10 weeks",
      level: "Intermediate",
      price: "Contact for pricing",
      highlights: ["Component replacement", "Thermal management", "Quality testing"],
      category: "Repair"
    },
    {
      id: 3,
      title: "Dell Systems Professional Course",
      // image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400&h=250&fit=crop",
      image: "https://i.ibb.co/6Rh715Nk/1758200018820.png",
      rating: 4.9,
      students: "3.2k+",
      duration: "14 weeks",
      level: "Professional",
      price: "Contact for pricing",
      highlights: ["Enterprise solutions", "Server maintenance", "Advanced troubleshooting"],
      category: "Enterprise"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Premium Training Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Master Professional 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Repair Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elevate your expertise with industry-leading training programs designed by professionals, for professionals.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Rating & Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-700">{course.rating}</span>
                    <span className="text-gray-500">({course.students})</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                {/* Course Highlights */}
                <ul className="space-y-2 mb-6">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                {/* <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95, rotate: -2 }}
                    className="inline-block"
                  >
                    <Link
                      to={""}
                      className="text-2xl font-bold text-blue-600 cursor-pointer transition-colors duration-300 hover:text-blue-800"
                    >
                      {course.price}
                    </Link>
                  </motion.div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Courses
          </button>
        </div> */}
      </div>
    </section>
  );
};
export default ProfessionalFeaturedCourses;