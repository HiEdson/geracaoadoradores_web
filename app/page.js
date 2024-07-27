import Image from "next/image";
import NavbarComp from "./components/NavbarComp";
import CarouselCard from "./components/CarouselCard";
import WelcomeCard from "./components/WelcomeCard";
import { Speakers } from "./components/Speakers";
import speakersData from './speakersData.json';
import localFont from 'next/font/local'
import { Button } from "@nextui-org/react";
import ProgramSample from "./components/ProgramSample";
import MapCard from "./components/MapCard";
import FooterCard from "./components/Footer";
const fs = require('fs');
const path = require('path');


// export const metadata = {
//   stylesheet: 'https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css',
// }

//   < Head >
//   <link
//     href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
//     rel="stylesheet"
//   />
// </Head >


 const myFont = localFont({
    src: '../public/Abigail.ttf',
    display: 'swap',
  })



export default function Home() {

  // let displayModal = <>
  //   <Modal
  //     size={size}
  //     isOpen={isOpen}
  //     onClose={onClose}
  //   >
  //     <ModalContent>
  //       {(onClose) => (
  //         <>
  //           <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
  //           <ModalBody>
  //             <p>
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //               Nullam pulvinar risus non risus hendrerit venenatis.
  //               Pellentesque sit amet hendrerit risus, sed porttitor quam.
  //             </p>
  //             <p>
  //               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //               Nullam pulvinar risus non risus hendrerit venenatis.
  //               Pellentesque sit amet hendrerit risus, sed porttitor quam.
  //             </p>
            
  //           </ModalBody>
  //           {/* <ModalFooter>
  //             <Button color="danger" variant="light" onPress={onClose}>
  //               Close
  //             </Button>
  //             <Button color="primary" onPress={onClose}>
  //               Action
  //             </Button>
  //           </ModalFooter> */}
  //         </>
  //       )}
  //     </ModalContent>
  //   </Modal>
  // </>


  const speakersPanel1 = path.join(process.cwd(), 'public', 'Painelistas/Iº. Painel');
  const speakers1 = fs.readdirSync(speakersPanel1);
  const speakersPanel2 = path.join(process.cwd(), 'public', 'Painelistas/IIº. Painel');
  const speakers2 = fs.readdirSync(speakersPanel2);
  const speakersPanel3 = path.join(process.cwd(), 'public', 'Painelistas/IIIº. Painel');
  const speakers3 = fs.readdirSync(speakersPanel3);
  return (
    <main>
      {/* <p>edson casimiro</p> */}
      <div className="">
        <NavbarComp />
      </div>
      <div>
        <CarouselCard/>
      </div>
      <section>
        <div className="" style={{marginTop:"7%"}}>
          <WelcomeCard/>
        </div>
      </section>

      <div style={{marginTop:"10%"}}>
        <h1 className={`text-center text-4xl font-bold mb-3 tracking-widest ${myFont.className}`}>Painelistas</h1>
        <Speakers data={[speakers1, speakers2, speakers3]} />
        <div className="text-center mt-2">
          <Button variant="shadow" radius="full" className="w-1/8 bg-[#F22F6B] text-white">
            Saiba Mais
          </Button>
        </div>
      </div>

      <div style={{ marginTop: "10%", borderRadius:"10%" }} className="mx-4">
        <h1 className={`text-center text-4xl font-bold mb-3 tracking-widest ${myFont.className}`}>Programa</h1>
        <ProgramSample/>
        <div className="text-center mt-5">
          <Button variant="shadow" radius="full" className="w-1/8 bg-[#F22F6B] text-white">
            Ver Mais
          </Button>
        </div>
      </div>

      <div className="locationMap" style={{ marginTop: "10%"}}>
        <h1 className={`text-center text-4xl font-bold mb-3 tracking-widest ${myFont.className}`}>Local do Evento</h1>
        <p className="text-center">Em Caso de dúvidas, contacte: 948996201 / 945917310</p>
        <div className="mt-6">
          <MapCard />
        </div>
        <FooterCard/>
      </div>

    </main>
  );
}
