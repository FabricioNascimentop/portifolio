import Header from "@/components/header"
import Aside from "@/components/aside"
import '../styles/main.css'
export default function Home(){
  return(
    <>
    <Header/>
    <Aside/>
    <main>
      <div className="titulo">
        <div className="info">
          <h2>Bosco Fabrício Cabral Nascimento</h2>
          <p>fullstack developer</p>
        </div>
        <div className="image"></div>
      </div>
      <div className="sobre">
        <h2>Sobre mim</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in dui vehicula, vulputate eros at, maximus dui. Morbi porta mi sit amet nisl laoreet, nec iaculis tortor feugiat. Phasellus dignissim aliquam sem feugiat interdum.
        </p>          
      </div>
      <div className="habilidades">
        <div className="frontend">
          <h2>Frontend</h2>
          <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin in dui vehicula, vulputate eros at, maximus dui.</p>
          <h3>Tecnologias que domino</h3>
            <div className="items">
              <div className="sla">
                <div>HTML</div> <div>CSS</div> <div>Javascript</div>
                <div>HTML</div> <div>CSS</div> <div>Javascript</div>
                <div>HTML</div> <div>CSS</div> <div>Javascript</div>
                <div>HTML</div> <div>CSS</div> <div>Javascript</div>
              </div>
            </div>
          
        </div>
        <div className="backend">
          <h2>Backend</h2>
          <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin in dui vehicula, vulputate eros at, maximus dui.</p>
        </div>
        <div className="outros">
          <h2>Utilidades</h2>
          <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin in dui vehicula, vulputate eros at, maximus dui.</p>
        </div>
      </div>
    </main>
    </>
  )
}