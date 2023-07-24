import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navbarList } from '../constants'
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import ShopCart from './ShopCart'
import LazyImage from '../common/LazyImage'
import devMarket from '../assets/devmarket-icon.svg'

const Navbar = ({ isLogin }: { isLogin: boolean }) => {
  const [openShopCart, setOpenShopCart] = useState(false)

  return (
    <>
      <nav className="w-full flex justify-center items-center px-8 fixed backdrop-blur bg-white/75 z-10">
        <div className="w-full max-w-screen-xl flex justify-between align-center py-4 border-b">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex justify-between items-center font-semibold text-2xl text-slate-700 cursor-pointer"
          >
            <h2>DevMarket</h2>
            <LazyImage
              className="w-10 h-10 text-slate-700 object-cover"
              src={devMarket}
            />
          </Link>

          <ul className="gap-8 hidden lg:flex">
            {navbarList.map((item, index) => (
              <li
                className="flex justify-center items-center"
                key={`navbar-item-${item.content}/${index}`}
              >
                <Link
                  className="text-base font-semibold text-slate-700 hover:underline decoration-slate-500 decoration-2"
                  to={item.link}
                >
                  {item.content}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center gap-2">
            <div className="relative hidden xs:block">
              <input
                placeholder={'Search'}
                className="navbar_search-input w-full"
              />
              <span>
                <MagnifyingGlassIcon className="w-6 h-6 absolute top-2 left-3 text-slate-400" />
              </span>
            </div>

            {isLogin && (
              <button
                className="rounded-lg flex justify-center items-center w-10 h-10 hover:bg-slate-100"
                onClick={() => setOpenShopCart((prev) => !prev)}
              >
                <ShoppingCartIcon className="w-5 h-5 absolute text-slate-700" />
              </button>
            )}

            <Link
              to={isLogin ? '' : '/login'}
              className="rounded-lg flex justify-center items-center w-10 h-10 hover:bg-slate-100"
            >
              <UserIcon className="w-5 h-5 absolute text-slate-700" />
            </Link>
          </div>
        </div>
      </nav>

      <div className="w-full h-[72px]" />

      <ShopCart open={openShopCart} setOpen={setOpenShopCart} />
    </>
  )
}

export default Navbar
