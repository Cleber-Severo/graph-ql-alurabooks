import { useQuery } from "@tanstack/react-query"
import { ICategoria } from "../../interfaces/ICategoria"
import { obterProdutosDaCategoria } from "../../http"
import CardLivro from "../CardLivro"

import './ListaLivros.css'

interface ListaLivrosProps {
    categoria: ICategoria
}

const ListaLivros = ({categoria}: ListaLivrosProps) => {

    const { data: produtos, isLoading } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterProdutosDaCategoria(categoria))

    console.log(produtos);
    

    
    return(
        <section className="container-produtos">
            {produtos?.map((item) => <CardLivro livro={item} key={item.id}/> )}
        </section>
    )
}

export default ListaLivros