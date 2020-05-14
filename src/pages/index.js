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
            <a href={pdf1} download><Downloadicon linea={true} />Carta restaurante (PDF)</a>
            <a href={pdf2} download><Downloadicon linea={true} />Carta para recoger (PDF)</a>
          </div>
          <div className={styles.contenido_principal}>
            <div className={styles.col1}>
              <a href="tel:+34957491123">957 491 123</a><br />
              Reservas y pedidos para recoger<br /><br />
              <a href="https://www.just-eat.es/" target="_blank">Just Eat</a> (Pedidos para llevar)
            </div>
            <div className={styles.col2}>
              <a href="mailto:hola@elastronauta.es">hola@elastronauta.es</a><br />
              <a href="https://www.facebook.com/ElAstronautaRestaurante/" target="_blank" title="El astronauta Restaurante Facebook">Facebook</a>
            </div>
            <div className={styles.col3}>
              <a href="https://goo.gl/maps/28ZWQUzKsRvD8Vrf6" target="_blank">c Diario de Córdoba, 18<br />
              14002 Córdoba</a>
            </div>
          </div>
        </main>
        <footer>
          <span>Aviso legal y política de confidencialidad.</span> 
          <span>© Proyecto el Astronauta 2020</span>
        </footer>
      </div>
    </div>
  </Layout>
)

export default IndexPage
