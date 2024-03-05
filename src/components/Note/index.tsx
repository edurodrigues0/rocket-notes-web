import { Container } from './styles'
import { Tag } from '../Tag'

interface Tag {
  id: string
  name: string
}

interface Note {
  title: string
  tags: Tag[]
}

interface NoteProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  data: Note
}

export function Note({ data, ...rest }: NoteProps) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
