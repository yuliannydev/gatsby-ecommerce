import React from "react"
import { graphql, Link } from "gatsby"
import { Jumbo, Seo } from "../components"
import Product from "../components/product"
//import styled from "@emotion/styled"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <Seo title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />

      <Product products={data.allStripePrice.edges} />

      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </p>
    </>
  )
}

/* Tiene dos querys */

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            description
            images
          }
        }
      }
    }
  }
`

export default IndexPage
