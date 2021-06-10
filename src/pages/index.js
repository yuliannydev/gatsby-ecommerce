import React from "react"
import { graphql } from "gatsby"
import { Jumbo, Seo } from "../components"
import Product from "../components/products"
//import styled from "@emotion/styled"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />

      <Product products={data.allStripePrice.edges} />
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
            metadata {
              wear
            }
          }
        }
      }
    }
  }
`

export default IndexPage
