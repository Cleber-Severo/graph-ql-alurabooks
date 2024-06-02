import { AbBotao } from "ds-alurabooks"

import './Pedidos.css'
import { useEffect, useState } from "react"
import { IPedido } from "../../interfaces/IPedido"
import { http } from "../../http"

const Pedidos = () => {
    const formatador = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })

    const [ pedidos, setPedidos ] = useState<IPedido[]>([])
    
    const excluir = (pedido:number) => {
        http.delete(`pedidos/${pedido}`)
            .then(res => { setPedidos(pedidos.filter( item => item.id !== pedido )) })
            .catch(erro => console.log(erro))
    }

    useEffect(() => {
        http.get<IPedido[]>('pedidos')
            .then((res) => { setPedidos(res.data) })
            .catch((err) => { console.log(err);
         })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <section className="pedidos">
            <h1> Meus pedidos </h1>
            { pedidos.map( pedido => (
                <div className="pedido" key={pedido.id} >
                    <ul>
                        <li>Pedido: <strong>{pedido.id}</strong></li>
                        <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
                        <li>Valor total: <strong>{formatador.format(pedido.total) }</strong></li>
                        <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
                        <li>
                            <button className="btn-excluir" onClick={() => { excluir(pedido.id) }}> Excluir pedido </button>
                        </li>
                    </ul>
                    <AbBotao texto="Detalhes" />
                </div>
            ) ) }
        </section>
    )
}

export default Pedidos