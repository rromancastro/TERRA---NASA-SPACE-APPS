"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer"

export const TwelfthSection = () => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return <section id="twelfthSection" className="instrumentSection">

        {/* IMAGENes fondo */}
        <Image src="/mopittBg2.jpg" id="mopittBg2" alt="mopittBg2" width={540} height={340} />
        <Image src="/mopittBg1.jpg" id="mopittBg1" alt="mopittBg1" width={540} height={340} />
        {/* IMAGENes fondo */}

        <div id="twelfthSectionTitleContainer" className="instrumentSectionTitleContainer">
            <p>INSTRUMENT</p>
            <div ref={ref} style={{height: '100px'}} id="textUpContainer">
                <h2 style={{transform: inView ? 'translateY(0px)' : 'translateY(100px)'}} className="instrumentSectionTitle">MOPITT</h2>
            </div>
            <p>Detecting the Invisible</p>
        </div>

        <p id="twelfthSectionText">MOPITT tracks carbon monoxide in the atmosphere, revealing how human activity leaves an invisible footprint. Its data enables the study of pollution from large fires, cities, and transportation, showing how gases move around the planet and impact daily life.</p>

        <p id="twelfthSectionCita" className="instrumentSectionCita">Photos captured by the <span>MOPITT</span> instrument.</p>
    </section>
}