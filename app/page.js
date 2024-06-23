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
        <Speakers data={speakersData} />  
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

        <MapCard/>
      </div>

    </main>
  );
}
