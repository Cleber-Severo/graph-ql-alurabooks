
import './styles/TituloPrincipal.css'

export interface ITituloPrincipalProps {
    titulo: string
}

export default function TituloPrincipal({titulo}: ITituloPrincipalProps) {
    return(
        <div className='titulo-container'>
            <h3>{titulo}</h3>
        </div>
    )
} 