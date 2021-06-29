/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import React from "react"
import Layout from "./src/components/layout"
import { CartProvider } from "./src/context"

export const wrapRootElement = ({ element }) => (
  <CartProvider>
    <Layout>{element}</Layout>
  </CartProvider>
)
