import { Route, Routes } from "react-router-dom"
import Home from "../paginas/Home"
import PaginaBase from "../paginas/PaginaBase"
import Pedidos from "../paginas/Pedidos"
import AreaLogada from "../paginas/AreaLogada"
import Categoria from "../paginas/Categoria"
import DetalheLivro from "../paginas/DetalheLivro"


const Rotas = () => {
    return (<Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path='/minha-conta' element={<AreaLogada />}>
          <Route path='pedidos' element={<Pedidos />} />
        </Route>
        <Route path="/categorias/:slug" element={<Categoria />} />
        <Route path='/detalhes/:slug' element={<DetalheLivro />} />
      </Route>
    </Routes>)
}

export default Rotas