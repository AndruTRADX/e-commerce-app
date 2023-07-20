import ProductCard from './ProductCard'

const ProductList = () => {
  return (
    <main className="w-full min-h-full flex justify-center items-start my-8 xs:ml-4">
      <div className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  )
}

export default ProductList
