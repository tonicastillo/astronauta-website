/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import SEO from "../components/seo"
import styles from "../pages/index.module.scss"
import Image from "../components/image"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {


  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark(sort: {order: ASC, fields: frontmatter___orden}) {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)
  const cartas = data.allMarkdownRemark.nodes;
  return (
    <>
      <SEO title="Restaurante el Astronauta Córdoba" />
      <div className={styles.container_external}>
        <div className={styles.container_internal}>
          <header>
            <h1><Link to="/"><span>El Astronauta</span></Link></h1>
            <div className={styles.descargas_escritorio}>
              {cartas.map((carta, i)=>(
                <Link key={carta.frontmatter.slug} to={carta.frontmatter.slug} title={carta.frontmatter.titleseo}>{carta.frontmatter.title}</Link>
              ))}
            </div>
          </header>
          
            <div className={styles.home_image}>
              <Image />
            </div>
            <div className={styles.home_scroll}>
              <div className={styles.home_background_white}>
                <div className={styles.descargas_movil}>
                  {cartas.map((carta, i)=>(
                    <Link key={carta.frontmatter.slug} to={carta.frontmatter.slug} title={carta.frontmatter.titleseo}>{carta.frontmatter.title}</Link>
                  ))}
                </div>
                <div className={styles.contenido_principal}>
                  <div className={styles.col1}>
                    <a href="tel:+34957491123">957 491 123</a><br />
                    Reservas y pedidos para recoger<br /><br />
                    <a href="https://www.just-eat.es/" target="_blank">Just Eat</a>  ¡Próximamente!
                    {/* (Pedidos para llevar) */}
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
                <footer>
                  <span><Link to="/legal">Aviso legal</Link>.</span> 
                  <span>© Proyecto el Astronauta 2020</span>
                </footer>
              </div>
            </div>
            {children}

        
        </div>
      </div>
    </>
  )
}


export default Layout
