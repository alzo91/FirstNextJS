import React from 'react';
import {useRouter} from 'next/router'
// import { Container } from './styles';

const products: React.FC = () => {
  const route = useRouter()
  return <div><h1>{route.query.slug}</h1></div>;
}

export default products;
