import { useState } from 'react'
import {
  BuildingOffice2Icon,
  MinusSmallIcon,
  PlusSmallIcon,
  TagIcon,
} from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import LazyImage from '../common/LazyImage'
import { useParams } from 'react-router-dom'

const Product = ({ isLogin }: { isLogin: boolean }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState<number>(1)

  const handlerQuantity = (more: boolean) => {
    if (more) {
      setQuantity((prev) => prev + 1)
    } else if (more === false) {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1)
      }
    }
  }

  console.log(id);

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-8">
      <Navbar isLogin={isLogin} />
      <div className="w-full flex items-center md:items-stretch flex-col-reverse md:flex-row flex-grow min-h-full max-w-screen-xl">
        <div className="flex flex-[0.5] py-12 md:mr-6">
          <LazyImage
            src="https://picsum.photos/600/600/"
            className="rounded-3xl object-cover"
          />
        </div>

        <div className="flex flex-col gap-y-6 flex-[0.5] py-12">
          <h2 className="font-bold text-2xl text-slate-700 capitalize">
            nintendo switch
          </h2>
          <p className="font-normal text-base text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <h2 className="font-bold text-2xl text-slate-700">$299</h2>

          <hr className="" />

          <div className="flex w-full justify-between items-center gap-4">
            <div className="flex justify-between items-center gap-2 font-semibold text-base text-slate-700 capitalize">
              <BuildingOffice2Icon className="w-5 h-5" />
              nintendo
            </div>
            <div className="flex justify-between items-center gap-2 font-semibold text-base text-slate-700 capitalize">
              <TagIcon className="w-5 h-5" /> video games
            </div>
          </div>

          <hr className="" />

          <div className="flex w-full gap-4">
            <div className="flex justify-evenly items-center font-semibold text-slate-700 border border-slate-300 rounded-lg py-2.5 px-4 select-none gap-2">
              <MinusSmallIcon
                className="w-5 h-5 text-slate-500 cursor-pointer"
                onClick={() => handlerQuantity(false)}
              />
              {quantity}
              <PlusSmallIcon
                className="w-5 h-5 text-slate-500 cursor-pointer"
                onClick={() => handlerQuantity(true)}
              />
            </div>

            <button className="rounded-lg bg-slate-700 text-white font-semibold px-4 hover:bg-slate-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
