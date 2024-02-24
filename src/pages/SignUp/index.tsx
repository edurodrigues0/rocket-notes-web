import { Background, Container, Form } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Nao foi possivel cadastrar')
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={<FiUser size={20} />}
          onChange={(event) => setName(event.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={<FiMail size={20} />}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={<FiLock size={20} />}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}
