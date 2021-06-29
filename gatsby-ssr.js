/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

/**
 * TODO:
 * Para deploy
 */

import React from "react"
import Layout from "./src/components/layout"
import { CartProvider } from "./src/context"

export const wrapRootElement = ({ element }) => (
  <CartProvider>
    <Layout>{element}</Layout>
  </CartProvider>
)
