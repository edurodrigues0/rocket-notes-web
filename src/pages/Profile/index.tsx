import { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Avatar, Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import defaultAvatar from '../../assets/avatar_placeholder.svg'

interface User {
  name: string
  email: string
  password?: string
  old_password?: string
}
export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user!.name)
  const [email, setEmail] = useState(user!.email)
  const [passwordOld, setPasswordOld] = useState<string | undefined>(undefined)
  const [passwordNew, setPasswordNew] = useState<string | undefined>(undefined)
  const [avatar, setAvatar] = useState<string | undefined>(user?.avatar)
  const [avatarFile, setAvatarFile] = useState<File | undefined>()

  const avatarUrl = avatar
    ? `${api.defaults.baseURL}/files/${avatar}`
    : defaultAvatar

  function handleUpdate(event: FormEvent) {
    event.preventDefault()

    const userData: User = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew,
    }

    if (passwordOld && !passwordNew) {
      alert('Por favor, informe a nova senha.')
      return
    }

    if (passwordOld) {
      userData.old_password = passwordOld
    }

    if (passwordNew) {
      userData.password = passwordNew
    }

    updateProfile({ user: userData, avatarFile })
  }

  function handleChangeAvatar(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }
    const imagePreview = URL.createObjectURL(file)

    setAvatar(imagePreview)
    setAvatarFile(file)
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form onSubmit={handleUpdate}>
        <Avatar>
          <img src={avatarUrl} alt={'Foto de ' + user?.name} />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={<FiUser size={20} />}
          value={name || ''}
          onChange={(event) => setName(event.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={<FiMail size={20} />}
          value={email || ''}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={<FiLock size={20} />}
          onChange={(event) => setPasswordOld(event.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={<FiLock size={20} />}
          onChange={(event) => setPasswordNew(event.target.value)}
        />

        <Button title="Salvar" type="submit" />
      </Form>
    </Container>
  )
}
