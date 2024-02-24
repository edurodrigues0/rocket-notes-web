import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function SignIn() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn() {
    signIn(email, password)
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

        <h2>Faca seu login</h2>

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

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}
