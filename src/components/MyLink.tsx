import React from 'react'
import styled from 'styled-components'

interface LinkProps {
  noPadding?: boolean
}

export const MyLink: React.FC<LinkProps> = styled.a<LinkProps>`
  display: flex;
  flex-direction: row;

  text-decoration: none;
  color: #e5e5e5;
  padding: ${ props  => props.noPadding ? '0' :'7px'};
  margin: 0;
  
  &:hover{
    opacity: 0.5;
     
  text-decoration: none;
  color: #e5e5e5;
  }
`
