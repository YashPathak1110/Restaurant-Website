import React from 'react'
import Layout from "../../Components/Layouts/Layout"
import Section4 from './Section4'
import Section6 from './Section6'
import "./Section4.css";
import "./Section6.css";
function Shop() {
  return (
    <Layout>    
    {/* Home Section Menu */}
    <Section4/>
    {/* Home Section Blog */}
    <Section6/>
    </Layout>
  )
}

export default Shop