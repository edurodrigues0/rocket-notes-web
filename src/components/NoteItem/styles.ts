import styled from 'styled-components'
import theme from '../../styles/theme'

interface ContainerProps {
  $isnew: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background-color: ${({ $isnew }) =>
    $isnew ? 'transparent' : theme.COLORS.BACKGROUND_900};

  color: ${theme.COLORS.GRAY_300};

  border: ${({ $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${theme.COLORS.RED};
  }

  .button-add {
    color: ${theme.COLORS.ORANGE};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${theme.COLORS.GRAY_300};
    }
  }
`
