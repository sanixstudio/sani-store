import styled from 'styled-components'
import {colors} from '../../assets/styles/color'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 4em 2em;
`
export const TagsButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em; 
`

export const TagButton = styled.button`
  background: #fff;
  border: none;
  width: 100%;
  box-shadow: 0 1em 1em #ddd;
  padding: 1em 1.75em;
  cursor: pointer;
  transition: background ease .2s;
  color: ${colors.primaryTextColor};
  &:hover, &:focus {
    outline: none;
    background: #eee;
  }
  &:active {
    box-shadow: inset 0 0 2em #ddd;
  }

  @media (min-width: 370px) {
   width: auto !important;
  }
`