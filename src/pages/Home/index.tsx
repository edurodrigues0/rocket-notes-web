import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText isActive title="Todos" />
        </li>

        <li>
          <ButtonText title="React" />
        </li>

        <li>
          <ButtonText title="Node" />
        </li>
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo titulo"
          icon={<FiSearch size={20} />}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note
            data={{
              title: 'React',
              tags: [
                { id: '1', name: 'Node JS' },
                { id: '2', name: 'React JS' },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
