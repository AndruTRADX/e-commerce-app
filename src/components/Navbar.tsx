import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserIcon,
  Bars3BottomRightIcon,
} from '@heroicons/react/24/outline'
import ShopCart from './ShopCart'
import LazyImage from '../common/LazyImage'
import devMarket from '../assets/devmarket-icon.svg'
import { useNavigate } from 'react-router-dom'
import { useShopCart } from '../hooks/useShopCart'
import AsideSearchMobile from './AsideSearchMobile'

const Navbar = ({
  isLogin,
  setLogin,
  absolute,
}: {
  isLogin: boolean
  setLogin: React.Dispatch<React.SetStateAction<boolean>>
  absolute?: boolean
}) => {
  const [openShopCart, setOpenShopCart] = useState(false)
  const [openMobileModal, setOpenMobileModal] = useState(false)
  const [shopCartLength, setLenght] = useState<number>(0)

  const shopCart = useShopCart()

  useEffect(() => {
    if (shopCart?.shopCart?.length) {
      setLenght(shopCart?.shopCart?.length)
    }
  }, [shopCart?.shopCart?.length])
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      search: { value: string }
    }
    const search = target.search.value
    if (!search) {
      alert('Write first the product, brand or category to search.')
      return
    }
    navigate(`/search/${search}`)
  }

  return (
    <>
      <nav
        className={`w-full flex justify-center items-center  z-10 ${
          absolute ? 'absolute backdrop-blur bg-white/90' : 'bg-white'
        }`}
      >
        <div
          className={`w-full flex justify-between align-center py-4 border-b border-slate-200 ${
            absolute ? 'px-8' : 'max-w-screen-xl'
          }`}
        >
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex justify-between items-center font-semibold text-2xl text-slate-700 cursor-pointer"
          >
            <h2 className="hidden xs:block">DevMarket</h2>
            <LazyImage
              className="w-10 h-10 text-slate-700 object-cover"
              src={devMarket}
            />
          </Link>

          {/* ACTIONS FORM */}
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex justify-between items-center gap-2"
          >
            {/* SEARCH BAR (Desktop) */}
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder={'Search'}
                className="navbar_search-input w-full"
              />
              <button type="submit">
                <MagnifyingGlassIcon className="w-6 h-6 absolute top-2 left-3 text-slate-400" />
              </button>
            </div>

            {/* SEARCHING MENU (Mobile) */}
            <button
              type="button"
              className="rounded-lg flex xs:hidden justify-center border border-transparent items-center w-10 h-10 hover:bg-slate-50 hover:border-slate-300"
              onClick={() => setOpenMobileModal((prev) => !prev)}
            >
              <Bars3BottomRightIcon className="w-5 h-5 absolute text-slate-700" />
            </button>

            {/* SHOPPING CART BUTTON */}
            {isLogin && (
              <button
                type="button"
                className="flex rounded-lg relative justify-center border border-transparent items-center w-10 h-10 hover:bg-slate-50 hover:border-slate-300"
                onClick={() => setOpenShopCart((prev) => !prev)}
              >
                <ShoppingCartIcon className="w-5 h-5 absolute text-slate-700" />
                {shopCartLength > 0 && (
                  <span className="absolute text-xs bg-rose-600 rounded-full px-1.5 py-0.5 top-0 left-0 text-white font-bold">
                    {shopCartLength}
                  </span>
                )}
              </button>
            )}

            <Link
              to={isLogin ? '/profile' : '/login'}
              className="flex rounded-lg  justify-center border border-transparent items-center w-10 h-10 hover:bg-slate-50 hover:border-slate-300"
            >
              <UserIcon className="w-5 h-5 absolute text-slate-700" />
            </Link>
          </form>
        </div>
      </nav>

      <ShopCart open={openShopCart} setOpen={setOpenShopCart} />
      <AsideSearchMobile
        open={openMobileModal}
        setOpen={setOpenMobileModal}
        isLogin={isLogin}
        setLogin={setLogin}
      />
    </>
  )
}

export default Navbar
