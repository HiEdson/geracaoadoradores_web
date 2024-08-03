import React from "react";
import NavbarComp from "../components/NavbarComp";
import FooterCard from "../components/Footer";
import fs from 'fs';
import path from 'path';
import Image from 'next/image';


    const speakersPanel1 = path.join(process.cwd(), 'public', 'Painelistas/Iº. Painel');
    const speakers1 = fs.readdirSync(speakersPanel1);

    const speakersPanel2 = path.join(process.cwd(), 'public', 'Painelistas/IIº. Painel');
    const speakers2 = fs.readdirSync(speakersPanel2);

    const speakersPanel3 = path.join(process.cwd(), 'public', 'Painelistas/IIIº. Painel');
    const speakers3 = fs.readdirSync(speakersPanel3);


const Conferencistas = ()=>{

    return(
        <>
        <NavbarComp/>
            <div className="mb-8 mx-5 mt-9">
                <h1 className="text-center text-xl font-semibold underline decoration-[#F22F6B]">1º Painel</h1>
                <h2 className="text-xl font-semibold mb-4 text-center">
                    Carta Escrita Não Com Tinta Mas Pelo Espírito do Deus Vivo
                    </h2>


                <div className="flex flex-col items-center">
                    <div className="w-1/3 h-48 md:h-60 lg:h-72 relative">
                        <Image
                            src={`/Painelistas/Iº. Painel/1 Eunice Zumbuca - Moderadora.png`}
                            alt={`conferencistas`}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    
                    <p className="mb-6">
                        <br />
                        Eunice Zumbuca - Moderadora
                        </p>
                </div>


                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 mb-16">
                    {speakers1.map((speaker, index) => (
                        <div key={index} className={`flex flex-col items-center 
                        ${speaker?.split(' ')[4]?.split(".")[0]=="Moderadora"?"hidden":""}`}>
                            <div className="w-full h-48 md:h-60 lg:h-72 relative">
                                <Image
                                    src={`/Painelistas/Iº. Painel/${speaker}`}
                                    alt={`conferencistas ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <p className="mt-2 text-center">
                                {`${speaker?.split(' ')[1]} ${speaker?.split(' ')[2]} - ${speaker?.split(' ')[4]?.split(".")[0]}`}
                            </p>
                        </div>
                    ))}
                </div>

                <h1 className="text-center text-xl font-semibold underline decoration-[#F22F6B]">2º Painel</h1>
                <h2 className="text-xl font-semibold mb-4 text-center">
                    O Cristão Como Carta de Deus Para Sociedade
                </h2>


                <div className="flex flex-col items-center">
                    <div className="w-1/3 h-48 md:h-60 lg:h-72 relative">
                        <Image
                            src={`/Painelistas/IIº. Painel/2 Zulmira João - Moderadora.png`}
                            alt={`conferencistas`}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    <p className="mb-6">
                        <br />
                        Zulmira João - Moderadora
                    </p>
                </div>


                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 mb-16">
                    {speakers2.map((speaker, index) => (
                        <div key={index} className={`flex flex-col items-center 
                        ${speaker?.split(' ')[4]?.split(".")[0] == "Moderadora" ? "hidden" : ""}`}>
                            <div className="w-full h-48 md:h-60 lg:h-72 relative">
                                <Image
                                    src={`/Painelistas/IIº. Painel/${speaker}`}
                                    alt={`conferencistas ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <p className="mt-2 text-center">
                                {`${speaker?.split(' ')[1]} ${speaker?.split(' ')[2]} - ${speaker?.split(' ')[4]?.split(".")[0]}`}
                            </p>
                        </div>
                    ))}
                </div>


                <h1 className="text-center text-xl font-semibold underline decoration-[#F22F6B]">3º Painel</h1>
                <h2 className="text-xl font-semibold mb-4 text-center">
                    Ministros de Uma Nova Aliança
                </h2>

                <div className="flex flex-col items-center">
                    <div className="w-1/3 h-48 md:h-60 lg:h-72 relative">
                        <Image
                            src={`/Painelistas/IIIº. Painel/2 Olivia Francisco - Moderadora.png`}
                            alt={`conferencistas`}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    <p className="mb-6">
                        <br />
                        Olivia Francisco - Moderadora
                    </p>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2 mb-16">
                    {speakers3.map((speaker, index) => (
                        <div key={index} className={`flex flex-col items-center 
                        ${speaker?.split(' ')[4]?.split(".")[0] == "Moderadora" ? "hidden" : ""}`}>
                            <div className="w-full h-48 md:h-60 lg:h-72 relative">
                                <Image
                                    src={`/Painelistas/IIIº. Painel/${speaker}`}
                                    alt={`conferencistas ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="top"
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                            <p className="mt-2 text-center">
                                {`${speaker?.split(' ')[1]} ${speaker?.split(' ')[2]} - ${speaker?.split(' ')[4]?.split(".")[0]}`}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        <FooterCard/>
        </>
    )
}
export default Conferencistas;

