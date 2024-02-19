import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

        <h2>Faca seu login</h2>

        <Input placeholder="E-mail" type="text" icon={<FiMail size={20} />} />

        <Input
          placeholder="Senha"
          type="password"
          icon={<FiLock size={20} />}
        />

        <Button title="Entrar" />

        <Link to="/register">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}
