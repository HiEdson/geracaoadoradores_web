import React from "react";
import { Image, Button } from "@nextui-org/react";
import localFont from 'next/font/local'
import Link from "next/link";
const myFont = localFont({
    src: '../../public/Abigail.ttf',
    display: 'swap',
})


const WelcomeCard = () => {
    return (
        <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden p-4 max-w-4xl mx-auto my-5">

            <div className="sm:w-1/3 flex flex-col items-center">
                <div className="flex justify-center">
                    <Image
                        src="modesto_smallPic_good.png"
                        alt="Host"
                        className="rounded-full w-32 h-32 sm:w-full object-contain"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="text-center w-full mt-2">
                    <p className={`text-xl font-bold tracking-widest ${myFont.className}`}>
                        Modesto Bemba
                    </p>
                    <p className="italic text-sm">
                        &quot; Líder do G.A &quot; 
                     </p>
                </div>
            </div>


            <div className="sm:w-2/3 mt-4 sm:mt-0 sm:ml-6 flex flex-col justify-center">
                <h2 className={`text-2xl text-center font-bold text-gray-900 tracking-widest ${myFont.className}`}>
                    Mensagem de Boas Vindas
                </h2>
                <h4 className="mt-2 text-gray-700 text-justify">
                    <p> Que a Paz do Senhor Jesus Cristo seja com você amado irmão na fé Cristã.</p>
                    <p>Apesar de todo conhecimento disponível e fácil de aceder, muitos de nós ainda
                         falhamos em compreender o nosso real papel enquanto seres viventes.</p>
                    <p>Este evento te ajudará a mergulhar no conhecimento de Jesus e de ti mesmo,
                        é um convite a compreensão da nossa responsabilidade e missão aqui durante nossa passagem nesta terra em que somos embaixadores.</p>
                    Venha e participe, a tua presença é uma benção.
                </h4>
                <div className="text-center mt-2">
                    <Link href='/programacao'>
                        <Button variant="shadow" radius="full" className="w-1/4 bg-[#F22F6B] text-white">
                            Saiba Mais
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default WelcomeCard;
