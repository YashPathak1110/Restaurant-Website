import React from 'react'
import Layout from "../../Components/Layouts/Layout"
import Section3 from './Section3'
import Section6 from './Section6'
import "./Section3.css";
import "./Section6.css";
function Shop() {
  return (
    <>    
    
    <Layout>    
    {/* Home Section Menu */}
    <Section3/>
    {/* Home Section Blog */}
    <Section6/>
    </Layout>
    </>

  )
}

export default Shop