import { useAuth } from '../../hooks/auth'
import { Container, Logout, Profile } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

import defaultAvatar from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()

  const avatarUrl = user?.avatar
    ? `${api.defaults.baseURL}/files/${user?.avatar}`
    : defaultAvatar

  function handleSignOut() {
    navigation('/')
    signOut()
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={'foto de ' + user?.name} />

        <div>
          <span>Bem-vindo,</span>
          <strong>{user?.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
