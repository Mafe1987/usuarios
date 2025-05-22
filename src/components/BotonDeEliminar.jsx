import React from 'react'
import { toast } from 'react-toastify';
export const BotonDeEliminar = ({id}) => {
    function eliminar(){
        fetch('https://datum-q26q.onrender.com/api/usuarios/' + id,{
            method: 'DELETE'
        })
        toast.error('Usuario eliminado correctamente')
        window.location.replace('/')
        
    }
  return (
    <button 
        style={{
        background: 'red',
        color: 'white',
        padding: '6px 12px',
        textDecoration: 'none'
    }}
      onClick={eliminar}
    >
        Eliminar</button>
    
  )
}
