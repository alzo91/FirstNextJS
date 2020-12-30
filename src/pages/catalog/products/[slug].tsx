import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router'
// import { Container } from './styles';
import SEO from '@/components/seo'
import Menu from '@/components/menu';
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

const products: React.FC = () => {
  const [productName, setProductName] = useState<String>('')
  const [productPrice, setProductPrice] = useState<Number>(0)
  const router = useRouter()
  

  useEffect(()=>{
    (async function getProductInfo(){      
      if (!!router.query.slug){

      
      const resp = await fetch(`http://localhost:3333/products?slug=${router.query.slug}`);
      const products : IProducts = await resp.json();
      
       const { price,title }: IProduct = products[0];
      setProductName(String(title));
      setProductPrice(price);
      }
    })()
    
  },[router.query])
  
  return (
    <>
      <SEO title={`{name}`}
        description={``}
        shouldIndexPage={true}
        shouldExcludeTitleSuffix />
        <Menu />
      <div>
        <h1>{productName}</h1>
        <div>
          <p>addictional infos: {router.query.slug}</p>
          <p>Preço:{productPrice}</p>
        </div>
      </div>
    </>
  );
}

export default products;
