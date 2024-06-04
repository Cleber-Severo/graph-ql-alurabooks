import { useEffect, useState } from "react"
import TituloPrincipal from "../../componentes/TituloPrincipal"
import { ICategoria } from "../../interfaces/ICategoria"
import { http } from "../../http"
import { useParams } from "react-router-dom"

const Categoria = () => {
  const [categoria, setCategoria] = useState<ICategoria>()
  
  const params = useParams()

  useEffect(() => {
    http.get('categorias', { params: { slug: params.slug } })
      .then(res => { setCategoria(res.data[0]) })
  }, [params.slug])

  return(
    <section>
      <TituloPrincipal titulo={categoria?.nome ?? ''} />
    </section>
  )
}

export default Categoria