import Aside from "@/components/aside";
import imagem from '../../public/fabricio.png'
import textos from '../textos.json'

import '../styles/inicio.css'

export default function Inicio({lang}){
    return(
        <>
        <header>
            <nav>
                <h3 className="nav-h3">{textos[lang].nav[0]}</h3>
                <h3 className="nav-h3">{textos[lang].nav[1]}</h3>
                <h3 className="nav-h3">{textos[lang].nav[2]}</h3>
                <h3 className="nav-h3">{textos[lang].nav[3]}</h3>
            </nav>
        </header>
        <div className="titulo">
            <div className="info">
            <h2>Bosco Fabrício Cabral Nascimento</h2>
            <p>fullstack developer</p>
            </div>
            <div className="image"><img src={imagem.src} alt="" /></div>
        </div>
        </>
    )
}