import Image from "next/image"

export const FifteenthSection = () => {
    return <section id="fifteenthSection">
        <div className="userCard">
            <Image className="userCardImage" src="/alan.jpg" alt="Alan" width={200} height={200} />
            <h3>ALAN LEPEZ</h3>
            <p>YOUTH LEADER - EMOTIONAL EDUCATION TEACHER</p>
            <p>San Luis, Argentina</p>
            <p>alanlepezok@gmail.com</p>
        </div>
        <div className="userCard">
            <Image className="userCardImage" src="/roman.jpg" alt="Roman" width={200} height={200} />
            <h3>ROMAN CASTRO</h3>
            <p>FRONT-END DEVELOPER</p>
            <p>San Luis, Argentina</p>
            <p>rromancastro06@gmail.com</p>
        </div>
    </section>
}