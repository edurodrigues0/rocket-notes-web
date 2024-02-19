import { Container, Links } from './styles'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir nota" />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">Link 1</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}
