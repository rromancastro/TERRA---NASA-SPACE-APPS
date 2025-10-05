"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer"

export const TenthSection = () => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return <section id="tenthSection" className="instrumentSection">

        {/* IMAGENes fondo */}
        <Image src="/modisBg1.jpg" id="modisBg1" alt="modisBg1" width={240} height={240} />
        <Image src="/modisBg2.jpg" id="modisBg2" alt="modisBg2" width={240} height={240} />
        <Image src="/modisBg3.jpg" id="modisBg3" alt="modisBg3" width={240} height={240} />
        <Image src="/modisBg4.jpg" id="modisBg4" alt="modisBg4" width={240} height={240} />
        <Image src="/extraModis1.jpg" id="extraModis1" alt="extraModis1" width={200} height={200} />
        <Image src="/extraModis2.jpg" id="extraModis2" alt="extraModis2" width={200} height={200} />
        <Image src="/extraModis3.jpg" id="extraModis3" alt="extraModis3" width={200} height={200} />
        {/* IMAGENes fondo */}

        <div className="instrumentSectionTitleContainer">
            <p>INSTRUMENT</p>
            <div ref={ref} style={{height: '100px'}} id="textUpContainer">
                <h2 style={{transform: inView ? 'translateY(0px)' : 'translateY(100px)'}} className="instrumentSectionTitle">MODIS</h2>
            </div>
            <p>The Earth's Daily Chronicler</p>
        </div>

        <p id="tenthSectionText">MODIS captures daily images of nearly every <br /> corner of the planet across 36 spectral bands. It monitors vegetation, oceans, ice, fires, and natural disasters. Its data is available almost in real time, enabling rapid responses to emergencies and detailed analyses of global changes.</p>

        <p style={{right: 'auto'}} className="instrumentSectionCita">Photos captured by the <span>MODIS</span> instrument.</p>
    </section>
}