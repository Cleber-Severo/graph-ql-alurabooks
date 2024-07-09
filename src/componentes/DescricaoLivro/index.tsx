import { AbBotao, AbGrupoOpcao, AbGrupoOpcoes, AbInputQuantidade } from 'ds-alurabooks'
import { ILivro } from '../../interfaces/ILivro'
import './DescricaoLivro.css'
import { useState } from 'react'
import { formatador } from '../LivrosDestaque/utils/formatador'
import { obterAutorPorId } from '../../http'
import { useQuery } from '@tanstack/react-query'

interface DescricaoLivroProps {
    livro: ILivro
}

const DescricaoLivro = ({ livro }: DescricaoLivroProps) => {
  const [opcao, setOpcao] = useState<AbGrupoOpcao>()
  const [quantidade, setQuantidade] = useState(0)

  const { data: autor, isLoading } = useQuery(['livroSlug', livro?.autor], () => obterAutorPorId(livro?.autor || 0))

  console.log('autor: ', autor);
  

  const opcoes: AbGrupoOpcao[] = livro.opcoesCompra ? livro.opcoesCompra.map(opcao => ({
    id: opcao.id,
    corpo: formatador.format(opcao.preco),
    titulo: opcao.titulo,
    rodape: opcao.formatos ? opcao.formatos.join(',') : ''
  }))
    : []

  return(
    <section className='livro-descricao-container'>
      <article className='livro-descricao'>
        <img src={livro?.imagemCapa} alt={livro?.slug} />
        <div>
          <div className='grupo-titulo'>
            <h3>{livro?.titulo}</h3>
            <span>{livro?.descricao}</span>
            <span>Por: {autor?.nome}</span>
          </div>

          <div className='grupo-opcoes'>
            <span>Selecione o formato do seu livro:</span>
            <div className='opcoes-compra'>
              <AbGrupoOpcoes
                opcoes={opcoes}
                onChange={setOpcao}
                valorPadrao={opcao}
              />
            </div>
            <span>*Você terá acesso às futuras atualizações do livro.</span>
          </div>
          
          <div>
            QUANTIDADE
            <div className="qtdContainer">
              <AbInputQuantidade onChange={setQuantidade} value={quantidade} />
            </div>
            <AbBotao texto='Comprar'/>
          </div>
        </div>
      </article>
    </section>
  )
}

export default DescricaoLivro