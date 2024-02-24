import { useAuth } from '../../hooks/auth'
import { Container, Logout, Profile } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

import defaultAvatar from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user?.avatar
    ? `${api.defaults.baseURL}/files/${user?.avatar}`
    : defaultAvatar

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={'foto de ' + user?.name} />

        <div>
          <span>Bem-vindo,</span>
          <strong>{user?.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
