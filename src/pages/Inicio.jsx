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
        

        <img src="https://media.istockphoto.com/id/1953106649/es/foto/conferencia-virtual-seminario-web-pantalla-de-video-de-reuni%C3%B3n-en-l%C3%ADnea-grupo-de-empleados.webp?a=1&b=1&s=612x612&w=0&k=20&c=scDziHsY-gKg3FnMhZKe-b_Z7WCzg1U5gxPKd4QoLgs=" alt="" />
         <p style={{maxWidth: 500}}>
            La Mejor app de Usuarios, made in Ecuador, por 
            John William Lara Bello.
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
