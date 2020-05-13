import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./index.module.scss"


const IndexPage = () => (
  <Layout>

    <SEO title="Restaurante el Astronauta Córdoba" />
    <div className={styles.container_external}>
      <div className={styles.container_internal}>
        <header>
          <h1><span>El Astronauta</span></h1>
        </header>
        <main>
          <Image />
        </main>
      </div>
    </div>
  </Layout>
)

export default IndexPage
