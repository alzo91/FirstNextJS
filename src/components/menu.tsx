import Link from "next/link";
import { Navbar, Nav, } from 'react-bootstrap'
export default function Menu(){
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
         <Nav.Link href={`/catalog/categories`}>
         Categorias
        </Nav.Link>
        <Nav.Link href={`/catalog/products`}>
         Produtos
        </Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
