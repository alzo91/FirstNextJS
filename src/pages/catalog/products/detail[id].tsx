import { useRouter } from 'next/router';
import React from 'react';

// import { Container } from './styles';

const products: React.FC = () => {
  const route = useRouter()
  return <div>
    <h1>Produto.: {route.query.id}</h1>
  </div>;
}

export default products;
