import Link from "next/link";
import { Navbar, Nav, } from 'react-bootstrap'
import { MyLink } from '@/components/MyLink'

export default function Menu(){
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand >
        <Link href="/">
          <MyLink>Home</MyLink>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" style={{justifyContent:'center'}} >
         
          <Link  href={`/catalog/categories`}>
            <MyLink>Categorias</MyLink>
          </Link>
        
        
          <Link  href={`/catalog/products`}>
            <MyLink>Produtos</MyLink>
          </Link>
        
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
