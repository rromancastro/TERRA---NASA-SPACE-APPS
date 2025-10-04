"use client";
import { useEffect, useState } from "react";
import { TextUp } from "../components";
import Image from "next/image";


export const FirstSection = () => {

    const [stepText, setstepText] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            setstepText(1)
        }, 500);
        setTimeout(() => {
            setstepText(2)
        }, 1400);
        setTimeout(() => {
            setstepText(3)
        }, 2300);
        setTimeout(() => {
            setstepText(4)
        }, 3200);
        setTimeout(() => {
            setstepText(5)
        }, 3500);
        setTimeout(() => {
            setstepText(6)
        }, 3700);
        setTimeout(() => {
            setstepText(7)
        }, 4400);
        setTimeout(() => {
            setstepText(8)
        }, 5400);
        setTimeout(() => {
            setstepText(9)
        }, 10400);
        setTimeout(() => {
            setstepText(10)
        }, 11400);
        setTimeout(() => {
            setstepText(11)
        }, 12100);
        setTimeout(() => {
            setstepText(12)
        }, 13000);
    }, [])

    return <section id="firstSection">
           {/* PRIMERA PARTE */}
            <div style={{display: stepText >= 10 ? 'none' : 'flex', opacity: stepText >= 9 ? 0 : 1, transform: stepText >= 9 ? 'translateY(-300px)' : 'translateY(0px)'}} id="firstSectionPrimeraParte">
                    <video id="firstSectionVideoBg" autoPlay muted loop playsInline>
                        <source src="/videoBg/fondoEstrellas.mp4" type="video/mp4" />
                    </video>
                <div id="firstSectionVideoContainer">
                </div>
                <div className="firstSectionTexts">
                    <TextUp text={"Cada día, "} fontSize={24} active={stepText >= 1 ? true : false} />
                    <TextUp negrita={true} text={"sin pensarlo, "} fontSize={24} active={stepText >= 2 ? true : false} />
                    <TextUp negrita={true} text={"sin saberlo, "} fontSize={24} active={stepText >= 3 ? true : false} />
                </div>
                <div className="firstSectionTexts">
                    <TextUp text={"UN"} fontSize={24} active={stepText >= 4 ? true : false} />
                    <TextUp negrita={true} text={"SATÉLITE"} fontSize={24} active={stepText >= 5 ? true : false} />
                    <TextUp text={"A MÁS DE 700 KILÓMETROS SOBRE NUESTRAS CABEZAS OBSERVA EN SILENCIO"} fontSize={24} active={stepText >= 6 ? true : false} />
                </div>
                <div className="firstSectionTexts">
                    <TextUp negrita={true} text={"EL PULSO DE LA TIERRA."} fontSize={24} active={stepText >= 7 ? true : false} />
                </div>
                <div style={{alignItems: stepText >= 7 ? 'flex-end' : 'flex-start' }} id="loadingBarContainer">
                    <TextUp alignSelf={"flex-start"} text={"CARGANDO..."} fontSize={14} active={stepText >= 2 && stepText < 8 ? true : false} />
                    <div style={{width: stepText == 1 ? '40px' : stepText == 2 ? '66px' : stepText == 3 ? '122px' : stepText == 4 ? '170px' :  stepText == 5 ? '185px' : stepText == 6 ? '256px' :  stepText >= 7 ? '0px' : '0px'}} id="loadingBar"></div>
                </div>
            </div>


           {/* SEGUNDA PARTE */}

           <div style={{top: stepText >= 10 ? '0vh' : '100vh'}} id="firstSectionSegundaParte">
                <div style={{transform: stepText >= 11 ? 'translateY(0vh)' : 'translateY(100vh)'}} id="segundaParteTituloContainer">
                    <h2 className="segundaParteTitulo">INCREÍBLEMENTE</h2>
                    <div style={{height: '110px'}} id="textUpContainer">
                        <p className="segundaParteTitulo" style={{transform: stepText >= 12 ? 'translateY(0px)' : 'translateY(110px)'}} id="textUpText">TERRA</p>
                    </div>
                </div>
           </div>
    </section>
}