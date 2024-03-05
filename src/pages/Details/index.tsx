import { Container, Content, Links } from './styles'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

type Links = {
  id: string
  url: string
}

type Tags = {
  id: string
  name: string
}

interface Note {
  id: string
  title: string
  description: string
  links: Links[]
  tags: Tags[]
}

export function Details() {
  const [data, setData] = useState<Note | null>(null)
  const params = useParams()

  const navigate = useNavigate()

  async function handleRemove() {
    const confirm = window.confirm('Deseja remover a nota?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [params])

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={link.id}>
                      <a href={link.url}>{link.url}</a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </Section>
            )}

            <Button title="Voltar" onClick={() => navigate(-1)} />
          </Content>
        </main>
      )}
    </Container>
  )
}
