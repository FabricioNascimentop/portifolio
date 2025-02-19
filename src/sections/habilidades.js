"use client"
import { useState } from 'react'
import textos from '../textos.json'
import { BostaoLigar } from '@/components/botoes'

export default function Habilidades(){
    var lang = 'pt'
    const [backend, setBackend] = useState()
    return(
        <div className="habilidades">
              <h2>{textos[lang].h2[1]}</h2>
              {backend ? <Computador pc={pc} setPc={setPc}/> : <ShowBackend backend={backend} setBackend={setBackend}/>}
        </div>
    )
}

function ShowBackend({backend, setBackend}){
    return(
      <div className="showBackend">
        <BostaoLigar item={backend} setItem={setBackend} part='gabinete'/>
      </div>
    )
  }

function Computador({backend, setBackend}){
const [tela, setTela] = useState(false);
return (
    <div className="pc">
    <p>Frontend</p>

    {/* Monitor */}
    <div className={tela ? "telaOn" : "telaOff"}>
    {tela && (
        <div style={{width: '25%', height:'50%'}}>
            <LoadingSvg/>
        </div>
    )}
    </div>

    {/* Botão para o monitor */}
    <div className="cont-botao-monitor">
    <BostaoLigar item={tela} setItem={setTela} part="monitor" />
    </div>

    {/* Gabinete */}
    <div className="gabinete">
    <div className="cont-botao-gabinete">
        <BostaoLigar item={backend} setItem={setBackend} part="gabinete" />
    </div>
    <p>Backend</p>
    </div>

    
</div>
)
}
  