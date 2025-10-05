export const TextUp = ({fontSize, text, active, negrita = false, alignSelf = null}) => {
    return <div style={{fontSize: fontSize, height: `${Number(fontSize + 4)}px`, alignSelf: alignSelf}} id="textUpContainer">
        <p style={{transform: !active ? `translateY(${fontSize + 4}px)` : 'translateY(0px)', fontFamily: negrita ? 'Fira Sans Medium' : 'Fira Sans Light'}} id="textUpText">{text}</p>
    </div>
}