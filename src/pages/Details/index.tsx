import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Container, Links } from './styles'

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">Link 1</a>
          </li>
        </Links>
      </Section>
    </Container>
  )
}
