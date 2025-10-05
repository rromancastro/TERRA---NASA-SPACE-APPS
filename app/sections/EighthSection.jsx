"use client";
import { useInView } from "react-intersection-observer"

export const EighthSection = () => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return <section id="eighthSection" className="instrumentSection">
        <div className="instrumentSectionTitleContainer">
            <p>INSTRUMENT</p>
            <div ref={ref} style={{height: '100px'}} id="textUpContainer">
                <h2 style={{transform: inView ? 'translateY(0px)' : 'translateY(100px)'}} className="instrumentSectionTitle">MISR</h2>
            </div>
            <p>The Gaze That Analyzes Every Angle</p>
        </div>

        <p id="eighthSectionText">With nine cameras, MISR captures multi-angle images of light reflected by clouds, aerosols, and the Earth’s surface. It detects pollution, tracks the height of aerosol plumes, and studies wind and cloud movements. MISR transforms every angle into vital information for climate and environmental science.</p>

        <p id="eightSectionCita" className="instrumentSectionCita">Photo captured by the <span>MISR</span> instrument.</p>
    </section>
}