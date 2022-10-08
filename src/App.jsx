import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/views/Inicio'
import Administrador from './components/views/Administrador'
import Error404 from './components/views/Error404'
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'

import DetalleReceta from './components/views/DetalleReceta'
import ItemReceta from './components/views/Producto/ItemReceta'
import CrearReceta from './components/views/Producto/CrearReceta'
import EditarReceta from './components/views/Producto/EditarReceta'
import CardReceta from './components/views/Producto/CardReceta'



function App() {
  return (
 <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Inicio></Inicio>}></Route>
    <Route exact path='/Administrador' element={<Administrador></Administrador>}></Route>
    <Route exact path='/Footer' element={<Footer></Footer>}></Route>
    <Route exact path='/Menu' element={<Menu></Menu>}></Route>
    <Route exact path='/Inicio' element={<Inicio></Inicio>}></Route>
    <Route exact path='/CardReceta' element={<CardReceta></CardReceta>}></Route>
    <Route exact path='/DetalleReceta' element={<DetalleReceta></DetalleReceta>}></Route>
    <Route exact path='/ItemReceta' element={<ItemReceta></ItemReceta>}></Route>
    <Route exact path='/CrearReceta' element={<CrearReceta></CrearReceta>}></Route>
    <Route exact path='/EditarReceta' element={<EditarReceta></EditarReceta>}></Route>
    <Route  path='*' element={<Error404></Error404>}></Route>
  </Routes>
 
 </BrowserRouter>
  );
}

export default App;
