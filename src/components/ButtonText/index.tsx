import { Container } from './styles'

interface ButtonTextProps {
  title: string
  isActive?: boolean
}

export function ButtonText({
  title,
  isActive = false,
  ...rest
}: ButtonTextProps) {
  return (
    <Container type="button" $isactive={isActive.toString()} {...rest}>
      {title}
    </Container>
  )
}
