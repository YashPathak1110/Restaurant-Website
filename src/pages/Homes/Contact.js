import React from 'react'
import Layout from "../../Components/Layouts/Layout"
import Section5 from './Section5'
import Section6 from './Section6'
import "./Section5.css";
import "./Section6.css";
function Shop() {
  return (
    <Layout>    
    {/* Home Section Menu */}
    <Section5/>
    {/* Home Section Blog */}
    <Section6/>
    </Layout>
  )
}

export default Shop