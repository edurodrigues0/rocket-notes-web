import styled from 'styled-components'
import theme from '../../styles/theme'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48 0px;
  }

  > p {
    font-size: 14px;
    color: ${theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 124px;
    color: ${theme.COLORS.ORANGE};
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.7);
`
