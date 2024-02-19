import { Container } from './styles'

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string
}

export function TextArea({ value, ...rest }: TextAreaProps) {
  return <Container {...rest}>{value}</Container>
}
