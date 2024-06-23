"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaBars } from 'react-icons/fa';

const NavbarComp = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Sobre",
        "Conferencistas",
        "Programação",
        "Contacto",
        "FAQs",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#002C54]">
            <NavbarContent>
                <NavbarBrand>
                    <img src="/simbolo.svg" alt="Left Logo" className="h-14 w-14 mr-2" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Sobre
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page" className="text-white">
                        Programação
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Conferencistas 
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="#">
                        Contacto 
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <div className="flex items-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaInstagram />
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaTiktok />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaYoutube />
                    </a>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden text-white"
                    />
                </div>
            </NavbarContent>

            <NavbarMenu className="bg-[#F22F6B]">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-[#002C54]"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavbarComp;

// import React, { useState } from 'react'; 
// import Image from "next/image";
// import { FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTiktok} from 'react-icons/fa';
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";


// const NavbarComp = ()=>{
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//     const menuItems = [
//         "Profile",
//         "Dashboard",
//         "Activity",
//         "Analytics",
//         "System",
//         "Deployments",
//         "My Settings",
//         "Team Settings",
//         "Help & Feedback",
//         "Log Out",
//     ];

//     // const [menuOpen, setMenuOpen] = useState(false);

//     // const toggleMenu = () => {
//     //     console.log("clicked on it")
//     //     setMenuOpen(!menuOpen);
//     // };

//     return(
//         <Navbar>
//         <nav className="bg-[#002C54] p-4" onMenuOpenChange={setIsMenuOpen}>
//             <div className="container mx-auto flex justify-between items-center">
//                 <div className="flex items-center">
//                     <img src="/simbolo.svg" alt="Left Logo" className="h-14 w-14 mr-2" />
//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
//                         <FaFacebookF size={16}/>
//                     </a>
//                     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
//                         <FaInstagram size={16}/>
//                     </a>
//                     <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white">
//                         <FaTiktok size={16}/>
//                     </a>
//                     <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
//                         <FaYoutube size={16}/>
//                     </a>
//                     {/* <button onClick={toggleMenu} className="text-white focus:outline-none px-5 ">
//                         <FaBars size={20}/>
//                     </button> */}
//                     <NavbarMenuToggle
//                         aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//                         className="sm:hidden"
//                     />
//                 </div>
//             </div>
//             {/* {menuOpen && (
//                 <div className="mt-2 bg-[#002C54] text-white flex flex-col items-center space-y-2">
//                     <a href="#home" className="hover:text-gray-300">Home</a>
//                     <a href="#about" className="hover:text-gray-300">About</a>
//                     <a href="#services" className="hover:text-gray-300">Services</a>
//                     <a href="#contact" className="hover:text-gray-300">Contact</a>
//                 </div>
//             )} */}
//         </nav>
//         </Navbar>

//         // <Navbar>
//         //     <NavbarBrand>
//         //         <Image
//         //             src="/simbolo.svg"
//         //             alt="Cartas de Deus conferencia Logo"
//         //             className="dark:invert"
//         //             width={60}
//         //             height={17}
//         //             priority
//         //             />
//         //         <p className="font-bold text-inherit">Cartas de Deus</p>
//         //     </NavbarBrand>

//         //     <NavbarContent justify="end">
//         //         <NavbarBrand>
//         //             <Image
//         //                 src="/simbolo.svg"
//         //                 alt="Cartas de Deus conferencia Logo"
//         //                 className="dark:invert"
//         //                 width={100}
//         //                 height={24}
//         //                 priority
//         //             />
//         //             <p className="font-bold text-inherit">Cartas de Deus</p>
//         //         </NavbarBrand>
//         //         {/* <NavbarItem className="hidden lg:flex">
//         //             <Link href="#">Login</Link>
//         //         </NavbarItem>
//         //         <NavbarItem>
//         //             <Button as={Link} color="primary" href="#" variant="flat">
//         //                 Sign Up
//         //             </Button>
//         //         </NavbarItem> */}
//         //     </NavbarContent>
           
//         // </Navbar>

//     )
// }

// export default NavbarComp;
