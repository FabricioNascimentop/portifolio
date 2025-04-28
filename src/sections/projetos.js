import textos from '../textos.json'
import React from 'react';
import '../styles/projetos.css'
import textos_projetos from '../textos_projetos.json'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function Projetos({ lang, children }) {
  return (
      <>
          <h2>{textos[lang].nav[2]}</h2>
          <section className='projetos'>
          {children}
          </section>
      </>
  );
}

export function AutoCar(){
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return(
    <div className='AutoCar'>
      <h3>AutoCar</h3>
      <Swiper
        pagination={pagination}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
              <SwiperSlide>
                <AutoCarView page='/'/>
             </SwiperSlide>
              <SwiperSlide>
                <AutoCarView page='contatos'/>
             </SwiperSlide>
              <SwiperSlide>
                <AutoCarView page='carros'/>
             </SwiperSlide>
              <SwiperSlide>
                <AutoCarView page='/carros/Nissan%20Altima?id=1'/>
             </SwiperSlide>
              <SwiperSlide>
                <AutoCarView page='/editar/Nissan Altima?id=1'/>
             </SwiperSlide>
              <SwiperSlide>
                <AutoCarView page='adicionar carro'/>
             </SwiperSlide>

      </Swiper>
      

    </div>
  )
}
function AutoCarView({page}){
  const src = `https://autocar-zojn.onrender.com/${page}`
  let sic
  if(page == '/'){
    sic = 'home'
  }
  else if(page == '/carros/Nissan%20Altima?id=1'){
    sic = 'detalhes carro exemplo'
  }
  else if(page == '/editar/Nissan Altima?id=1'){
    sic = 'editar carro exemplo'
  }
  else{
    sic = page
  }
  return(
        <div className='sliderViewer'>

          <div className='container-iframe'>
            <iframe id='contentFrame' src={src}/>
          </div>

          <div className='container-project-ego'>
              <div>
                <h2>{sic}</h2>
            <div>
              <p>{textos_projetos['autocar'].pt[sic].i1}</p>
            </div>
              </div>
            <div>
              <h2 style={{textAlign:'left'}}>Descrição:</h2>
              <h3>{textos_projetos['autocar'].pt[sic].i2}</h3>
            </div>
            <div>
              <p>{textos_projetos['autocar'].pt[sic].i3}</p>
              <br/>
              <p>para melhor visualização do projeto completo clique <a href='https://autocar-zojn.onrender.com/login recrutador' target='_blank'>aqui</a></p>
            </div>
          </div>

        </div>
  )
}

