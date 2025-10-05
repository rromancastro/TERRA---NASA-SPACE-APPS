"use client";
import { useInView } from "react-intersection-observer"

export const FourthSection = () => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return <section id="fourthSection" className="instrumentSection">
        <div className="instrumentSectionTitleContainer">
            <p>INSTRUMENT</p>
            <div ref={ref} style={{height: '100px'}} id="textUpContainer">
                <h2 style={{transform: inView ? 'translateY(0px)' : 'translateY(100px)'}} className="instrumentSectionTitle">ASTER</h2>
            </div>
            <p>The Eye That Reveals the Secrets of the Earth</p>
        </div>

        <p id="fourthSectionText">
            ASTER combines VNIR, SWIR, and TIR telescopes to reveal global topographic maps, stereoscopic models, and monitoring of volcanoes and glaciers. Each pixel uncovers hidden secrets: fields, forests, and crops. ASTER transforms the vastness of the Earth into clear and precise information. Its Global Digital Elevation Model (GDEM) spans the entire land surface, a feat that has revolutionized world cartography.
        </p>

        <p style={{bottom: '33%'}} className="instrumentSectionCita">Photo captured by the <span>ASTER</span> instrument.</p>
    </section>
}