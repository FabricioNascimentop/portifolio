"use client"
import '../styles/sobre.css'
import textos from '../textos.json'
import { Computador } from '@/components/computador';

export default function Sobre({lang}){
    return (
        <section className="sobre_mim">

            <div className="texto">

                    <h2>{textos[lang].h2[0]}</h2>
                    <p>{textos[lang].sobremim}</p>

            </div>

            <div className="habilidades">

                <h2>{textos[lang].h2[1]}</h2>

                
                <Computador lang={lang}/>

            </div>
        </section>
    )
}





  