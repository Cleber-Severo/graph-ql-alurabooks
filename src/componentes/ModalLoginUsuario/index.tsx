import { AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"

import imagemPrincipal from './assets/login.png'

import './ModalLoginUsuario.css'
import { usePersistirToken } from "../../hooks/useToken"
import { http } from "../../http"

interface ModalLoginUsuarioProps {
    isOpen: boolean
    modalCadastrar: boolean
    setModalCadastrar: React.Dispatch<React.SetStateAction<boolean>>
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    setUsuarioEstaLogado: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalLoginUsuario = ({ isOpen, setIsOpen, modalCadastrar, setModalCadastrar, setUsuarioEstaLogado }: ModalLoginUsuarioProps) => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const persistirToken = usePersistirToken()

    const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            email,
            senha,
        }

        http.post('public/login', usuario)
            .then((res) => {
                persistirToken(res.data.access_token)

                alert('Login efetuado com sucesso!')
                setEmail('')
                setSenha('')
                setUsuarioEstaLogado(true)
                setIsOpen(false)
            })
            .catch((err) => {
                if (err?.response?.data?.message) {
                    alert(err.response.data.message)
                } else {
                    alert('Aconteceu um erro inesperado ao efetuar o seu login!')
                    console.log(err);
                }
                
            })
    }

    return (<AbModal 
        titulo="" 
        aberta={isOpen}
        aoFechar={() => { setIsOpen(!isOpen) }}    
    >
        <section className="corpoModalLogin">
            <figure>
                <img src={imagemPrincipal} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
            </figure>
            <form onSubmit={aoSubmeterFormular}>
                <span> LOGIN </span>
                <AbCampoTexto
                    label="E-mail"
                    placeholder="seuemail@maneiro.com.br"
                    value={email}
                    onChange={setEmail}
                    type="email"
                />
                <AbCampoTexto 
                    label="Senha"
                    value={senha}
                    onChange={setSenha}
                    type="password"
                />
                <div className="acoes">
                    <a href="#">Esqueci minha senha</a>
                    <button type="submit" className="modal-criar-btn">Fazer login</button>
                </div>

                <hr />

                <div className="acoes">
                    <h3>Ainda não tem uma conta?</h3>
                    <button className="modal-criar-btn" type="button" onClick={() => { setIsOpen(false); setModalCadastrar(true) }}> Criar conta </button>
                </div>
            </form>
        </section>
    </AbModal>)
}

export default ModalLoginUsuario