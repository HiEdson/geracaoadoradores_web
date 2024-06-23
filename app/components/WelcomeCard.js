import React from "react";
import { Image, Button } from "@nextui-org/react";
import localFont from 'next/font/local'
const myFont = localFont({
    src: '../../public/Abigail.ttf',
    display: 'swap',
})


const WelcomeCard = () => {
    return (
        <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden p-4 max-w-4xl mx-auto my-5">

            <div className="sm:w-1/3 flex flex-col items-center sm:items-start">
                <Image
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Host"
                    className="rounded-full w-32 h-32 sm:w-full sm:h-full object-cover"
                />
                <div className="text-center w-full">
                    <p className={`mt-2 text-center text-xl font-bold tracking-widest ${myFont.className}`}>
                        Modesto Bemba
                    </p>
                    <p className="italic text-center text-sm">  
                        "Lider do G.A"
                    </p>
                </div>
            </div>


            <div className="sm:w-2/3 mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-center">
                <h2 className={`text-2xl text-center font-bold text-gray-900 tracking-widest ${myFont.className}`}>
                    Mensagem de Boas Vindas
                </h2>
                <h4 className="mt-2 text-gray-700 text-justify">
                    We are delighted to have you here. Please feel free to explore and let
                    us know if you have any questions. We are delighted to have you here. Please feel free to explore and let
                    us know if you have any questions.We are delighted to have you here. Please feel free to explore and let
                    us know if you have any questions.We are delighted to have you here. Please feel free to explore and let
                </h4>
                <div className="text-center mt-2">
                    <Button variant="shadow" radius="full" className="w-1/4 bg-[#F22F6B] text-white">
                        Saiba Mais
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default WelcomeCard;
