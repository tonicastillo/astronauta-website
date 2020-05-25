import React from "react"

import Layout from "../components/layout"
import s from "./carta.module.scss"

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
const CartaTempate = (props) => {
    const { markdownRemark } = props.data
    const { frontmatter } = markdownRemark
    return (
        <Layout>
            <div className={s.container}>
                <div
                    dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                />
            </div>
        </Layout>
        )
    }

export default CartaTempate
