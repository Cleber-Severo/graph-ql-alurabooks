import { AbBotao } from "ds-alurabooks"
import { ILivro } from "../../interfaces/ILivro"

import './CardLivro.css'
import { formatador } from "../LivrosDestaque/utils/formatador"
import { Link } from "react-router-dom"

interface CardLivroProps {
  livro: ILivro
}

const CardLivro = ({livro}: CardLivroProps) => {
  return (
    <div className="card-livro">
      <div className="card-livro__descr" >
        <img src={livro.imagemCapa} alt={livro.descricao} />
        <h4>{livro.titulo}</h4>

        <span>A PARTIR DE:</span>
        <span><b>{formatador.format(livro.opcoesCompra[0].preco)}</b></span>
      </div>

      <Link to={`/detalhes/${livro.slug}`} style={{ width: '100%'}}>
        <AbBotao texto="Comprar" />
      </Link>

    </div>
  )
}

export default CardLivro