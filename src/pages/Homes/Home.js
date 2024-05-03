import React from 'react'
import Layout from "../../Components/Layouts/Layout"
import "../../styles/HomeStyle.css"
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

function Home() {
  return (
    <>
    <Layout>
    {/* Section Department */}
    <Section1/>
    {/* Home Section About */}
    <Section2/>
    {/* Home Section Menu */}
    <Section3/>
    {/* {Home Section Promotion} */}
    <Section4/>
    {/* Home Section Shop */}
    <Section5/>
    {/* Home Section Blog */}
    <Section6/>
    </Layout>
    </>
    
  )
}

export default Home