import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Content from './Content'
import Content2 from './Content2'
import FAQs from './FAQs'
import TimeLine from './TimeLine'
import Judge from './Judge'
import Footer from './Footer'

const HomeScreen = () => {
  return (
    <div className=' bg-[#150E28] '>
        <Header />
        <Hero />
        <hr />
        <Content2 />
        <hr />
        <Content />
        <hr />
        <Judge />
       <hr />
        <FAQs />

        <hr />

        <TimeLine />
        <hr />
        <Footer />
    </div>
  )
}

export default HomeScreen