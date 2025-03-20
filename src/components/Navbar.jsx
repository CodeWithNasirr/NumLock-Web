import { useState,useContext } from "react";
import { FaBars, FaTimes, FaWhatsapp  } from "react-icons/fa";
import { ChevronLeft} from 'lucide-react';
import { Link, NavLink } from 'react-router-dom'
import { Context } from "../context/Context";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {visible,setVisble} = useContext(Context);

    return (
        <div className='flex sticky top-0 z-50 items-center justify-between py-5 font-medium bg-zinc-50  border border-gray-100'>
            <Link to='/' className="prata-regular text:1xl sm:py-3 px-5 leading-relaxed text-amber-700">NUMLOCKITSOLUTIONS</Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/Home" className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/About' className='flex flex-col items-center gap-1'>
                    <p>ABOUT US</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/Why' className='flex flex-col items-center gap-1'>
                    <p>WHY WE</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/Fawq' className='flex flex-col items-center gap-1'>
                    <p>FAQ</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT US</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <NavLink to='support' className="hidden sm:flex flex-row justify-end gap-1 border px-5 py-2 rounded-full">
            <p>SUPPORT</p>
            <FaWhatsapp size={20} color="green"/>
            </NavLink>

          
            

            <div className='flex items-center gap-6'>
                <div className='group relative'>
                    {/* Dropdown Menu */}

                </div>
                <button
                    className="sm:hidden text-xl px-5"
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                    {menuOpen ? <FaBars onClick={() => setVisble(true)}/> : <FaBars onClick={() => setVisble(true)}/>}
                </button>
            </div>


            {/* Sidebar Menu For Small Screens */}
            <div className={`absolute top-0 right-0 bottom-0 h-screen bg-white transition-all duration-300 ease-in-out ${visible ? 'w-full opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
                <div className='flex flex-col text-gray-600 gap-4'>
                    <div onClick={() => setVisble(false)} className='flex items-center gap-4 p-3 '>
                    <ChevronLeft onClick={() => setVisble(true)} size={20}/>
                        <p>Back</p>
                    </div>
                    <NavLink to="/Home" className='flex flex-col items-center gap-1' onClick={() => setVisble(false)}>
                    <p>HOME</p>
                </NavLink>
                <NavLink to='/About' className='flex flex-col items-center gap-1' onClick={() => setVisble(false)}>
                    <p>ABOUT US</p>
   
                </NavLink>
                <NavLink to='/Why' className='flex flex-col items-center gap-1' onClick={() => setVisble(false)}>
                    <p>WHY WE</p>
                   
                </NavLink>
                <NavLink to='/Fawq' className='flex flex-col items-center gap-1' onClick={() => setVisble(false)}>
                    <p>FAQ</p>
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1' onClick={() => setVisble(false)}>
                    <p>CONTACT US</p>
                  
                </NavLink>
                <NavLink to='support' className="flex flex-row items-center justify-center gap-1" onClick={() => setVisble(false)}>
                    <p>SUPPORT</p>
                    <FaWhatsapp size={20} color="green"/>

                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
