import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.section`
  margin: 50px 0 28px;

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`
