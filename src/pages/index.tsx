import { GetServerSideProps } from 'next'
import Link from 'next/link'
import SEO from '@/components/seo';
import {Title,Container} from '../../styles/pages/Home'

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
       shouldExcludeTitleSuffix={true}
       image='clean-energy.png'/>
      <Container>
        <Title>Curso de NextJS</Title>
        <ul>
          {recommendedProducts.map( item => 
            (<li key={String(item.id)} onClick={()=>{}}>
              <Link href={`catalog/products/${item.slug}`}>
                <a>{item.title}</a>
              </Link>
              
              <Link href={`catalog/categories/${item.category_id}`}>
                <a>Categoria: {item.category_id}</a>
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
