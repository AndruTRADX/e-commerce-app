import LazyImage from '../common/LazyImage'
import { ProductType } from '../types'

const ProductShopCart = ({
  product,
  index,
}: {
  product: ProductType
  index: number
}) => {
  return (
    <li className="flex py-6" key={`product-shop-card-${product.id}-${index}`}>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-200">
        <LazyImage
          src={product.image}
          alt={product.description}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-slate-700">
            <h3>
              <p>{product.name}</p>
            </h3>
            <p className="ml-4">${product.price}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex">
            <button
              type="button"
              className="font-medium text-slate-700 hover:text-slate-800"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProductShopCart
