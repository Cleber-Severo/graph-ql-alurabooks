import './ArtigoTexto.css'

interface ArtigoTextProps {
    texto: string
    titulo: string
}

const ArtigoTexto = ({ titulo, texto }: ArtigoTextProps) => {
    return(
        <div className='artigo-texto'>
            <h4>{titulo}</h4>
            <p>{texto}</p>
        </div>
    )
}

export default ArtigoTexto