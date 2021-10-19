import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Hero from "../components/common/Hero"
import Destinations from "../components/common/Destinations"
import Testimonials from "../components/common/Testimonials"
import Stats from "../components/common/Stats"
import Email from "../components/common/Email"
import Footer from "../components/common/Footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Destinations heading="Our Favorite Destinations"/>
    <Testimonials/>
    <Stats/>
    <Email />
    <Footer/>
  </Layout>
)

export default IndexPage
