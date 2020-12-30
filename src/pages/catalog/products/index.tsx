import { GetStaticProps } from "next";

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
      <div>
        <h1>Categorias</h1>
      </div>
      <ul>
        {products.map((product) => (
          <li key={String(product.id)}>
            <p>{product.title}</p>
            <span>{product.price}</span>
            <a href={`products/${product.slug}`}>Detalhes</a>
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
