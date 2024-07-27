import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaBars } from 'react-icons/fa';


const FooterCard = () => {

    return (
        <footer className="bg-white text-white py-10 border-1 border-t-slate-400" style={{marginTop:"35%"}}>
            <div className="container mx-auto px-5 ">
                {/* Event Description */}
                <div className=" mb-5 text-center text-black">
                    <p className="text-lg">Um lugar para aprender sobre Jesus, que é manso e humilde de coração
                    </p>
                </div>

                {/* Realização and Patrocinadores */}
                <div className="flex flex-col justify-start items-center">
                    {/* Realização */}
                    <div className="flex flex-col items-center mb-5">
                        <p className="text-center text-lg mb-3 text-[#F22F6B]">Realização</p>
                        <div className="flex justify-center space-x-5">
                            <img src="/patrocinio/ga.jpg" alt="Realizacao geraçao de adoradores - G.A" className="h-20" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center mb-5">
                        <p className="text-center text-lg mb-3 text-[#F22F6B]">Patrocinador</p>
                        <div className="flex justify-center space-x-5">
                            <img src="/patrocinio/deurstudio.jpg" alt="deur studio" className="h-20 mb-2" />
                        </div>
                    </div>
                    {/* Patrocinadores */}
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-center text-lg mb-3 text-[#F22F6B]">Apoiadores</p>
                        <div className="flex justify-center flex-wrap space-x-5">
                            <img src="/patrocinio/doces.jpg" alt="doces e encantos clarice" className="h-20 mb-2" />
                            <img src="/patrocinio/buemais.jpg" alt="bue mais" className="h-20 mb-2" />
                            <img src="/patrocinio/everyhome.jpg" alt="every home for christ" className="h-20 mb-2" />
                            <img src="/patrocinio/gm.jpg" alt="Graci Mário" className="h-20 mb-2" />
                            <img src="/patrocinio/metanoia.jpg" alt="metanoia" className="h-20 mb-2" />
                            <img src="/patrocinio/wal.jpg" alt="wal academia e consultoria" className="h-20 mb-2" />
                            <img src="/patrocinio/zelu.jpg" alt="zelu o charme para sua festa" className="h-20 mb-2" />
                        </div>
                    </div>
                </div>


                {/* Social Media Icons */}
                <div className="flex justify-center space-x-5 mt-10">
                    <a href="https://web.facebook.com/profile.php?id=100081261017220" aria-label="Facebook">
                        <FaFacebookF size={15} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCxhBq3bwX3-N82KWvHvcK7g" aria-label="YouTube">
                        <FaYoutube size={15} />
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram">
                        <FaInstagram size={15} />
                    </a>
                    <a href="https://tiktok.com" aria-label="TikTok">
                        <FaTiktok size={15} />
                    </a>
                </div>

                {/* Essential Footer Items */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-black">&copy; {new Date().getFullYear()} Geração de Adoradores @ All rights reserved.</p>
                    {/* <p className="text-sm">Termos de Ser | Privacy Policy</p> */}
                </div>
            </div>
        </footer>



        // <footer className="bg-[#002C54] text-white py-10">
        //     <div className="container mx-auto px-5">
        //         <div className="flex flex-col md:flex-row justify-between items-center">
        //             {/* Event Description */}
        //             <div className="mb-5 md:mb-0 text-center md:text-left">
        //                 <p className="text-lg">Um Lugar Para Aprender De e Sobre Jesus, 
        //                     Que é Manso e Humilde de Coração.
        //                 </p>
        //             </div>

        //             {/* Sponsors and Realization Images */}
        //             {/* <div className="flex flex-col items-center">
        //                 {/* Patrocinadores /}
        //                 <div className="flex flex-col justify-center items-center space-y-5 mb-5 md:mb-0">
        //                     <p className="text-center text-lg mb-3">Patrocinadores</p>
        //                     <div className="flex justify-center flex-wrap space-x-5">
        //                         <img src="/patrocinio/doces.jpg" alt="doces e encantos clarice" className="h-12" />
        //                         <img src="/patrocinio/buemais.jpg" alt="bue mais" className="h-12" />
        //                         <img src="/patrocinio/deurstudio.jpg" alt="deur studio" className="h-12" />
        //                         <img src="/patrocinio/everyhome.jpg" alt="every home for christ" className="h-12" />
        //                         <img src="/patrocinio/gm.jpg" alt="Graci Mário" className="h-12" />
        //                         <img src="/patrocinio/metanoia.jpg" alt="metanoia" className="h-12" />
        //                         <img src="/patrocinio/wal.jpg" alt="wal academia e consultoria" className="h-12" />
        //                         <img src="/patrocinio/zelu.jpg" alt="zelu o charme para sua festa" className="h-12" />
        //                     </div>
        //                 </div>
        //                 {/* Realização /}
        //                 <div className="flex flex-col items-center mt-5 md:mt-0">
        //                     <p className="text-center text-lg mb-3">Realização</p>
        //                     <img src="/patrocinio/ga.jpg" alt="Realizacao geraçao de adoradores - G.A" className="h-12" />
        //                 </div>
        //             </div> */}
        //         </div>

        //         {/* Social Media Icons */}
        //         <div className="flex justify-center space-x-5 mt-10">
        //             <a href="https://facebook.com" aria-label="Facebook">
        //                 <FaFacebookF size={15}/>
        //             </a>
        //             <a href="https://youtube.com" aria-label="YouTube">
        //                 <FaYoutube size={15}/>
        //             </a>
        //             <a href="https://instagram.com" aria-label="Instagram">
        //                 <FaInstagram size={15}/>
        //             </a>
        //             <a href="https://tiktok.com" aria-label="TikTok">
        //                 <FaTiktok size={15}/>
        //             </a>
        //         </div>

        //         {/* Essential Footer Items */}
        //         <div className="mt-10 text-center">
        //             <p className="text-sm">&copy; {new Date().getFullYear()} Geração de Adoradores @ All rights reserved.</p>
        //             {/* <p className="text-sm">Termos de Ser | Privacy Policy</p> */}
        //         </div>
        //     </div>
        // </footer>
    );
}

export default FooterCard