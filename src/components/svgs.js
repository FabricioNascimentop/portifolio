'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Screen from './pc/screen';

export const LoadingSvg = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="divLoading">
      <AnimatePresence>
        {visible ? (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 303 184"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.circle
              cx="150"
              cy="75"
              r="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="100, 40"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
            <motion.text x="150" y="130" fill="currentColor" textAnchor="middle" className="loading_text">
              loading
            </motion.text>
          </motion.svg>
        ): <Screen/>}
      </AnimatePresence>
    </div>
  );
};

export const SvgFechar = ({ size = 50, color = 'white'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className='fechar_svg'
      >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
};

export const SVGAquarela = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '6rem', width: '6rem', color: '#666666', marginBottom: '1.5rem' }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {/* Cabo do pincel */}
            <path d="M12 2L12 18"></path>
            {/* Cerdas do pincel */}
            <path d="M10 18H14L12 22Z"></path>
            {/* Detalhe da tinta/aquarela */}
            <path d="M16 10C16 12.21 15.105 14.105 14 15C12.895 14.105 12 12.21 12 10C12 7.79 12.895 5.895 14 5C15.105 5.895 16 7.79 16 10Z" fill="currentColor" stroke="none"></path>
            <path d="M8 10C8 12.21 8.895 14.105 10 15C11.105 14.105 12 12.21 12 10C12 7.79 11.105 5.895 10 5C8.895 5.895 8 7.79 8 10Z" fill="currentColor" stroke="none"></path>
            <path d="M12 10C12 12.21 12.895 14.105 14 15C15.105 14.105 16 12.21 16 10C16 7.79 15.105 5.895 14 5C12.895 5.895 12 7.79 12 10Z" fill="currentColor" stroke="none"></path>
        </svg>
    );
};

export const SVGEngrenagem = () => {
  return(
    <svg
              xmlns="http://www.w3.org/2000/svg"
              className="option-icon icon-color-primary"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 
                0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 
                0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 
                1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 
                0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 
                1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 
                0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 
                1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 
                0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 
                1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 
                0 1.82.33H9a1.65 1.65 0 0 0 1.51-1V3a2 2 0 0 
                1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 
                1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 
                1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 
                0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 
                1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
              ></path>
            </svg>
  )
}