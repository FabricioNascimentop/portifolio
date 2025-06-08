import { useState } from "react";
import Screen from "./pc/screen";
import { BostaoLigar } from "./botoes";


export function Computador({lang}){
const [tela, setTela] = useState(false);
return (
    <div className="pc">
    <p>Frontend</p>

    {/* Monitor */}
    <div className={tela ? "telaOn" : "telaOff"}>
    {tela && <Screen state={setTela} lang={lang}/>}
    </div>

    {/* Botão para o monitor */}
    <div className="cont-botao-monitor">
    <BostaoLigar item={tela} setItem={setTela} part="monitor" />
    </div>
</div>
)
}

