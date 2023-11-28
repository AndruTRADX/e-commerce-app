import { Link } from 'react-router-dom'
import LazyImage from '../common/LazyImage'
import { ProductType } from '../types'

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Link
      className="flex flex-col w-full relative border border-slate-200 justify-between rounded-lg p-4 transition-[box-shadow] hover:shadow-xl hover:shadow-slate-200/50 min-h-[100px]"
      to={`/product/${product._id}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <span className="absolute top-3 left-3 bg-rose-700 rounded text-sm py-[2px] px-[9px] font-semibold text-white">
        Sale
      </span>

      <div className="w-full h-full flex justify-center items-center">
        <LazyImage
          src={product.image}
          className="object-contain rounded-lg max-h-[300px]"
        />
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mt-3 gap-x-2">
          <p className="font-semibold text-slate-700 text-lg capitalize">
            {product.name}
          </p>
          <h3 className="font-bold text-xl text-slate-700">${product.price}</h3>
        </div>

        <div className="flex justify-end items-center">
          <h4 className="font-normal text-sm text-slate-400 line-through decoration-red-600">
            ${product.price + Math.floor(product.price / 10)}
          </h4>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
