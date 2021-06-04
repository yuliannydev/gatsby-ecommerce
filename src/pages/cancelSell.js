import React from "react"
import { Seo } from "../components"
import { Purchase, Button } from "../styles/componensts"
import { Link } from "gatsby"

export default function thanksSell() {
  return (
    <div>
      <Seo title="Compra cancelada" />
      <Purchase>
        <h2>Tu compra se ha sido cancelada</h2>
        <p>ESperemos que puedas procesarla pronto</p>
        <span rol="img" aria-label="emoji">
          🤗
        </span>

        <Link to="/">
          <Button>Volver al Inicio</Button>
        </Link>
      </Purchase>
    </div>
  )
}
