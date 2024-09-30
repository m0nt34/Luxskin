import React from 'react'
import ParallaxImg from '../../components/ParallaxImg'
import niniIMG from '../../assets/images/nini.jpg'
const Index = () => {
  return (
    <div className='min-h-screen'>
      <div className='text-[20px] text-white h-[100vh]'>s</div>
      <ParallaxImg img={niniIMG} height={700} width={400}/>
      <div className='text-[20px] text-white h-[100vh]'>s</div>
    </div>
  )
}

export default Index