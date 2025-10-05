"use client";
import { useInView } from "react-intersection-observer"

export const EighthSection = () => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return <section className="instrumentSection">
        <div className="instrumentSectionTitleContainer">
            <p>INSTRUMENT</p>
            <div ref={ref} style={{height: '100px'}} id="textUpContainer">
                <h2 style={{transform: inView ? 'translateY(0px)' : 'translateY(100px)'}} className="instrumentSectionTitle">MISR</h2>
            </div>
            <p>The Gaze That Analyzes Every Angle</p>
        </div>

        <p className="instrumentSectionCita">Photo captured by the <span>MISR</span> instrument.</p>
    </section>
}