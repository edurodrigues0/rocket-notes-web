import { Container, Logout, Profile } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/edurodrigues0.png" alt="Foto do usuario" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Eduardo Rodrigues</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
