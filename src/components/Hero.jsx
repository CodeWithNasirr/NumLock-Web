// import {React,useState,useEffect,useContext} from "react";
// import { motion } from "framer-motion";
// import { assest } from "../assets/assets";
// import { ShopContext } from "../context/ShopContext";
// import Modal from "./Modal";
// const devices = [ 
//   { name: "Mac Repair", img: `${assest.mac}` },
//   { name: "Laptop Repair", img: `${assest.Laptop}` },
//   // { name: "iPhone/iPad", img: `${assest.iphone}` },
//   { name: "Projector Repair", img: `${assest.projector}` },
//   // { name: "Tablet Repair", img: `${assest.tab_repair}` },
//   { name: "Desktop Repair", img: `${assest.repair_laptop}` },
//   { name: "Laptop Motherboard", img: `${assest.motherboard}` },
//   { name: "Data Recovery", img: `${assest.data_recovery}` },
//   // { name: "Mobile Repair", img:`${assest.phone_repair}` },
//   { name: "Printer Repair", img: `${assest.printer}` },
// //   { name: "Apple Watch", img: "images/devices/11.png" },
// //   { name: "Apple AirPods", img: "images/devices/11.png" },
// ];
// const brands = [
//     { name: "HP", img: `${assest.hp}` },
//     { name: "Dell", img: `${assest.dell}` },
//     { name: "Lenovo", img: `${assest.levono}` },
//     { name: "Acer", img: `${assest.acer}` },
//     { name: "Asus", img: `${assest.asus}`},
//     { name: "Apple", img: `${assest.apple}` },
//     { name: "MSI", img: `${assest.msi}` },
//     { name: "Microsoft", img:`${assest.microsoft}` },
//     { name: "Toshiba", img: `${assest.toshiba}` },
//     { name: "Samsung", img: `${assest.samsung}` },
//     // { name: "Google", img: `${assest.google}` },
//     // { name: "Realme", img: `${assest.Realme}` },
//     // { name: "Oppo", img: `${assest.oppo}` },
//     // { name: "Vivo", img: `${assest.vivo}` },
//     // { name: "Motorola", img: `${assest.motorola}` },
//     // { name: "Avita", img: `${assest.avita}` },
//   { name: "iBall", img: `${assest.iball}` },
//   // { name: "Mi", img: `${assest.MI}` },
//   // { name: "OnePlus", img: `${assest.oneplus}` },
//   // { name: "Poco", img: `${assest.poco}` },
//   // { name: "Honor", img: `${assest.honor}` },
//   // { name: "Nokia", img: `${assest.nokia}` },
//   // { name: "INFINIX", img: `${assest.infinix}` },
//   // { name: "NOTHING", img: `${assest.nothing}`},
// ];


// const DeviceBox = ({ device,onSelectDevice }) => (
    
//   <button
//     onClick={() => onSelectDevice(device.name)}
//     className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg hover:scale-105 transition"
//     title={`Repair your ${device.name}`}
//   >
//     <img src={device.img} alt={device.name} className="w-10 h-10 object-contain" />
//     <span className="mt-2 text-gray-700 font-medium">{device.name}</span>
//   </button>
  
// );

// const BrandBox = ({ brand,onSelectBrand }) => (
//   <button
//     onClick={() => onSelectBrand(brand.name)}
//     className="w-20 h-20 p-3 bg-white shadow-md rounded-lg flex items-center justify-center hover:scale-105 transition"
//     title={`Repair ${brand.name} device`}
//   >
//     <img src={brand.img} alt={brand.name} className="w-full h-full object-contain " />
//   </button>

// );

