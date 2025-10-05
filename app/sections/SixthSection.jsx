"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer"

export const SixthSection = () => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return <section id="sixthSection" className="instrumentSection">

        {/* IMAGENes fondo */}
        <Image id="sixthSectionImageBg2" src="/sixthSectionBg2.jpg" width={1080} height={1080} alt="sixthSectionBg" />
        <Image id="sixthSectionImageBg1" src="/sixthSectionBg1.png" width={1080} height={1080} alt="sixthSectionBg" />
        {/* IMAGENes fondo */}

        <div className="instrumentSectionTitleContainer">
            <p>INSTRUMENT</p>
            <div ref={ref} style={{height: '100px'}} id="textUpContainer">
                <h2 style={{transform: inView ? 'translateY(0px)' : 'translateY(100px)'}} className="instrumentSectionTitle">CERES</h2>
            </div>
            <p>Guardian of the Earth's Energy Balance</p>
        </div>

        <p id="sixthSectionText">CERES measures the energy entering and leaving the Earth, showing how the planet responds to solar radiation. By combining its data with other satellites, CERES creates an unprecedented record of the Earth’s radiation budget, revealing global trends and subtle changes that impact our climate.</p>

        <p className="instrumentSectionCita">Photos captured by the <span>CERES</span> instrument.</p>
    </section>
}