import React, { useEffect } from 'react'
import Herosection from '../pages/Herosection'
import About from "../pages/About"
import MemberShipPrice from "../pages/MemberShipPrice"
import Traning from '../pages/Traning'
import Story from '../pages/Story'

const Home = () => {
  useEffect(()=>{
    alert("Please Refresh Again");
  },[])
  return (
    <>
    <Herosection/>
    <About/>
    <Traning/>
    <MemberShipPrice/>
    <Story/>
    
    </>
  )
}

export default Home
