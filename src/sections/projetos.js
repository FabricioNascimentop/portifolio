import '../styles/experiencia.css'
import textos from '../textos.json'
export default function Projetos({lang, children}){
    const [child1, child2] = children;
    return(
        <>
        <h2>{textos[lang].nav[2]}</h2>
        <section className="autoCar">
            {child1}
        </section>

        <section className="todoBook">
            {child2}
        </section>
        </>
    )
}