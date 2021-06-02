import React from 'react'
import { SEO } from "../components"
import { Purchase, Button } from '../styles/componensts'
import { Link } from 'gatsby'


export default function thanksSell() {
    return (
        <div>
        <SEO title="Compra exitosa"/>
        <Purchase>
            <h2>Tu compra se ha procesado con Exito</h2>
            <p>Gracias por Preferirnos</p>
            <span role="img" aria-label="emoji">😎</span>
            
            <Link to="/">
                <Button>Volver al Inicio</Button>
            </Link>
        </Purchase>
        </div>
    )
}
