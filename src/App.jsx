import { BrowserRouter, Route, Routes } from "react-router"
import { ToastContainer } from "react-toastify";
import { Nav } from "./components/Nav";
import { Editar } from "./pages/Editar";
import { Error404 } from "./pages/Error404"
import { Inicio } from "./pages/Inicio";
import { Registro } from "./pages/Registro";
import { UsuarioPorId } from "./pages/UsuarioPorId";
import { Usuarios } from "./pages/Usuarios";

function App() {
   return( 
   <BrowserRouter>
    <ToastContainer></ToastContainer>
     <Nav></Nav>
     <Routes>
      <Route path='/' element={<Inicio></Inicio>}></Route>
      <Route path='/registro'
      element={<Registro></Registro>}></Route>
      <Route
       path='/usuarios'
       element={<Usuarios></Usuarios>}></Route>
      <Route path='/usuario/:id' element={<UsuarioPorId></UsuarioPorId>}></Route>
      <Route path='/usuario/editar/:id'
      element={<Editar></Editar>}></Route>
     
      <Route path='*'element={<Error404></Error404>}></Route>
     </Routes>
   </BrowserRouter>
   )
}

export default App