// const Hero = () => {
//   const {visible,setVisble} = useContext(ShopContext);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedDevice, setSelectedDevice] = useState("");
//   const [selectedBrand, setSelectedBrand] = useState("");
//   const handleSelectDevice=(devicename)=>{
//     setSelectedDevice(devicename)
//     setModalOpen(true)
//   }
//   const handleSelectBrand=(devicename)=>{
//     setSelectedBrand(devicename)
//     setModalOpen(true)
//   }
//   useEffect(() => {
//     // console.log("Updated Selected Device:", selectedDevice);
//   }, [selectedDevice,selectedBrand]); // Runs whenever `selectedDevice` changes
//   return (
//     <section className="bg-gray-100 py-10">
//       {!visible && (
//         <div className="container mx-auto text-center">
//       <div className="w-full overflow-hidden whitespace-nowrap flex items-center">
//       <motion.h1
//         initial={{ x: "0%" }}
//         animate={{ x: "-100%" }}
//         transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
//         className="uppercase text-[5vw] tracking-tight pr-10 prata-regular leading-none text-amber-700"
//       >
//         Welcome to Odisha's No.1 Repair Center
//       </motion.h1>
//       <motion.h1
//         initial={{ x: "0%" }}
//         animate={{ x: "-100%" }}
//         transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
//         className="uppercase text-[5vw] tracking-tight pr-10 prata-regular leading-none text-amber-700"
//       >
//         Welcome to Odisha's No.1 Repair Center
//       </motion.h1> 
//     </div>

//         {/* Book by Device */}
//         <div className="mt-8 px-5">
//           <h2 className="text-2xl font-semibold text-gray-700">Book Service by Device</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
//             {devices.map((device, index) => (
//               <DeviceBox key={index} device={device} onSelectDevice={handleSelectDevice}/>
//             ))}
//           </div>
//         </div>

//         {/* Book by Brand */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-semibold text-gray-700">Book Service by Brand</h2>
//           <div className="flex flex-wrap justify-center gap-8 mt-8">
//             {brands.map((brand, index) => (
//               <BrandBox key={index} brand={brand} onSelectBrand={handleSelectBrand} />
//             ))}
//           </div>
//         </div>
//         {/* Model form */}
//         <Modal isOpen={modalOpen} onClose={() => {setModalOpen(false);setSelectedDevice("");setSelectedBrand("")}} deviceName={selectedDevice} brandname={selectedBrand} />
//       </div>
//     )}
//     </section>
//   );
// };

// export default Hero;
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

const ProfessionalHero = () => {
  const whatsappNumber = "917894341725"; // Your Meta API WhatsApp number (without +)

  const devices = [
    { name: "MacBook Repair", icon: "💻", popular: true, message: "I want MacBook repair" },
    { name: "Laptop Repair", icon: "🖥️", popular: true, message: "I want Laptop repair" },
    { name: "Desktop Repair", icon: "🖱️", popular: false, message: "I want Desktop repair" },
    { name: "Data Recovery", icon: "💾", popular: false, message: "I want Data recovery service" },
    { name: "Motherboard", icon: "⚡", popular: true, message: "I want Motherboard repair" },
    { name: "Projector Repair", icon: "📽️", popular: false, message: "I want Projector repair" },
  ];

  const brands = [
    { name: "Apple", logo: "🍎" },
    { name: "HP", logo: "📱" },
    { name: "Dell", logo: "💻" },
    { name: "Lenovo", logo: "🖥️" },
    { name: "Asus", logo: "⚡" },
    { name: "Acer", logo: "🔧" },
  ];

  const handleDeviceClick = (message) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-700/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Odisha's #1 Repair Center
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Expert Device
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"> Repair</span>
            <br />Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Professional repair services for all your devices with certified technicians, 
            genuine parts, and industry-leading warranties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.link/nub0g7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Book Repair Now
            </a>
            <a
              href="tel:+919439940725"
              className="border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm inline-block"
            >
              Call: +91 9439940725
            </a>
          </div>
        </div>

        {/* Device Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Select Your Device for Repair</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {devices.map((device, index) => (
              <button
                key={index}
                onClick={() => handleDeviceClick(device.message)}
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 p-6 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                {device.popular && (
                  <div className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full font-medium mb-2 inline-block">
                    Popular
                  </div>
                )}
                <div className="text-3xl mb-2">{device.icon}</div>
                <div className="text-sm font-medium group-hover:text-yellow-400 transition-colors">
                  {device.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Brand Selection */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">We Service All Major Brands</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand, index) => (
              <button
                key={index}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 p-4 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 w-20 h-20 flex flex-col items-center justify-center"
              >
                <div className="text-2xl mb-1">{brand.logo}</div>
                <div className="text-xs font-medium">{brand.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHero;
