import React from 'react'
import Container from '../Container/Container'
import Product from '../Product/ProductBox'
import ProductBox from '../Product/ProductBox';

export default async function FeatureProducts() {
  const response = await fetch('https://fakestoreapi.in/api/products?limit=6');
  const data = await response.json();
  
  return (
    <Container>
      <h1 className="text-center text-2xl font-bold">
        Featured Products
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            data.products.map((prod)=>{
              return <ProductBox key={prod.id} product={prod}/>
            })
          }
        </div>
    </Container>
  )
}