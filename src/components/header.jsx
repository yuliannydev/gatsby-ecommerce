import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MenuItem, StyledHeader } from "../styles/componensts"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <StaticImage src="../images/Logo.png" alt="Logo" />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">Productos</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/cart">
            <span>
              <StaticImage src="../images/cart.png" alt="Carrito de Compras" />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
    
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
