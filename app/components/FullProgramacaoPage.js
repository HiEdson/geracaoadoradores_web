"use client"
import React from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react';
import styles from "./css/fullProgram.module.css"

const FullProgramTable = () => {
    return (
        <>
            <Table isHeaderSticky={true} removeWrapper aria-label="Event Schedule" className={` ${styles.mytable}`}>
                <TableHeader>
                    <TableColumn>PROGRAMA</TableColumn>
                    <TableColumn>DETALHES</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>TEMA</TableCell>
                        <TableCell>Cartas de Deus</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>LOCAL</TableCell>
                        <TableCell>Cine Sporting</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>REALIZAÇÃO</TableCell>
                        <TableCell>Ministério Geração de Adoradores</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell>DATA</TableCell>
                        <TableCell>19 e 25 de Agosto de 2024</TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    <TableRow key="5">
                        <TableCell className={styles.theTableCell}>19 à 23 de Agosto de 2024</TableCell>
                        <TableCell>
                            <p>
                                <strong>Manhã & Tarde</strong><br />
                                08:00 – Início da Campanha de Evangelização;<br />
                                17:00 – Fim da Campanha de Evangelização.<br />
                                <strong>Locais:</strong>
                                • Táxis
                                • Praças
                                • Bairros
                                • Ruas
                                • Casas
                            </p>
                        </TableCell>
                    </TableRow>
                    <TableRow key="6">
                        <TableCell className={styles.theTableCell}>24 de Agosto de 2024</TableCell>
                        <TableCell>
                            <p>
                                <strong>Manhã</strong><br />
                                09:30 - CULTO DE ORAÇÃO & ADORAÇÃO;<br />
                                10:30 – CONFERÊNCIA<br />
                                <strong>1º. Painel:</strong> Carta escrita não com tinta, mas pelo Espírito do Deus Vivo.<br />
                                <strong>2º. Painel:</strong> O Cristão como carta de Deus para sociedade.<br />
                                <strong>3º. Painel:</strong> Ministros de uma nova aliança.<br />
                                <br />
                                <strong>Noite</strong><br />
                                18:00 - CULTO DE ORAÇÃO & ADORAÇÃO;<br />
                                18:30 – Exibição da Peça Teatral<br />
                                <strong>Título da Obra:</strong> Cartas de Deus
                            </p>
                        </TableCell>
                    </TableRow>
                    <TableRow key="7">
                        <TableCell className={styles.theTableCell}>25 de Agosto de 2024</TableCell>
                        <TableCell>
                            <p>
                                <strong>Tarde</strong><br />
                                15:00 - CULTO DE RUA (Praça da Liberdade)
                            </p>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};

export default FullProgramTable;
