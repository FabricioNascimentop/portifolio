'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Screen from './screen';

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
      >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
};