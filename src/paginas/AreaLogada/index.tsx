import { Outlet } from "react-router-dom"
import TagsCategorias from "../../componentes/TagsCategorias"
import Newsletter from "../../componentes/Newsletter"

import './styles/AreaLogada.css'

const AreaLogada = () => {
    return (
        <section className="area-logada__container">
            <div className="area-logada__container--banner">
                <h3>Minha Conta</h3>
            </div>
            
            <div className="area-logada__container--wrapper">
                <ul>
                    <li className="selected">Pedidos</li>
                    <li>Trocas</li>
                    <li>Cupons</li>
                    <li>Seus dados</li>
                </ul>
                <div className="area-logada__container--conteudo">
                    <Outlet />
                </div>
            </div>
            <TagsCategorias />
            <Newsletter />
        </section>
    )
}

export default AreaLogada