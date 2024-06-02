import { Outlet } from "react-router-dom"
import TagsCategorias from "../../componentes/TagsCategorias"
import Newsletter from "../../componentes/Newsletter"

import './styles/AreaLogada.css'
import TituloPrincipal from "../../componentes/TituloPrincipal"

const AreaLogada = () => {
    return (
        <section className="area-logada__container">
            <TituloPrincipal titulo="Minha Conta"/>
            
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