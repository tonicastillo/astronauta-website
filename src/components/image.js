import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "./image.module.scss"

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
            gatsbyImageData(
              width: 1992
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  const [activeImage, setActiveImage] = useState(0);
  const imageQuantity = data.cuadradas.nodes.length;
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setActiveImage(activeImage + 1 >= imageQuantity ? 0 : activeImage + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeImage]);


  return (<div className={styles.container}>
    
    <div className={styles.square}>
      {data.cuadradas.nodes.map((node, i)=> {
        const image=getImage(node)
        return (
          <div key={i}
               className={`${styles.image_container} ${i === activeImage ? styles.image_container_visible : ''}`}>
            <GatsbyImage className={styles.image_content} objectFit="contain" image={image} />
          </div>
        )
      })}
    </div>
      <div className={styles.desktop}>
        {data.escritorio.nodes.map((node, i)=>{
          const image=getImage(node)
          return (
            <div key={i} className={`${styles.image_container} ${i === activeImage ? styles.image_container_visible : ''}`}>
              <GatsbyImage
                className={styles.image_content}
                objectFit="contain"
                image={image}
              />
            </div>
          )}
        )}
      </div>
  </div>
  )
}

export default Image
