
import { GetStaticPaths, GetStaticProps } from 'next';
import { route } from 'next/dist/next-server/server/router';
import {useRouter} from 'next/router'

interface IProduct {
  id: String;
  title: String;
  price:Number,
  category_id:String,
  slug:String,
  calcas: String,
}

interface IProducts {
  products: IProduct[];
}

export default function category({products}:IProducts){
  const router = useRouter()
  
  if (router.isFallback){
    return (
      <div>
        <h1>'Carregando...'</h1>
      </div>
    )
  }

  return (
  <>
    <div>
      <h1>{router.query.slug}</h1>
    </div>
    <ul>
      {products.map((product) => (
        <li key={String(product.id)}>
          <p>{product.title}</p>
          <span>{product.price}</span>
        </li>
      ))}
    </ul>
  </>
  );
}

export const getStaticPaths: GetStaticPaths = async () =>{
  const response = await fetch('http://localhost:3333/categories');
  const categories = await response.json();

  const paths = categories.map(category =>{
    return {
      params: {slug: category.id}
    }
  })

  return{
    paths,
    fallback:true,
  }
}

export const getStaticProps: GetStaticProps<IProducts> = async (context) =>{
  const { slug } = context.params;
  const response = await fetch(`http://localhost:3333/products?category_id=${slug}`);
  const products= await response.json();
  return{
    props:{
      products,
    },
    revalidate:30
  }
}
 
