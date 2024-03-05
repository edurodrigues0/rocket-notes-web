import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'
import { ButtonText } from '../../components/ButtonText'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState<string[]>([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted: number) {
    setLinks((prevState) =>
      prevState.filter((_link, index) => index !== deleted),
    )
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted: number) {
    setTags((prevState) => prevState.filter((_tag, index) => index !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Adicione pelo menos um titulo a nota!')
    }

    if (newTag) {
      return alert('Voce deixou uma tag para adicionar!')
    }

    if (newLink) {
      return alert('Voce deixou uma link para adicionar!')
    }

    api.post('/notes', {
      title,
      description,
      tags,
      links,
    })

    alert('Nota criada com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" onClick={() => navigate(-1)} />
          </header>

          <Input
            placeholder="Titulo"
            onChange={(event) => setTitle(event.target.value)}
          />

          <TextArea
            placeholder="Observacoes"
            value=""
            onChange={(event) => setDescription(event.target.value)}
          />

          <Section title="Links uteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                placeholder="Novo link"
                value={link}
                onChange={(event) => setNewLink(event.target.value)}
                onClick={() => handleRemoveLink(index)}
              />
            ))}

            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(event) => setNewLink(event.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(index)
                  }}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={(event) => setNewTag(event.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  )
}
