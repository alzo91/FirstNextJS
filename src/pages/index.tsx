import { GetServerSideProps } from 'next'
import Link from 'next/link'
import SEO from '@/components/seo';
import Menu from '@/components/menu';
import {Title,Container} from '../../styles/pages/Home'
import { MyLink } from '@/components/MyLink'
interface IProduct {
  id: String,
  title: string,
  price: Number,
  category_id:String,
  slug:String
}

interface HomeProps {
  recommendedProducts: IProduct[]
}


export default function Home({recommendedProducts}:HomeProps) {
  // const [recommendedItens, setRecommendedItens]=useState<IProduct[]>([])

  /* useEffect(()=>{
    fetch('http://localhost:3333/recommended').then(response =>{
      response.json().then(data=>{
        setRecommendedItens(data)
      })
    })
  },[]) */

  return (
    <>
      <SEO 
       title='Your best Ecommerce'
       description="Wellcome to your best Ecommerce.!"
       shouldExcludeTitleSuffix={true}
       image='clean-energy.png'
       shouldIndexPage/>
       <Menu />
      <Container>
        
        <Title>Produtos Recomendados</Title>
        <Link href='/Dashboard'>
          <a>Dashboard</a>
        </Link>
        <Link href='/Login'>
          <a>Login</a>
        </Link>
        <ul>
          {recommendedProducts.map( item => 
            (<li 
              key={String(item.id)} 
              className="box-border">
              <Link href={`/catalog/products/${item.slug}`}>
                <MyLink>{item.title}</MyLink>
              </Link>
              
              <Link href={`/catalog/categories/${item.category_id}`}>
                <MyLink>Categoria: {item.category_id}</MyLink>
              </Link>
              </li>
            )
          )}
        </ul>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () =>{
  const response = await fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();

  return{
    props:{
      recommendedProducts
    }
  }
}
