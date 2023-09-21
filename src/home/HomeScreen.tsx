import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Content from './Content'

const HomeScreen = () => {
  return (
    <div className=' bg-[#150E28] w-[100%] justify-center items-center flex flex-col'>
        <Header />
        <Hero />
        <Content />
        <hr />
    </div>
  )
}

export default HomeScreen