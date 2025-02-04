import Header from "@/components/header"
import Aside from "@/components/aside"
import '../styles/main.css'
import imagem from '../../public/fabricio.png'
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
        <div className="image"><img src={imagem.src} alt="" /></div>
      </div>
      <div className="sobre">
        <h2>Sobre mim</h2>
        <p>Olá, Me chamo Fabrício, tenho 20 anos, <span>ensino médio completo pelo IFPA</span>, atualmente estou no <span>1° semestre de economia na UFPA</span>, tenho muito gosto por resolver problemas e vejo a tecnologia como um meio para tal, busco uma oportunidade de ter o meu primeiro emprego formal</p>          
      </div>
      <div className="habilidades">
        <div className="frontend">
          <h2>Frontend</h2>
          <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin in dui vehicula, vulputate eros at, maximus dui.</p>
          <h3>Tecnologias que domino</h3>
            <div className="items">

                <div className="row">
                  <div>HTML</div> <div>CSS</div> <div>Javascript</div>
                </div>

                <div className="row">
                  <div>React</div> <div>Next.js</div> <div>Vite</div>
                </div>

                <div className="row">
                  <div>Design responsivo</div> <div>Mobile-First</div> <div>Media Query</div>
                </div>

                <div className="row">
                  <div>Tailwind</div> <div>Sass</div> <div>Styled Components</div>
                </div>
            </div>
          
        </div>
        <div className="backend">
          <h2>Backend</h2>
          <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin in dui vehicula, vulputate eros at, maximus dui.</p>
          <h3>Tecnologias que domino</h3>
            <div className="items">

                <div className="row">
                  <div>Python</div> <div>Flask</div> <div>PHP básico</div>
                </div>

                <div className="row">
                  <div>MySQL</div> <div>SQLalchemy</div> <div>OAuth</div>
                </div>

                <div className="row">
                  <div>HTTPS</div> <div>CORS</div> <div>APIREST</div>
                </div>

                
            </div>
        </div>
        <div className="outros">
          <h2>Outros</h2>
          <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin in dui vehicula, vulputate eros at, maximus dui.</p>
          <h3>Tecnologias que domino</h3>
            <div className="items">

                <div className="row">
                  <div>Docker</div> <div style={{textWrap:'nowrap'}}>Git e github</div> <div>Scrum</div>
                </div>
                
                <h3 className="detalhes">Linguas</h3>
                <div className="row">
                  <div>Português</div> <div>Inglês</div> <div>Alemão</div>
                </div>
                <h3 className="detalhes">Conhecimentos úteis</h3>
                <div className="row">
                  <div>Linux e CLI</div>  <div>NPM, Yarn e pip</div>
                </div>
                <h3 className="detalhes">Habilidades úteis</h3>
                    <p>Experiência em atendimento ao público</p>
                    <p>Facilidade com oratória</p>
                    <p>Facilidade com trabalhos em equipe</p>

            </div>
        </div>
      </div>
    </main>
    </>
  )
}