import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'
import { ProductType } from '../types'
import { endpoints } from '../libs/endpoints'

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(endpoints.getProducts);
        setProducts(res.data as ProductType[]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    void getProducts();
  }, []);

  return (
    <main className="w-full min-h-full flex justify-center items-start my-8 md:ml-[280px] xs:ml-[240px]">
      <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  )
}

export default ProductList
