import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks"
import { useState } from "react"

import imagemPrincipal from './assets/login.png'

import './ModalCadastroUsuario.css'
import { http } from "../../http"

interface ModalCadastroUsuarioProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalCadastroUsuario = ({ isOpen, setIsOpen }: ModalCadastroUsuarioProps) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [endereco, setEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [cep, setCep] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfirmada, setSenhaConfirmada] = useState('')

    const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        const usuario = {
            nome,
            email,
            senha,
            endereco,
            cep,
            complemento
        }

        http.post('public/registrar', usuario)
            .then(() => {
                alert('Usuário foi cadastrado com sucesso!')

                setNome('')
                setEmail('')
                setEndereco('')
                setComplemento('')
                setCep('')
                setSenha('')
                setSenhaConfirmada('')

                setIsOpen(false)
            })
            .catch(() => {
                alert('Something went wrong!')
            })
    }

    return (<AbModal 
        titulo="CADASTRO" 
        aberta={isOpen}
        aoFechar={() => { setIsOpen(!isOpen) }}    
    >
        <section className="corpoModalCadastro">
            <figure>
                <img src={imagemPrincipal} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
            </figure>
            <form onSubmit={aoSubmeterFormular}>
                <AbCampoTexto 
                    label="Nome"
                    placeholder="Seu nome completo"
                    value={nome}
                    onChange={setNome}
                />
                <AbCampoTexto 
                    label="E-mail"
                    placeholder="seuemail@maneiro.com.br"
                    value={email}
                    onChange={setEmail}
                    type="email"
                />
                <AbCampoTexto 
                    label="Endereço"
                    placeholder="Sua rua e número"
                    value={endereco}
                    onChange={setEndereco}
                />
                <AbCampoTexto 
                    label="Complemento"
                    placeholder="Apto/casa, bloco, referência"
                    value={complemento}
                    onChange={setComplemento}
                />
                <AbCampoTexto 
                    label="CEP"
                    placeholder="Apto/casa e bloco"
                    value={cep}
                    onChange={setCep}
                />
                <AbCampoTexto 
                    label="Senha"
                    value={senha}
                    onChange={setSenha}
                    type="password"
                />
                <AbCampoTexto 
                    label="Confirmação da senha"
                    value={senhaConfirmada}
                    onChange={setSenhaConfirmada}
                    type="password"
                />
                <div className="acoes">
                    <AbBotao texto="Cadastrar"/>
                </div>
            </form>
        </section>
    </AbModal>)
}

export default ModalCadastroUsuario