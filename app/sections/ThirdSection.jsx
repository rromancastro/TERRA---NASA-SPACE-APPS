import Image from "next/image"

export const ThirdSection = () => {
    return <section id="thirdSection">

        <Image src="/terraInstruments.png" id="thirdSectionImage" width={1080} height={1080} alt="terraInstruments" />

        <div id="thirdSectionCardsContainer">
            <article className="thirdSectionCard">
                <h3>ASTER</h3>
                <p>detects the terrain and surface details</p>
            </article>

            <article className="thirdSectionCard">
                <h3>CERES</h3>
                <p>measures the energy entering and leaving the Earth</p>
            </article>

            <article className="thirdSectionCard">
                <h3>MISR</h3>
                <p>observes the atmosphere from multiple angles, detecting aerosols and clouds</p>
            </article>

            <article className="thirdSectionCard">
                <h3>MODIS</h3>
                <p>onitors daily changes on land, in the oceans, and in the atmosphere</p>
            </article>

            <article className="thirdSectionCard">
                <h3>MOPITT</h3>
                <p>tracks carbon monoxide, revealing how pollution travels around the planet</p>
            </article>
        </div>

        <div id="thirdSectionTextContainer">
            <h2>Five eyes, one planet, infinite revelations.</h2>
            <p>Terra is not alone: five exceptional instruments work together to uncover secrets the human eye could never see.</p>
        </div>

        <p id="thirdSectionCita">Photo captured by the <span>MODIS</span> instrument.</p>
    </section>
}