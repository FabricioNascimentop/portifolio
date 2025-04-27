import textos from '../textos.json'
import React from 'react';
import '../styles/projetos.css'

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
                <AutoCarView page='/adicionar carro'/>
             </SwiperSlide>
              <SwiperSlide>
                <AutoCarView page='/editar/Nissan Altima?id=1'/>
             </SwiperSlide>

      </Swiper>
      

    </div>
  )
}
function AutoCarView({page}){
  const src = `https://autocar-zojn.onrender.com/${page}`
  return(
        <div className='sliderViewer'>

          <div className='container-iframe'>
            <iframe id='contentFrame' src={src}/>
          </div>

          <div className='container-project-ego'>
          </div>

        </div>
  )
}

