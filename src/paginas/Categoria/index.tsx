import { useEffect, useState } from "react"
import TituloPrincipal from "../../componentes/TituloPrincipal"
import { ICategoria } from "../../interfaces/ICategoria"
import { http } from "../../http"
import { useParams } from "react-router-dom"
import Loader from "../../componentes/Loader"

const Categoria = () => {
  const [categoria, setCategoria] = useState<ICategoria>()
  const [ estaCarregando, setEstaCarregando  ] = useState(false)
  
  const params = useParams()

  useEffect(() => {
    setEstaCarregando(true)
    http.get('categorias', { params: { slug: params.slug } })
      .then(res => { 
        setCategoria(res.data[0]) 
        setEstaCarregando(false)
      })
  }, [params.slug])

  if(estaCarregando) {
    return (<Loader />)
  }

  return(
    <section>
      <TituloPrincipal titulo={categoria?.nome ?? ''} />
    </section>
  )
}

export default Categoria