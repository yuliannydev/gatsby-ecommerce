import React from "react"
import { StyledJumbo } from "../styles/componensts"
import { StaticImage } from 'gatsby-plugin-image';

const Jumbo = ({ description }) => {
  //const image = getImage(data.get_image)

  return (
    <StyledJumbo>
      <div>
        <h2>Platzi E-commerce</h2>
        <p>{description}</p>
      </div>
      {/*     <GatsbyImage image={image} alt={data.image.get_image} /> */}
      <StaticImage src="../images/icon.png" alt="Banner" placeholder="blurred" />
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
