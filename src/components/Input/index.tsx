import { ReactElement } from 'react'
import { Container } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement
}

export function Input({ icon, ...rest }: InputProps) {
  return (
    <Container>
      {icon}
      <input {...rest} />
    </Container>
  )
}
