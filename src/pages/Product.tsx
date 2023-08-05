import { useState, useEffect } from 'react'
import { BuildingOffice2Icon, TagIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import LazyImage from '../common/LazyImage'
import { Link, useParams } from 'react-router-dom'
import { ProductType } from '../types'
import axios from 'axios'
import { endpoints } from '../libs/endpoints'
import { useShopCart } from '../hooks/useShopCart'
import Modal from '../common/Modal'

const Product = ({ isLogin }: { isLogin: boolean }) => {
  const { id } = useParams()
  // const [quantity, setQuantity] = useState<number>(1)
  const [product, setProduct] = useState<ProductType>()
  const [open, setOpen] = useState<boolean>(false)
  const shopCart = useShopCart()

  // const handlerQuantity = (more: 'more' | 'less') => {
  //   if (more === 'more') {
  //     setQuantity((prev) => prev + 1)
  //   } else if (more === 'less') {
  //     if (quantity > 1 && product?.stock) {
  //       setQuantity((prev) => prev - 1)
  //     }
  //   }
  // }

  const handleAddProduct = () => {
    if (id && isLogin) {
      void shopCart?.addProduct(id)
    }
  }

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(endpoints.getOneProduct(id || ''))
      setProduct(res.data as ProductType)
    }

    void getProduct()
  }, [id])

  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center px-8">
        <Navbar isLogin={isLogin} />
        <div className="w-full flex items-center md:items-stretch flex-col-reverse md:flex-row flex-grow min-h-full max-w-screen-xl">
          <div className="flex flex-[0.5] py-12 md:mr-6">
            <div className="w-full h-min flex justify-center items-center border border-slate-200 p-4 rounded-lg">
              <LazyImage
                src={product?.image || ''}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-6 flex-[0.5] py-12">
            <h2 className="font-bold text-2xl text-slate-700 capitalize">
              {product?.name || ''}
            </h2>
            <p className="font-normal text-base text-slate-500">
              {product?.description || ''}
            </p>

            <div className="w-full flex justify-between">
              <h2 className="font-bold text-2xl text-slate-700">
                ${product?.price || ''}
              </h2>
              <h2 className="font-normal text-md text-slate-500">
                Stock:{' '}
                <span className="font-bold text-slate-700">
                  {product?.stock || ''}
                </span>
              </h2>
            </div>

            <hr className="border-slate-200" />

            <div className="flex w-full justify-between items-center gap-4">
              {product?.brand?.name && (
                <div className="flex justify-between items-center gap-2 font-semibold text-base text-slate-700 capitalize">
                  <BuildingOffice2Icon className="w-5 h-5" />
                  {product?.brand?.name || ''}
                </div>
              )}
              <div className="flex justify-between items-center gap-2 font-semibold text-base text-slate-700 capitalize">
                <TagIcon className="w-5 h-5" /> {product?.category?.name || ''}
              </div>
            </div>

            <hr className="border-slate-200" />

            <div className="flex w-full gap-4">
              {/* <div className="flex justify-evenly items-center font-semibold text-slate-700 border border-slate-300 rounded-lg py-2.5 px-4 select-none gap-2">
              <MinusSmallIcon
                className="w-5 h-5 text-slate-500 cursor-pointer"
                onClick={() => handlerQuantity('less')}
              />
              {quantity}
              <PlusSmallIcon
                className="w-5 h-5 text-slate-500 cursor-pointer"
                onClick={() => handlerQuantity('more')}
              />
            </div> */}

              <button
                className={`rounded-lg bg-slate-700 text-white font-semibold hover:bg-slate-800 py-2.5 px-4 select-none gap-2`}
                onClick={() =>
                  isLogin ? handleAddProduct() : setOpen((prev) => !prev)
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal open={open} setOpen={setOpen}>
      <div className="flex flex-col items-center gap-y-8">
          <h2 className="text-slate-500 text-lg">
            To add a product to the cart you need to log in
          </h2>
          <div className="flex gap-4">
            <Link
              to="/login"
              className="rounded-lg bg-slate-700 text-white font-semibold hover:bg-slate-800 py-2.5 px-4 select-none gap-2"
            >
              Log in
            </Link>
            <button onClick={() => setOpen(prev => !prev)} className="rounded-lg text-slate-700 font-semibold border border-slate-300 hover:bg-slate-50 py-2.5 px-4 select-none gap-2">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Product
