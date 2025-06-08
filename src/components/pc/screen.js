import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { SvgFechar,LoadingSvg } from '../svgs';
import { Palette, Settings } from 'lucide-react';


import textos from '../../textos.json'
import { useRouter } from 'next/navigation';

export default function Screen({state, lang}) {
  const [showOS, setShowOS] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOS(true);
    }, 1750);

    return () => clearTimeout(timer);
  }, []);

  return <>{showOS ? <ChooseOS  onToggle={() => {state(false)}} lang={lang}/> : <LoadingSvg />}</>;
}


function ChooseOS({ onToggle, lang }) {
  const containerRef = useRef();
  const router = useRouter()

  const handleSelect = (rote) => {
    router.push(`/${rote}`);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, top: '-250px' }}
      animate={{
        transition: { duration: 1 },
        opacity: 1,
        width: '900px',
        height: '800px',
        top: '-125px',
        left: '20%'
      }}
      className='telaContent'>
      
      <div className={containerRef ? 'ChooseOsContainer abrido': 'ChooseOsContainer'}>
        <h2>{textos[lang].OS}</h2>
        
        <div ref={containerRef} className="option-card-container">
      {/* ========== CARD BACKEND ========== */}
      <div
        className="option-card backend"
        onClick={() => handleSelect('backend')}
      >
        <Settings size={96} />
        <span className="option-label">Backend</span>
      </div>

      {/* ========== CARD FRONTEND ========== */}
      <div
        className="option-card frontend"
        onClick={() => handleSelect('frontend')}
      >
        <Palette size={96} />
        <span className="option-label">Frontend</span>
      </div>
    </div>
        
        <div onClick={() => onToggle(false)}>
          <SvgFechar />
        </div>
      </div>
    </motion.div>
  );
}


