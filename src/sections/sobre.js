"use client"
import { useState } from 'react'
import { BostaoLigar } from '@/components/botoes'
import { cubicBezier, motion } from 'framer-motion';
import Screen from '@/components/screen';
import '../styles/sobre.css'
import textos from '../textos.json'

export default function Sobre({lang}){
    const [showBackend, setShowBackend] = useState()
    return (
        <section className="sobre_mim">

            <div className="texto">

                    <h2>{textos[lang].h2[0]}</h2>
                    <p>{textos[lang].sobremim}</p>

            </div>

            <div className="habilidades">

                <h2>{textos[lang].h2[1]}</h2>

                {showBackend ? 
                <ShowBackend backend={showBackend} setBackend={setShowBackend}/>
                : 
                <Computador backend={showBackend} setBackend={setShowBackend} lang={lang}/>}

            </div>
        </section>
    )
}


function ShowBackend(){
    return(
        <div className="pc-2">
        <motion.div
          className="showBackend"
          animate={{ rotateY: "90deg", left: "-200px" }}
          transition={{
            rotateY:{duration:1.43,ease:"easeOut"},
            left:{duration:3.1}
          }}
        ></motion.div>
      
        <motion.div
          className="pcdentro"
          style={{ rotateY: "-180deg" }}
          animate={{ width: "300px", rotateY: "-180deg", left: "170px" }}
          transition={{
            width: { duration: 1.5 },
            left: { duration: 1.3, ease: cubicBezier(0.166,0.0772,0.249,0.238) },
            rotateY: { duration: 14},
          }}
        ></motion.div>
      </div>
    )
  }

function Computador({backend, setBackend, lang}){
const [tela, setTela] = useState(false);
return (
    <div className="pc">
    <p>Frontend</p>

    {/* Monitor */}
    <div className={tela ? "telaOn" : "telaOff"}>
    {tela && (
            <Screen state={setTela} lang={lang}/>
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
  