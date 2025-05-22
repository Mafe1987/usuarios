import React from 'react'
import { Link } from "react-router";

export const Inicio = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center'
      }}>
        <h1 style={{fontSize:50, fontWeight:'grey'}}>Inicio</h1>
        
         <p style={{maxWidth: 500}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illo impedit velit. Esse dignissimos quisquam 
            voluptates voluptatum incidunt vero, non ipsa nesciunt, eaque odit qui eos reiciendis omnis officia porro.
         </p>
         <div style={{display:'flex', gap:15}}>
         <Link to='/usuarios'
          style={{
            background: 'black',
            color: 'white',
            padding: '6px 12px',
            textDecoration: 'none'
          }}
         >Ver usuarios</Link>
        <Link to='/registro'
        style={{
            background: 'black',
            color: 'white',
            padding: '6px 12px',
            textDecoration: 'none'
        }}
        >Crear</Link>
         </div>
    </div>
  )
}
