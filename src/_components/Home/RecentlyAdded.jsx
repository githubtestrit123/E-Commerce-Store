"use client"
import React, { useEffect, useState } from 'react'
import Container from '../Container/Container'
import ProductBox from "../Product/ProductBox";

function RecentlyAdded() {
const [products, setProducts] = useState([]);

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.in/api/products?limit=12");
  const data = await response.json();
   console.log(data);
   setProducts(data.products);
  
}

useEffect(
  ()=> {
    getProducts();

  }, []
)
  return (
    <div>
      <div >
        <Container>
          <h1 className='text-center text-3xl font-bold'>Recently Added Products</h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            products.map((prod)=>{
              return <ProductBox key={prod.id} product={prod}/>
            })
          }
        </div>
        </Container>

      </div>
    </div>
  )
}

export default RecentlyAdded
