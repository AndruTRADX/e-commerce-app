import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ProductType } from '../types'
import axios from 'axios'
import { endpoints } from '../libs/endpoints'
import ProductCard from '../components/ProductCard'

const SearchProduct = ({ isLogin }: { isLogin: boolean }) => {
  const { query: searchQuery } = useParams()

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(endpoints.getProductsByQuery(searchQuery || ''));
        setProducts(res.data as ProductType[]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    void getProducts();
  }, [searchQuery]);

  return (
    <article className="w-full min-h-screen flex flex-col items-center px-8">
      <Navbar isLogin={isLogin} />
      <div className="w-full flex flex-grow min-h-full max-w-screen-xl">
        <article className="w-full min-h-full flex justify-center items-start my-8 xs:ml-4">
          <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </article>
      </div>
    </article>
  )
}

export default SearchProduct