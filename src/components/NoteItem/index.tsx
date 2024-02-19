import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'
import { MouseEventHandler } from 'react'

interface NoteItemProps {
  isNew: boolean
  value: string
  onClick: MouseEventHandler
}

export function NoteItem({ isNew, value, onClick, ...rest }: NoteItemProps) {
  return (
    <Container $isnew={isNew}>
      <input
        type="text"
        placeholder="Novo link"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
