import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

interface Note {
  id: string
  title: string
  user_id: string
  tags: {
    id: string
    name: string
    note_id: string
  }[]
}

export function Home() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    api.get('/notes').then((response) => setNotes(response.data))
  }, [])

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
          {notes.map((note) => (
            <Note key={note.id} data={note} />
          ))}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}
