import Image from "next/image"

export const NavBar = () => {
    return <nav>
        <div id="navLogos">
            <Image className="navLogo" src="/spaceappsLogo.png" alt="space apps logo" width={50} height={50} />
            <Image className="navLogo" src="/nasaLogo.png" alt="space apps logo" width={50} height={50} />
        </div>
    </nav>
}