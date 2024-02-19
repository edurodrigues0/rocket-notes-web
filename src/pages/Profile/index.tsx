import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Avatar, Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/edurodrigues0.png"
            alt="Foto do usuario"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={<FiUser size={20} />} />

        <Input placeholder="E-mail" type="text" icon={<FiMail size={20} />} />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={<FiLock size={20} />}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={<FiLock size={20} />}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
