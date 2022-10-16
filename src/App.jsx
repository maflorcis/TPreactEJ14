import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/views/Inicio'
import Administrador from './components/views/Administrador'
import Error404 from './components/views/Error404'
import "bootstrap/dist/css/bootstrap.min.css";
import './app.css'
import CrearReceta from './components/views/Producto/CrearReceta';
import EditarReceta from './components/views/Producto/EditarReceta';
import DetalleReceta from './components/views/DetalleReceta';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';

import Login from './components/views/Login'
import Registrar from './components/views/Registrar'




function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route exact path='/administrador' element={<Administrador></Administrador>} />
          {/* <Route exact path='/footer' element={<Footer></Footer>} /> */}
          <Route
          exact
          path="/administrar/crear"
          element={<CrearReceta></CrearReceta>}
        ></Route>
        <Route
          exact
          path="/administrar/editar/:id"
          element={<EditarReceta></EditarReceta>}
        ></Route>
        <Route
          exact
          path="/detalle-producto"
          element={<DetalleReceta></DetalleReceta>}
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login></Login>}
        ></Route>
        <Route
          exact
          path="/registrar"
          element={<Registrar></Registrar>}
        ></Route>
          <Route path='*' element={<Error404></Error404>} />
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;