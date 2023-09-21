import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Content from './Content'
import Content2 from './Content2'
import FAQs from './FAQs'

const HomeScreen = () => {
  return (
    <div className=' bg-[#150E28] '>
        <Header />
        <Hero />
        <Content />
        <hr />
        <Content2 />
        <FAQs />
    </div>
  )
}

export default HomeScreen