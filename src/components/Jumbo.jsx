import React from "react"
import { StyledJumbo } from "../styles/componensts"
import { StaticImage } from 'gatsby-plugin-image';

const Jumbo = ({ description }) => {
  //const image = getImage(data.get_image)

  return (
    <StyledJumbo>
      <div>
        <h2>¿Desea tomar una tazita de Café?</h2>
        <small>{description}</small>
      </div>
      {/*     <GatsbyImage image={image} alt={data.image.get_image} /> */}
      <StaticImage src="../images/mug.png" alt="Banner" placeholder="blurred" />
    </StyledJumbo>
  )
}

/* export const query = graphql`
          query GET_IMAGE {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                ) 
                }
              }
            }
          
        ` */

export default Jumbo
