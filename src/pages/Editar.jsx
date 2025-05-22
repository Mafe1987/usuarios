import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export const Editar = () => {
    const {id} = useParams()
    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        activo: false,
        contraseña: ''
      })
      const [Loading, setLoading] = useState(true)

      function manejarCambio(evento){
        const {name, value}= evento.target 
        setUsuario((prev) =>({
            ...prev,
            [name]: value
        }))
      }

      async function manejarEnvio(evento){
        evento.preventDefault()
        try {
          await fetch('https://datum-q26q.onrender.com/api/usuarios/' + id,
          {
           method: 'PUT',
           headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        })
        
      }catch (err) {
        console.log(err);
      } 
      finally{
        
        setUsuario({
             nombre: '',
             email: '',
             activo: false,
             contraseña:''
        })
      }
    }
        
    useEffect(() => {
        const obtenerUsuarioPorId = async()=>{
        try {
           const res =await fetch(
               'https://datum-q26q.onrender.com/api/usuarios/'+ id
           )
           const data = await res.json()
           
           setUsuario(data.datos)
         } catch (err){
           console.log('Hubo un error en el codigo que esta dentro del try: ' +err
           )
        } finally{
         setLoading(false)
         
        }
        }
        obtenerUsuarioPorId()
      },[])

  return (
    <div>Editar
  
     <form
       onSubmit={manejarEnvio}
       style={{
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'center',
          flexDirection: 'column',
          gap: 20,
          fontSize: 20
          }}>
       <input 
         type='text'
         placeholder='Nombre'
         name='nombre'
         value={usuario.nombre}
         onChange={manejarCambio} />
       <input 
          type='email' 
          placeholder='Email' 
          name='email'
          value={usuario.email}
          onChange={manejarCambio} />
       <select 
          name=" activo"
          id=""  
          onChange={manejarCambio}
          value={usuario.activo}>
       <option value={true}>Verdadero</option>
       <option value={false} selected>Falso</option>
       </select>
       <input 
         type='password'
         placeholder='Contraseña'
         name='contraseña'
         value={usuario.contraseña}
         onChange={manejarCambio} />
       
       <button type='submit'>Enviar</button>
         {''}
       
     </form>
       
     
   </div>
  )
}
