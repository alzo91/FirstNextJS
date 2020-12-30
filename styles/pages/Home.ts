import styled from 'styled-components'

export const Title = styled.h1`
  color: #8257e5;
`
export const Container = styled.div`
  /* background-color: #808080; */
  padding: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;

  ul{
    background-color: #2F2F30;
    border-radius: 6px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2px;
    li{
      margin: 7px 7px 7px 7px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      background-color: #222229;
      border-radius: 25px;
      box-shadow: 5px 5px 3px #008080;

    }
  }
`
