import { GetStaticProps } from "next";
import Link from "next/link";
import SEO from '@/components/seo'
import Menu from '@/components/menu';
import { MyLink } from '@/components/MyLink'

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

export default function Products({ products }: IProducts) {
  return (
    <>
      <SEO 
      title="Produtos" 
      shouldExcludeTitleSuffix={false} 
      shouldIndexPage={true} 
      description="Pagina de Produtos" />
      <Menu />
      <div>
        <h1>Produtos...</h1>
      </div>
      <ul>
        {products.map((product) => (
          <li key={String(product.id)}>
            <p>{product.title}</p>
            <span>{product.price}</span>
            <Link href={`products/${product.slug}`}>
              <MyLink>Detalhes</MyLink>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("http://localhost:3333/products");
  const products = await response.json();
  return {
    props: {
      products,
    },
    revalidate: 5,
  };
};
