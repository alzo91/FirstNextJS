import React ,{ useState } from 'react'
import { useRouter } from "next/router"
import styled from 'styled-components'
import { EEXIST } from 'constants';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: '#fff';
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: '#fff'; display: flex;
  width:900px;
  input{
    border-radius: 10px;
    border-style: none;
    margin: 3px 0px 7px 0px;
    padding: 10px;
  }
  button{

  }
`;

export default function Login(){
  const [userName, setUserName] = useState('')
  const [pass, setPass] = useState('');
  const [load, setLoad] = useState(0);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    setLoad(1);
    console.log(`${userName}, ${pass}`)
    try {
      const response = await fetch(`http://localhost:3333/users?user=${userName}&password=${pass}`)
      const data = await response.json();
      
      if (data.length>0){
        localStorage.setItem('objUser',JSON.stringify({...data[0]}))
        setLoad(0);
        router.push('/Dashboard')
      }      
      setLoad(0);
    } catch (error) {
      setLoad(0)
    }
  }
  
  return(
    <Container>
      <Form onSubmit={handleSubmit}>
      {!!router.query?.redirected && (<p>Users isn't authorized </p>)}
      <input placeholder="user" value={userName} onChange={e => setUserName( e.target.value)}/>
      <input placeholder="password" value={pass} onChange={e => setPass( e.target.value)}/>
      <button>
        {!!load? 'Verificando...' : 'Acessar?'}
      </button>
      </Form>
    </Container>
  )
}
