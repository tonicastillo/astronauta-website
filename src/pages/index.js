import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./index.module.scss"

import Downloadicon from "../components/downloadicon"

import pdf1 from '../downloads/carta1.pdf' 
import pdf2 from '../downloads/carta2.pdf' 

const IndexPage = () => (
  <Layout>

    <SEO title="Restaurante el Astronauta Córdoba" />
    <div className={styles.container_external}>
      <div className={styles.container_internal}>
        <header>
          <h1><span>El Astronauta</span></h1>
          <div className={styles.descargas_escritorio}>
            <a href={pdf1} download><Downloadicon />Carta restaurante (PDF)</a>
            <a href={pdf2} download><Downloadicon />Carta para recoger (PDF)</a>
          </div>
        </header>
        <main>
          <Image />
          <div className={styles.descargas_movil}>
            <a href={pdf1} download><Downloadicon />Carta restaurante (PDF)</a>
            <a href={pdf2} download>Carta para recoger (PDF)</a>
          </div>
        </main>
      </div>
    </div>
  </Layout>
)

export default IndexPage
