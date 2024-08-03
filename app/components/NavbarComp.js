"use client"
import { React, useState} from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaBars } from 'react-icons/fa';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link";
import Sobre from "./Sobre";
import Image from "next/image";

const NavbarComp = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = useState('5xl')
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    const menuItems = [
        "Casa",
        "Sobre",
        "Conferencistas",
        "Programação",
        "FAQs",
    ];

    let displayModal = <>
    <Modal
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      backdrop={"blur"}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Sobre a Conferência</ModalHeader>
                        <ModalBody className="text-justify">
              <p>
                                Olá Santos Irmãos no Senhor Jesus Cristo, que a Bendita Paz que excede todo o entendimento humano seja com cada um de vocês.
              </p>
            <p>
                                A Conferência Cartas de Deus é um evento Cristão criado pelo Ministério Geração de Adoradores, que surge com o propósito de congregar pessoas ligadas a fé Cristã para estudar as escrituras e aprender mais de Jesus e sobre Ele que é manso e humilde de coração e para este ano de abertura o tema será <b>Cartas de Deus</b>.
            </p>
            <p>
                                O propósito é partilhar sobre a necessidade de compreendermos que cada Cristão é a mensagem viva de Deus no local onde está inserido e que provavelmente é a única Bíblia que muitos têm lido.
            </p>
            <p>
                                No 1º. Painel falaremos sobre nossas vidas serem resultado do próprio Deus e que isso deve suscitar em nós uma atenção particular, pois, ninguém conhece melhor a criatura do que o próprio criador. Também falaremos sobre a confiança que há em sabermos que somos de Deus e não de nós mesmos.
            </p>
            <p>
                                Já no 2º. Painel o subtema será centrado na compreensão de que como Cartas de Deus para todos a nossa volta, precisamos viver em conformidade com o evangelho de Cristo para que a mensagem não seja em nada confundida e assim haja credibilidade no que é pregado.
            </p>
            <p>
                                Por fim, no 3º. Painel o subtema será a volta de como ministros de uma nova aliança, temos em nós responsabilidade acrescida e uma missão ministerial a cumprir. A dependência no reino que representamos também será compartilha.
            </p>
              <p>
                                Não deixa de comparecer e leva convidados consigo, pois há sempre lugar para mais um no reino do amor de Deus, para honra e glória Dele.
              </p>
            
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
    </>

    const handleOpen = (size) => {
        setSize(size)
        onOpen();
    }


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#002C54]">
            {displayModal}

            <NavbarContent>
                <NavbarBrand>
                    <Link href="/">
                        <Image src="/simbolo.svg" alt="Left Logo" className="mr-2" width={45} height={45}/>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className="text-white" href="/">
                        Casa
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="#sobre" key={"sobre_pop"} onPress={() => handleOpen("5xl")} >
                        Sobre
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/programacao" aria-current="page" className="text-white">
                        Programação
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white" href="/conferencistas">
                        Conferencistas 
                    </Link>
                </NavbarItem>
                
            </NavbarContent>

            <NavbarContent justify="end">
                <div className="flex items-center space-x-4">
                    <a href="https://web.facebook.com/profile.php?id=100081261017220" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaFacebookF />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaInstagram />
                    </a>
                    <a href="https://www.tiktok.com/@geracao_adoradores?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaTiktok />
                    </a>
                    <a href="https://www.youtube.com/channel/UCxhBq3bwX3-N82KWvHvcK7g" target="_blank" rel="noopener noreferrer" className="text-white">
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
                            href={item === "Programação" ? "/programacao" : item === "Casa" ?"/":
                                item === "Conferencistas" ? "/conferencistas": "#"}
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
