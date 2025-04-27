"use client"
import { useState } from "react";

import { BostaoIdioma } from "@/components/botoes";

import Inicio from "@/sections/inicio";
import Sobre from "@/sections/sobre";
import Projetos, {AutoCar, ProjectRenderer} from "@/sections/projetos";
import Contatos from "@/sections/contatos";
  export default function App(){
  const [lang,setLang] = useState('pt')
  return(
    <>
    <BostaoIdioma onToggle={setLang}/>

    <Inicio lang={lang}/>
    <Sobre lang={lang}/>

    <Projetos lang={lang}>

      <AutoCar/>

    </Projetos>

    <Contatos lang={lang}/>

    <div style={{height: '200px'}}></div>
    </>
  )
}
