import styled from 'styled-components'
import theme from '../../styles/theme'

interface ContainerProps {
  $isactive?: string
}

export const Container = styled.button<ContainerProps>`
  background: none;
  color: ${({ $isactive }) =>
    $isactive === 'true' ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};

  border: none;
  font-size: 1rem;
`
