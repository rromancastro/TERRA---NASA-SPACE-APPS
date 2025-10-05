import { NoticeCard } from "../components/NoticeCard"

export const ThirteenthSection = () => {
    return <section id="thirteenthSection">
        <div id="thirteenthSectionTitleContainer">
            <h2>
                GLOBAL
            </h2>
            <h2>
                IMPACT
            </h2>
        </div>
        <div id="thirteenthSectionCards">
            <NoticeCard title="NASA's Terra satellite tracks global pollution (2004)" text="Data from NASA's Terra satellite is adding to our understanding of how pollution spreads around the globe. The information will help scientists protect and understand the Earth." link={"https://spaceflightnow.com/news/n0405/18terra/?utm_source=chatgpt.com"} photo={"/notices/notice1.jpg"} />
            <NoticeCard title="NASA captures images of the unusual phenomenon that turns the Sahara Desert green." text="NASA's Terra satellite's Moderate Resolution Imaging Spectroradiometer (MODIS) captured this false-color image (with highlighted circles) of the runoff and resulting floodwaters on September 10, 2024. The other image shows the same area on August 14, before the storms." link={"https://www.huffingtonpost.es/global/la-nasa-capta-imagenes-particular-fenomeno-tine-verde-desierto-sahara.html?utm_source=chatgpt.com"} photo={"/notices/notice2.jpeg"} />
            <NoticeCard title="NASA’s ASTER Sees Arizona’s Bighorn Fire Burn Scar From Space" text="NASA’s Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER) instrument imaged areas burned by the Bighorn Fire north of Tucson, Arizona, on June 29. Vegetation is shown in red and burned areas are shown in dark gray. It covers an area of 20 by 30 miles (33 by 48 kilometers)." link={"https://spaceflightnow.com/news/n0405/18terra/?utm_source=chatgpt.com"} photo={"/notices/notice3.jpg"} />
            <NoticeCard title="From Space and in the Air, NASA Tracks California’s Wildfires" text="Captured by the ASTER instrument aboard NASA’s Terra satellite, this false-color map shows the burn area of the River and Carmel fires in Monterey County, California. Vegetation (including crops) is shown in red; the burn area (dark blue/gray) is in the center of the image." link={"https://spaceflightnow.com/news/n0405/18terra/?utm_source=chatgpt.com"} photo={"/notices/notice4.webp"} />
        </div>
    </section>
}