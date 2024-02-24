import { AuthContextProvider } from './hooks/auth'
import { Routes } from './routes'

export function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  )
}
