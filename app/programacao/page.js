import React from "react";
import NavbarComp from "../components/NavbarComp";
import FullProgramTable from "../components/FullProgramacaoPage";


const Programa =()=>{


    return(
        <>
            <NavbarComp />
            <h1 className="text-3xl text-black text-center mt-6">Programa da Conferência</h1>
            <div className="mx-4">
                <FullProgramTable />
            </div>
        </>

    )
}

export default Programa;