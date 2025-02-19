"use client"
import { useState } from "react";

import { BostaoIdioma } from "@/components/botoes";

import Inicio from "@/sections/inicio";
import Sobre from "@/sections/sobre";
import Projetos from "@/sections/projetos";
import Contatos from "@/sections/contatos";
import AutoCar from "@/components/projetos/AutoCar";
import TodoBook from "@/components/projetos/todoBook";

export default function App(){
  const [lang,setLang] = useState('pt')
  return(
    <>
    <BostaoIdioma onToggle={setLang}/>

    <Inicio lang={lang}/>
    <Sobre lang={lang}/>

    <Projetos lang={lang}>

      <AutoCar/>
      <TodoBook/>

    </Projetos>

    <Contatos lang={lang}/>

    <div style={{height: '200px'}}></div>
    </>
  )
}
