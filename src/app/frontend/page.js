"use client";
import { OrbitControls, Text as DreiText, Stars} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import '../../styles/frontend.css'

export default function Frontend(){
    let lang = 'pt'

    const numCubes = 12; 
    const colors = ["cyan", "pink", "brown", "gray", "red", "blue", "yellow", "purple", "green", "orange", "white", "magenta"];

    const texts = ["React","Next.js","Vite","Design responsivo","Mobile-First","Media Query","Tailwind","Sass","Styled Components"];

    if(lang === 'en'){
      texts[6] = "Responsive Design"
    }

    return (
      <Canvas 
      style={{ backgroundColor: "black", height: '45vw'}}
      camera={{ position: [0, 0, 15] }}>
  
  
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
            size={[2.5, 1, 1]} 
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
        <DreiText 
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
        </DreiText>
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

        <DreiText
        position={[0, 5, 0]}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.1}
        outlineColor="black"
        >
          {textScreen}
        </DreiText>
      </group>
    );
  }