import './App.css'
import Pokedex from './components/Pokedex'
import Header from './components/Header'
import Footer from './components/Footer'
import Logo from './components/Logo'
import { motion } from 'framer-motion'
import { useState, useEffect} from 'react'
import styled from 'styled-components'

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 4px solid black;
  border-top: 4px solid red;
  border-radius: 50%;
`

export default function App() {
  const [Carregando, setCarregando] = useState(true);
  useEffect(() =>{
    const timer = setTimeout(() => {
      setCarregando(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    <div className="center">
      {Carregando ? (
      <Spinner
      animate={{rotate: 360}}
      transition={{duration: 0.2, repeat: Infinity, ease: 'linear'}}
      />
      ):(
        <div> 
        <Header/>
        <Logo/>
        <Pokedex/>
        <Footer/>
        </div>
      )}
    </div>
    </>
    
)}