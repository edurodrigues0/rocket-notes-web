import { Background, Container, Form } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={<FiUser size={20} />} />

        <Input placeholder="E-mail" type="text" icon={<FiMail size={20} />} />

        <Input
          placeholder="Senha"
          type="password"
          icon={<FiLock size={20} />}
        />

        <Button title="Cadastrar" />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}
