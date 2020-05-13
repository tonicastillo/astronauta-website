import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
      allFile(filter: {sourceInstanceName: {eq: "imagesgaleria"}}) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1992, maxHeight: 1602, quality: 60)  {
              ...GatsbyImageSharpFluid_withWebp
            },
            id
          }
        }
      }
    }
  `)
  return (<div className={styles.container}>
    {data.allFile.nodes.map(node=>(
      <div key={node.childImageSharp.id}>
        <Img className={styles.image_container} objectFit="cover" fluid={node.childImageSharp.fluid} />
      </div>
    ))}
  </div>
  )
     //<Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
