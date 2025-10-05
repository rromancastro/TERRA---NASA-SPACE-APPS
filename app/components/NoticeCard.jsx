import Image from "next/image"

export const NoticeCard = ({title, text, link, photo}) => {
    return <article className="noticeCard">
        <Image src={photo} alt={title} width={300} height={200} className="noticeCardImage" />
        <div className="noticeCardContent">
            <h3>{title}</h3>
            <p>{text}</p>
            <a target="_blank" href={link}>Read more</a>
        </div>
    </article>
}