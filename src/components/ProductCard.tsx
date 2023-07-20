import { Link } from 'react-router-dom'
import LazyImage from '../common/LazyImage'

const ProductCard = () => {
  return (
    <Link className="flex flex-col w-full relative" to="#">
      <span className="absolute top-3 left-3 bg-rose-700 rounded text-sm py-[2px] px-[9px] font-semibold text-white">
        Sale
      </span>

      <LazyImage
        src="https://picsum.photos/400/400/"
        className="object-cover rounded-lg"
      />
      <div className="flex justify-between items-center mt-3">
        <p className="font-semibold text-slate-700">Autumn Dress</p>
        <h3 className="font-bold text-xl text-slate-700">$85</h3>
      </div>

      <div className="flex justify-end items-center">
        <h4 className="font-normal text-sm text-slate-400 line-through decoration-red-600">
          $124
        </h4>
      </div>
    </Link>
  )
}

export default ProductCard
