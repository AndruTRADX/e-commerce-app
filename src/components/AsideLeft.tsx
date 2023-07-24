import { useState, useEffect } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import {
  ChevronRightIcon,
  ArrowLeftOnRectangleIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { asideLeftPriceList } from '../constants'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { endpoints } from '../libs/endpoints'

interface CategoryType {
  _id: string
  name: string
  image: string
}

interface BrandType {
  _id: string
  name: string
  image: string
}

const AsideLeft = ({ isLogin }: { isLogin: boolean }) => {
  const [categories, setCategories] = useState<CategoryType[]>()
  const [brands, setBrands] = useState<BrandType[]>()

  useEffect(() => {
    const getProduct = async () => {
      const resCategories = await axios.get(endpoints.getCategories)
      
      const resBrands = await axios.get(endpoints.getBrands)

      setBrands(resBrands.data as BrandType[])
      setCategories(resCategories.data as CategoryType[])
    }

    void getProduct()
  }, [])

  return (
    <div className="w-[320px] min-h-full mt-8 mr-2 hidden xs:block">
      <div className="border rounded-lg p-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`aside_left-div justify-between hover:bg-slate-100 ${
                  open ? 'bg-slate-50' : ''
                }`}
              >
                <p>Category</p>
                <ChevronRightIcon
                  className={`w-5 h-5 text-slate-700 ${
                    open ? 'rotate-90 transform' : ''
                  }`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                {categories?.map((item, index) => (
                  <Disclosure.Panel
                    className="flex"
                    key={`aside-left-${item.name}-${index}`}
                  >
                    <span className="m-2" />{' '}
                    <Link to={`/category/${item._id}`} className="aside_left-div hover:bg-slate-100 cursor-pointer text-start capitalize">
                      {item.name}
                    </Link>
                  </Disclosure.Panel>
                ))}
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`aside_left-div justify-between hover:bg-slate-100 ${
                  open ? 'bg-slate-50' : ''
                }`}
              >
                <p>Brands</p>
                <ChevronRightIcon
                  className={`w-5 h-5 text-slate-700 ${
                    open ? 'rotate-90 transform' : ''
                  }`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                {brands?.map((item, index) => (
                  <Disclosure.Panel
                    className="flex"
                    key={`aside-left-${item.name}-${index}`}
                  >
                    <span className="m-2" />{' '}
                    <Link to={`/brand/${item._id}`} className="aside_left-div hover:bg-slate-100 cursor-pointer text-start capitalize">
                      {item.name}
                    </Link>
                  </Disclosure.Panel>
                ))}
              </Transition>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`aside_left-div justify-between hover:bg-slate-100 ${
                  open ? 'bg-slate-50' : ''
                }`}
              >
                <p>Price</p>
                <ChevronRightIcon
                  className={`w-5 h-5 text-slate-700 ${
                    open ? 'rotate-90 transform' : ''
                  }`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                {asideLeftPriceList.map((item, index) => (
                  <Disclosure.Panel
                    className="flex"
                    key={`aside-left-${item.content}-${index}`}
                  >
                    <span className="m-2" />{' '}
                    <p className="aside_left-div hover:bg-slate-100 cursor-pointer text-start">
                      {item.content}
                    </p>
                  </Disclosure.Panel>
                ))}
              </Transition>
            </>
          )}
        </Disclosure>

        <hr />
        {isLogin ? (
          <div className="flex items-center p-2 mt-2 gap-2 hover:bg-slate-100 cursor-pointer rounded-lg">
            <ArrowLeftOnRectangleIcon className="w-5 h-5 text-slate-700" />
            <p className="text-slate-700 font-semibold">Log Out</p>
          </div>
        ) : (
          <Link to="/login" className="flex items-center p-2 mt-2 gap-2 hover:bg-slate-100 cursor-pointer rounded-lg">
            <UserIcon className="w-5 h-5 text-slate-700" />
            <p className="text-slate-700 font-semibold">Login</p>
          </Link>
        )}
      </div>
    </div>
  )
}

export default AsideLeft
