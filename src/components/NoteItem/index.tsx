import { FiPlus, FiX } from 'react-icons/fi'

import { Container } from './styles'
import { ChangeEventHandler, MouseEventHandler } from 'react'

interface NoteItemProps {
  isNew?: boolean
  value: string
  onClick: MouseEventHandler
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}

export function NoteItem({
  isNew = false,
  placeholder,
  onChange,
  value,
  onClick,
  ...rest
}: NoteItemProps) {
  return (
    <Container $isnew={isNew}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
