import { motion } from 'framer-motion';
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Text } from "@react-three/drei";
import { SvgFechar,LoadingSvg } from './svgs';


export default function Screen({state, lang}) {
  const [showOS, setShowOS] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOS(true);
    }, 1750);

    return () => clearTimeout(timer);
  }, []);

  return <>{showOS ? <OsContent onToggle={() => {state(false)}} lang={lang}/> : <LoadingSvg />}</>;
}


function OsContent({onToggle, lang}){
    return(
        <motion.div
        initial={{opacity:0, top:'-250px'}}
        animate={{transition: {duration: 1}, opacity:1, width:'900px',height:'800px',top:'-125px',left:'20%'}}
        className='telaContent'
        onAnimationStart={() => {window.scrollTo({top:465, behavior:'smooth'})}}>

                  <div className='close'>
                      <SpaceOS lang={lang}/>
                      <div onClick={() => {onToggle(false)}}><SvgFechar/></div>
                  </div>
                
        </motion.div>
    )
}
function SpaceOS({lang}) {
    const numCubes = 12; // Número de cubos
    const colors = ["cyan", "pink", "brown", "gray", "red", "blue", "yellow", "purple", "green", "orange", "white", "magenta"];
    const texts = ["HTML","CSS","Javascript","React","Next.js","Vite","Design responsivo","Mobile-First","Media Query","Tailwind","Sass","Styled Components"];
    if(lang == 'en'){
      texts[6] = "Responsive Design"
    }
    return (
      <Canvas 
      style={{ backgroundColor: "black" }}
      camera={{ position: [0, 0, 20] }}>
  
  
        <directionalLight position={[8, 0, 0]} intensity={1} />
        <directionalLight position={[-8, 0, 0]} intensity={1} />
  
  
        <directionalLight position={[0, 0, 16]} intensity={1} />
        <Stars/>
        <ambientLight intensity={0.3} />
        <OrbitControls />
  
  
        <Planet position={[0,0,0]} size={4} color={"gray"} lang={lang}/>
        {Array.from({ length: numCubes }).map((_, i) => (
          <Cube 
            key={i} 
            angleOffset={(i / numCubes) * Math.PI * 2} 
            size={[2, 1, 1]} 
            color={colors[i % colors.length]} 
            texto={texts[i]}
          />
        ))}
      
      </Canvas>
    );
  }
  
  function Cube({ angleOffset, size, color,texto }) {
    const ref = useRef();
  
    useFrame(({ clock }) => {
      const t = clock.elapsedTime;
      const radius = 10;
      const speed = 0.1;
  
      ref.current.position.x = Math.cos(t * speed + angleOffset) * radius;
      ref.current.position.z = Math.sin(t * speed + angleOffset) * radius;
  
      ref.current.lookAt(0,0,0);
    });
  
    return (
      <group ref={ref}>
        {/* Cubo */}
        <mesh>
          <boxGeometry args={size} />
          <meshStandardMaterial color={color} />
        </mesh>
  
        {/* Texto */}
        <Text 
          position={[0, 0, -0.75]}
          fontSize={0.5} 
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.1}
          outlineColor="black"
          scale={[-1, 1, 0]}
        >
          {texto}
        </Text>
      </group>
    );
  }
  
  function Planet({ position, size, color, lang }) {
    const textScreen = lang === 'pt' ? "Minhas Habilidades Frontend" : "My Frontend Skills";

    const ref = useRef();
    const refGroup = useRef()
    const camera = useThree((state) => state.camera);
    
    useFrame(({ clock }) => {
      ref.current.rotation.y = clock.elapsedTime * 0.5;
      ref.current.rotation.x = clock.elapsedTime * 0.3;
      refGroup.current.lookAt(camera.position)
    });
    return (
      <group ref={refGroup}>
        <mesh ref={ref} position={position}>
          <icosahedronGeometry args={[size, 1]} />
          <meshStandardMaterial color={color} wireframe />
        </mesh>
        <Text
        position={[0, 5, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.1}
        outlineColor="black"
        >
          {textScreen}
        </Text>
      </group>
    );
  }
  