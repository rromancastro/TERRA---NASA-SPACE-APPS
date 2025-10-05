"use client";
import { useInView } from "react-intersection-observer"

export const TwelfthSection = () => {

    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return <section className="instrumentSection">
        <div className="instrumentSectionTitleContainer">
            <p>INSTRUMENT</p>
            <div ref={ref} style={{height: '100px'}} id="textUpContainer">
                <h2 style={{transform: inView ? 'translateY(0px)' : 'translateY(100px)'}} className="instrumentSectionTitle">MOPITT</h2>
            </div>
            <p>Detecting the Invisible</p>
        </div>

        <p className="instrumentSectionCita">Photo captured by the <span>MOPITT</span> instrument.</p>
    </section>
}