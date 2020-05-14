import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styles from "./image.module.scss"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      cuadradas:allFile(filter: {sourceInstanceName: {eq: "galeriacuadradas"}}) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1280, maxHeight: 1280, quality: 40)  {
              ...GatsbyImageSharpFluid_withWebp
            },
            id
          }
        }
      }
      escritorio:allFile(filter: {sourceInstanceName: {eq: "galeriaescritorio"}}) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1992, quality: 60)  {
              ...GatsbyImageSharpFluid_withWebp
              aspectRatio
            },
            id
          }
        }
      }
    }
  `)
  return (<div className={styles.container}>
    
    <div className={styles.square}>
      {data.cuadradas.nodes.map(node=>(
        <div key={node.childImageSharp.id} className={styles.image_container}>
          <Img className={styles.image_content} objectFit="cover" fluid={node.childImageSharp.fluid} />
        </div>
      ))}
    </div>
    <div className={styles.desktop}>
    {data.escritorio.nodes.map(node=>(
      <div key={node.childImageSharp.id} className={styles.image_container}>
        <Img
          className={styles.image_content}
          objectFit="contain"
          fluid={node.childImageSharp.fluid}
        />
      </div>
    ))}
    </div>
  </div>
  )
}

export default Image
