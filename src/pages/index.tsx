import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../layout/layout"
import HeroSection from "../components/HeroSection"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Theme Selector</title>
