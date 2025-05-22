import React from 'react'
import { Link } from 'react-router';
export const Nav = () => {
  return (
    <div>
        <div style={{display:'flex', gap:15, justifyContent:'center'}}>
         <Link to='/'
          style={{
            background: 'black',
            color: 'white',
            padding: '6px 12px',
            textDecoration: 'none'
          }}
         >Inicio
         </Link>
        <Link 
        to='/usuarios'
        style={{
            background: 'black',
            color: 'white',
            padding: '6px 12px',
            textDecoration: 'none'
        }}
        >Ver usuarios</Link>
        <Link
        to='registro'
        style={{
          background: 'grey',
          color: 'white',
          padding: '6px 12px',
          textDecoration: 'none'
        }}
        >Crear
        </Link>
         </div>
    </div>
  )
}
