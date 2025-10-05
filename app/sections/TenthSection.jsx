"use client";
import { useInView } from "react-intersection-observer"

export const TenthSection = () => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return <section className="instrumentSection">
        <div className="instrumentSectionTitleContainer">
            <p>INSTRUMENT</p>
            <div ref={ref} style={{height: '100px'}} id="textUpContainer">
                <h2 style={{transform: inView ? 'translateY(0px)' : 'translateY(100px)'}} className="instrumentSectionTitle">MODIS</h2>
            </div>
            <p>The Earth's Daily Chronicler</p>
        </div>

        <p className="instrumentSectionCita">Photo captured by the <span>MODIS</span> instrument.</p>
    </section>
}