import { GetStaticProps } from "next"
import SEO from '@/components/seo'
import Menu from '@/components/menu';
import Link from "next/link";
import Table from 'react-bootstrap/Table'
import { MyLink } from "@/components/MyLink";
interface ICategory {
  id: String,
  title:String,
}

interface ICategories{
  categories: ICategory[]
}

export default function Categories({categories}:ICategories){
    return (
      <>
        <SEO 
          title="Categorias" 
          shouldExcludeTitleSuffix={false} 
          shouldIndexPage={true} 
          description="Pagina de Produtos" />
      <Menu />
      <div>
        <h1>Categorias...</h1>
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <td>Categoria</td>
            <td>Detalhes</td>
          </tr>
        </thead>
        <tbody>
        {
          categories.map(category =>( 
            <tr key={String(category.id)}>
              <td>{category.title}</td>
              <td>
                <Link href={`/catalog/categories/${String(category.id)}`}>
                  <MyLink noPadding={true}>Detalhes</MyLink>
                </Link>
              </td>
            </tr>
            ))}
        </tbody>
      </Table>
      </>
    )

}

export const getStaticProps:GetStaticProps = async (context) =>{
  const response = await fetch('http://localhost:3333/categories');
  const categories = await response.json();
  return {
    props:{
      categories,
    },revalidate:60,
  }
}
