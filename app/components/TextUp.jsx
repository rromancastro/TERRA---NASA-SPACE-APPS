export const TextUp = ({fontSize, text, active, negrita = false}) => {
    return <div style={{fontSize: fontSize, height: `${Number(fontSize)}px`}} id="textUpContainer">
        <p style={{transform: !active ? `translateY(${fontSize}px)` : 'translateY(0px)', fontFamily: negrita ? 'Fira Sans Medium' : 'Fira Sans Light'}} id="textUpText">{text}</p>
    </div>
}