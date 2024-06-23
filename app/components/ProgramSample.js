"use client"
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import styles from "./css/program.module.css"

export default function ProgramSample() {
    return (
       <>
            <Table removeWrapper radius={"sm"} align={"center"} aria-label="Example static collection table" className={` ${styles.mytable}`}> 
                <TableHeader style={{backgroundColor:"red"}}>
                    <TableColumn>Conferência</TableColumn>
                    <TableColumn>Teatro</TableColumn>
                    <TableColumn>Culto de Rua</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>09h00 - 13h30</TableCell>
                        <TableCell>18h00 - 20h00</TableCell>
                        <TableCell>15h00 - 17h00</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>24 de Agosto de 2024</TableCell>
                        <TableCell>24 de Agosto de 2024</TableCell>
                        <TableCell>25 de Agosto de 2024</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>Cine Sporting-Sumbe</TableCell>
                        <TableCell>Cine Sporting-Sumbe</TableCell>
                        <TableCell>Praça da Liberdade-Sumbe</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </>
    );
}
