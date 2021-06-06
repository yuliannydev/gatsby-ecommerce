const path = require("path")

//Create product pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //Template
  const productTemplateView = path.resolve(`src/templates/productView.js`)

  const result = await graphql(`
    query GET_PRICE {
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
  `)
  if (result.errors) {
    throw result.errors
  }

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplateView,
      context: node,
    })
  })
}
