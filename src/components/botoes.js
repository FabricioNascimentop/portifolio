"use client"
import { useState } from "react";
import * as motion from "motion/react-client"
import styles from '../styles/components.module.css'


export function BostaoIdioma({onToggle}) {
    const [isOn, setIsOn] = useState(true)
    const toggleSwitch = () => setIsOn(!isOn)
    return (
        <div className={styles.btnLang} onClick={() => {
            onToggle(prev => prev === 'pt' ? 'en' : 'pt');
        }}>
        <p>Português</p>
        <button
            style={{
                ...container,
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
                style={{
                    width: 40,
                    height: 40,
                    backgroundImage: isOn ? "url(/Brasil.png)" : "url('/eua.png')",
                }}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.4,
                    bounce: 0.2,
                }}
            />
        </button>
        <p>Inglês</p>
        </div>
    )
}
const container = {
    width: 150,
    height: 50,
    backgroundColor: "var(--hue-3-transparent)",
    borderRadius: 5,
    cursor: "pointer",
    display: "flex",
    padding: 10,
    alignItems: 'center'
}
export function BostaoLigar({item, setItem}){
    const [isOn, setIsOn] = useState(false);
    const handleClick = () => {
        const newState = !isOn
        setIsOn(newState);
        setItem(!item);
    };
  
    return (
      <div>
          <button
            onClick={handleClick}
            style={{'backgroundColor': 'transparent',
              'border': 'none'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
              fill="transparent"
            >
              <path d="M12 2v8m5.657-5.657A8 8 0 1 1 6.343 4.343" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M12 2v8m5.657-5.657A8 8 0 1 1 6.343 4.343" stroke="black" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </button>
      </div>
    );
  };
  