import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${theme.COLORS.BACKGROUND_900};
  color: ${theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > svg {
    margin-left: 16px;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${theme.COLORS.GRAY_300};
    }
  }
`
