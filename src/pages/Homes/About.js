import React from 'react'
import Layout from "../../Components/Layouts/Layout"
import Section2 from './Section2'
import Section3 from './Section3'
import "./Section2.css"
import "./Section3.css"
import "./Section6.css"
import Section6 from './Section6'


function About() {
  return (
    <>
    <Layout>
        {/* Home Section About */}
    <Section2/>
    {/* Home Section Menu */}
    <Section3/>
    {/* Home Section Blog */}
    <Section6/>
    </Layout>
    </>
  )
}

export default About