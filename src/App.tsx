
import CriarUsuario from './components/criarUsuario';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginUsuario from './components/loginUsuario';
import CriarConta from './components/criarConta/criarConta';
import View from './view/view';

function App() {

  return (
    <Router>
   <div>
   
    <Routes>
      <Route path="/components" element={<LoginUsuario />} />
      <Route path="/criarConta" element={<CriarConta />} />
      <Route path='/view' element={<View/>}/>
      <Route path='/' element={ <CriarUsuario/>}></Route>
    </Routes>
   </div>
   </Router>
  )
}

export default App
