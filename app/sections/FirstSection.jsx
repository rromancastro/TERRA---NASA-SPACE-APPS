"use client";
import { useEffect, useRef, useState } from "react";
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
        }, 3100);
        setTimeout(() => {
            setstepText(5)
        }, 3900);
        setTimeout(() => {
            setstepText(6)
        }, 4700);
        setTimeout(() => {
            setstepText(7)
        }, 5500);
        setTimeout(() => {
            setstepText(8)
        }, 6300);
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
        setTimeout(() => {
            setstepText(13)
        }, 14500);
    }, [])

    //aumentar velocidad video
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
        videoRef.current.playbackRate = 1.5;
        }
    }, []);

    //control scroll
    useEffect(() => {
        const html = document.documentElement;

        if (stepText < 12) {
            html.style.overflow = "hidden";
        } else {
            html.style.overflow = "auto";
        }
    }, [stepText]);

    return <section id="firstSection">
           {/* PRIMERA PARTE */}
            <div style={{display: stepText >= 10 ? 'none' : 'flex', opacity: stepText >= 9 ? 0 : 1, transform: stepText >= 9 ? 'translateY(-300px)' : 'translateY(0px)'}} id="firstSectionPrimeraParte">
                    <video id="firstSectionVideoBg" autoPlay muted loop playsInline>
                        <source src="/espacio.mp4" type="video/mp4" />
                    </video>
                <div id="firstSectionVideoContainer">
                </div>
                <div className="firstSectionTexts">
                    <TextUp text={"Every day, "} fontSize={24} active={stepText >= 1 ? true : false} />
                    <TextUp negrita={true} text={"without thinking, "} fontSize={24} active={stepText >= 2 ? true : false} />
                    <TextUp negrita={true} text={"without knowing, "} fontSize={24} active={stepText >= 3 ? true : false} />
                </div>
                <div className="firstSectionTexts">
                    <TextUp text={"A"} fontSize={24} active={stepText >= 4 ? true : false} />
                    <TextUp negrita={true} text={"SATELLITE"} fontSize={24} active={stepText >= 5 ? true : false} />
                    <TextUp text={"MORE THAN 700 KILOMETERS ABOVE OUR HEADS QUIETLY WATCHES"} fontSize={24} active={stepText >= 6 ? true : false} />
                </div>
                <div className="firstSectionTexts">
                    <TextUp negrita={true} text={"THE PULSE OF THE EARTH."} fontSize={24} active={stepText >= 7 ? true : false} />
                </div>
                <div style={{alignItems: stepText >= 7 ? 'flex-end' : 'flex-start' }} id="loadingBarContainer">
                    <TextUp alignSelf={"flex-start"} text={"CARGANDO..."} fontSize={14} active={stepText >= 2 && stepText < 8 ? true : false} />
                    <div style={{width: stepText == 1 ? '40px' : stepText == 2 ? '66px' : stepText == 3 ? '122px' : stepText == 4 ? '170px' :  stepText == 5 ? '185px' : stepText == 6 ? '256px' :  stepText >= 7 ? '0px' : '0px'}} id="loadingBar"></div>
                </div>
            </div>


           {/* SEGUNDA PARTE */}
           <div style={{top: stepText >= 10 ? '0vh' : '100vh'}} id="firstSectionSegundaParte">
                <video ref={videoRef} style={{opacity: stepText >= 12 ? 1 : 0, transform: stepText >= 12 ? 'translateY(0vh)' : 'translateY(20vh)'}} id="firstSectionVideoBg" autoPlay muted loop playsInline>
                    <source src="/planetaGirando.mp4" type="video/mp4" />
                </video>
                <div style={{transform: stepText >= 10 ? 'translateY(0vh)' : 'translateY(100vh)'}} id="segundaParteTituloContainer">
                    <div style={{height: '20px'}} id="textUpContainer">
                        <p className="segundaParteTitulo" style={{transform: stepText >= 12 ? 'translateY(0px)' : 'translateY(60px)', fontSize: '25px', marginLeft: '18px', }} id="textUpText">25th ANIVERSARY</p>
                    </div>
                    <h2 className="segundaParteTitulo" style={{marginRight: '30px'}}>WONDERFULLY</h2>
                    <div style={{height: '275px'}} id="textUpContainer">
                        <p className="segundaParteTitulo" style={{transform: stepText >= 11 ? 'translateY(0px)' : 'translateY(275px)', fontSize: '315px', textShadow: '5px 5px 0px #000'}} id="textUpText">TERRA</p>
                    </div>
                </div>
                <Image style={{bottom: stepText == 11 || stepText == 12 ? '60vh' : stepText == 13 ?  '0vh' : '-100vh', width: stepText == 11 || stepText == 12 ? 50 : stepText >= 13 ? 330 : 1000, height: stepText == 11 || stepText == 12 ? 50 : stepText >= 13 ? 330 : 1000, left: stepText == 11 || stepText == 12 ? '110vw' : stepText == 13 ? '78vw' : '-120vh', filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 1)) brightness(0.8)'}} id="terraMoviendose" src={"/terra.png"} width={1000} height={1000} alt="terra" />
           </div>

           <p id="scrollDownAdvise" style={{opacity: stepText >= 13 ? 1 : 0}}>SCROLL DOWN</p>
    </section>
}