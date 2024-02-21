import { ReactNode, createContext, useContext, useState } from 'react'
import { api } from '../services/api'

interface User {
  id: string
  name: string
  email: string
}

interface DataProps {
  token: string
  user: User
}

interface AuthContextData {
  signIn: (email: string, password: string) => void
  user: User | undefined
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<DataProps>()
  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Nao foi possivel se autenticar.')
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: data?.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
