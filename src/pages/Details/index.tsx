import { Container, Content, Links } from './styles'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introducao ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            nobis ad repudiandae minima, autem magnam non, consequatur dicta qui
            aliquid saepe aperiam tempore reprehenderit dolor, velit culpa
            provident nulla accusamus.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.uol.com.br</a>
              </li>
            </Links>

            <Links>
              <li>
                <a href="#">https://www.cruzeiro.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
