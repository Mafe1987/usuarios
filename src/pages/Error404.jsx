import React from 'react'
import {  Link } from "react-router";

export const Error404 = () => {
  return (
    <div 
        style={{
        minHeight:'100vh',
        display:'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        gap: 20,
        flexDirection: 'column'
        }}>
        <h1>Error 404</h1>
        <p>lo sentimos, esta pagina no existe</p>
        <Link 
        to='/'
        style={{
            background:'black',
            color:'white',
            padding: '6px 12px',
            textDecoration: 'none'
        }}>
            volver al inicio
        </Link>

        </div>
  )
}
