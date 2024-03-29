import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Image = ({ name }) => {
  const data = useStaticQuery(
    graphql`
      query GET_IMAGE {
        icon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return <StaticImage fluid={data[name].childImageSharp.fluid} />
}

export default Image