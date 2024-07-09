import { useParams } from "react-router-dom"
import TituloPrincipal from "../../componentes/TituloPrincipal"
import { useQuery } from "@tanstack/react-query"
import { obterLivroPorSlug } from "../../http"
import DescricaoLivro from "../../componentes/DescricaoLivro"

const DetalheLivro = () => {
  const params = useParams()

  const { data: livro, isLoading } = useQuery(['livroSlug', params.slug], () => obterLivroPorSlug(params.slug || ''))

  console.log(livro);
  return (
    <section>
      <TituloPrincipal titulo={'Detalhes do Livro'} />
      <DescricaoLivro livro={livro || []} />
    </section>
  )
}

export default DetalheLivro