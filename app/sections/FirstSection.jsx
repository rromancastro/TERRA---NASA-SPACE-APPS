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
    }, [])

    return <section id="firstSection">
            <video id="firstSectionVideoBg" autoPlay muted loop playsInline>
                <source src="/videoBg/fondoEstrellas.mp4" type="video/mp4" />
            </video>

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

            <div id="loadingBarContainer">
                <TextUp text={"CARGANDO..."} fontSize={14} active={stepText >= 2 ? true : false} />
                <div style={{width: stepText == 1 ? '40px' : stepText == 2 ? '66px' : stepText == 3 ? '122px' : stepText == 4 ? '170px' :  stepText == 5 ? '185px' : stepText == 6 ? '200px' :  stepText == 7 ? '256px' : '0px'}} id="loadingBar"></div>
            </div>

    </section>
}