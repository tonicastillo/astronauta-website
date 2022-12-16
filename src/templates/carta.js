import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import * as s from "./carta.module.scss"
import { Link } from "gatsby"
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        color
      }
    }
  }
`
const CartaTempate = (props) => {
    const { markdownRemark } = props.data
    const { frontmatter } = markdownRemark
    return (
        <Layout>
          <div className={s.container} style={{
              backgroundColor: frontmatter.color
            }}>
            <div className={s.header}>
              <div className={s.container_content}>
                <div className={s.container_internal}>
                  <h2><span>Carta restaurante El Astronauta Córdoba</span></h2>
                  <Link to="/" className={s.close}><span>Restaurante en Córdoba El Astronauta</span></Link>
                </div>
              </div>
            </div>

            <div className={s.content}>
              <div className={s.container_content}>
                <div className={s.container_internal}>
                  <div
                    dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Layout>
        )
    }

export default CartaTempate
