import styled from 'styled-components'
import { colors } from '../../assets/styles/color'

export const CardButton = styled.button`
  background: ${colors.primaryBgColor};
  color: ${colors.secondaryTextColor};
  transition: background ease .2s;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  gap: .5em;
  padding: .5em 1em;
  cursor: pointer;
  &:hover {
    background-color: ${colors.buttonHoverColor};
  }
  &:active {
    box-shadow: inset .1em .3em .5em #116A55;
    transform: scale(.96);
  }
`