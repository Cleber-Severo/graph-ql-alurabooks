import { Link, useNavigate } from "react-router-dom"
import BotaoNavegacao from "../BotaoNavegacao"
import ModalCadastroUsuario from "../ModalCadastroUsuario"
import logo from './assets/logo.png'
import usuario from './assets/usuario.svg'
import './BarraNavegacao.css'
import { useEffect, useState } from "react"
import ModalLoginUsuario from "../ModalLoginUsuario"
import { useObterToken } from "../../hooks/useToken"
import { ICategoria } from "../../interfaces/ICategoria"
import { http } from "../../http"

const BarraNavegacao = () => {


    const [modalCadastro, setModalCadstro] = useState<boolean>(false)
    const [modalLogin, setModalLogin] = useState<boolean>(false)

    const [categorias, setCategorias] = useState<ICategoria[]>([])

    let navigate = useNavigate()

    const token = useObterToken();

    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token !== null)

    const efetuarLogout = () => {
        setUsuarioEstaLogado(false)
        sessionStorage.removeItem('token')
        navigate('/')
    }

    useEffect(() => {
        http.get<ICategoria[]>('categorias')
            .then(res => {
                setCategorias(res.data);
            })
    }, [])

    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navegacao">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                    <li>
                        <Link to="/">
                            Frontend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Programação
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="acoes">
           { !usuarioEstaLogado && 
            <>
                <li>
                    <BotaoNavegacao texto="Login" textoAltSrc="Icone representando um usuário" imagemSrc={usuario} onClick={() => { setModalLogin(true) }} />
                    <ModalLoginUsuario isOpen={modalLogin} setIsOpen={setModalLogin} modalCadastrar={modalCadastro} setModalCadastrar={setModalCadstro} setUsuarioEstaLogado={setUsuarioEstaLogado} />
                </li>
                <li>
                    <BotaoNavegacao
                        texto="Cadastrar-se"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => { setModalCadstro(true) }}
                    />
                    <ModalCadastroUsuario isOpen={modalCadastro} setIsOpen={setModalCadstro} />
                </li>
            </>
           }
           { usuarioEstaLogado && 
            <>
                <li>
                    <Link to='/minha-conta/pedidos'>Minha conta</Link>
                </li>
                <li>
                    <BotaoNavegacao
                        texto="Logout"
                        textoAltSrc="Icone representando um usuário"
                        imagemSrc={usuario}
                        onClick={() => { efetuarLogout()}}
                    />
                </li>
            </>
           }
        </ul>
    </nav>)
}

export default BarraNavegacao