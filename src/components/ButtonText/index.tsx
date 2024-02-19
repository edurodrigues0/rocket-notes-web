import { Container } from './styles'

interface ButtonTextProps {
  title: string
}

export function ButtonText({ title, ...rest }: ButtonTextProps) {
  return (
    <Container type="button" {...rest}>
      {title}
    </Container>
  )
}
