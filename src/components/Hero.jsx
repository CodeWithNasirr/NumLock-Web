import {React,useState,useEffect,useContext} from "react";
import { motion } from "framer-motion";
import { assest } from "../assets/assets";
import { Context } from "../context/Context";
import Modal from "./Modal";
const devices = [
  { name: "Mac Repair", img: `${assest.mac}` },
  { name: "Laptop Repair", img: `${assest.Laptop}` },
  { name: "iPhone/iPad", img: `${assest.iphone}` },
  { name: "Projector Repair", img: `${assest.projector}` },
  { name: "Tablet Repair", img: `${assest.tab_repair}` },
  { name: "Desktop Repair", img: `${assest.repair_laptop}` },
  { name: "Laptop Motherboard", img: `${assest.motherboard}` },
  { name: "Data Recovery", img: `${assest.data_recovery}` },
  { name: "Mobile Repair", img:`${assest.phone_repair}` },
  { name: "Printer Repair", img: `${assest.printer}` },
//   { name: "Apple Watch", img: "images/devices/11.png" },
//   { name: "Apple AirPods", img: "images/devices/11.png" },
];
const brands = [
    { name: "HP", img: `${assest.hp}` },
    { name: "Dell", img: `${assest.dell}` },
    { name: "Lenovo", img: `${assest.levono}` },
    { name: "Acer", img: `${assest.acer}` },
    { name: "Asus", img: `${assest.asus}`},
    { name: "Apple", img: `${assest.apple}` },
    { name: "MSI", img: `${assest.msi}` },
    { name: "Microsoft", img:`${assest.microsoft}` },
    { name: "Toshiba", img: `${assest.toshiba}` },
    { name: "Samsung", img: `${assest.samsung}` },
    { name: "Google", img: `${assest.google}` },
    { name: "Realme", img: `${assest.realme}` },
    { name: "Oppo", img: `${assest.oppo}` },
    { name: "Vivo", img: `${assest.vivo}` },
    { name: "Motorola", img: `${assest.motorola}` },
    { name: "Avita", img: `${assest.avita}` },
  { name: "iBall", img: `${assest.iball}` },
  { name: "Mi", img: `${assest.MI}` },
  { name: "OnePlus", img: `${assest.oneplus}` },
  { name: "Poco", img: `${assest.poco}` },
  { name: "Honor", img: `${assest.honor}` },
  { name: "Nokia", img: `${assest.nokia}` },
  { name: "INFINIX", img: `${assest.infinix}` },
  { name: "NOTHING", img: `${assest.nothing}`},
];


const DeviceBox = ({ device,onSelectDevice }) => (
    
  <button
    onClick={() => onSelectDevice(device.name)}
    className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg hover:scale-105 transition"
    title={`Repair your ${device.name}`}
  >
    <img src={device.img} alt={device.name} className="w-10 h-10 object-contain" />
    <span className="mt-2 text-gray-700 font-medium">{device.name}</span>
  </button>
  
);

const BrandBox = ({ brand,onSelectBrand }) => (
  <button
    onClick={() => onSelectBrand(brand.name)}
    className="w-20 h-20 p-3 bg-white shadow-md rounded-lg flex items-center justify-center hover:scale-105 transition"
    title={`Repair ${brand.name} device`}
  >
    <img src={brand.img} alt={brand.name} className="w-full h-full object-contain " />
  </button>

);

const Hero = () => {
  const {visible,setVisble} = useContext(Context);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const handleSelectDevice=(devicename)=>{
    setSelectedDevice(devicename)
    setModalOpen(true)
  }
  const handleSelectBrand=(devicename)=>{
    setSelectedBrand(devicename)
    setModalOpen(true)
  }
  useEffect(() => {
    // console.log("Updated Selected Device:", selectedDevice);
  }, [selectedDevice,selectedBrand]); // Runs whenever `selectedDevice` changes
  return (
    <section className="bg-gray-100 py-10">
      {!visible && (
        <div className="container mx-auto text-center">
      <div className="w-full overflow-hidden whitespace-nowrap flex items-center">
      <motion.h1
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        className="uppercase text-[5vw] tracking-tight pr-10 prata-regular leading-none text-amber-700"
      >
        Welcome to Odisha's No.1 Repair Center
      </motion.h1>
      <motion.h1
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        className="uppercase text-[5vw] tracking-tight pr-10 prata-regular leading-none text-amber-700"
      >
        Welcome to Odisha's No.1 Repair Center
      </motion.h1>
    </div>

        {/* Book by Device */}
        <div className="mt-8 px-5">
          <h2 className="text-2xl font-semibold text-gray-700">Book Service by Device</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
            {devices.map((device, index) => (
              <DeviceBox key={index} device={device} onSelectDevice={handleSelectDevice}/>
            ))}
          </div>
        </div>

        {/* Book by Brand */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-700">Book Service by Brand</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {brands.map((brand, index) => (
              <BrandBox key={index} brand={brand} onSelectBrand={handleSelectBrand} />
            ))}
          </div>
        </div>
        {/* Model form */}
        <Modal isOpen={modalOpen} onClose={() => {setModalOpen(false);setSelectedDevice("");setSelectedBrand("")}} deviceName={selectedDevice} brandname={selectedBrand} />
      </div>
    )}
    </section>
  );
};

export default Hero;
