import { navbarList } from '../constants'
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center items-center">
      <div className="w-full max-w-screen-xl flex justify-between align-center py-4 bg-white">
        <div className="flex justify-between items-center gap-2 font-bold text-2xl text-slate-800">
          <h2>DevMarket</h2>
          <CodeBracketIcon className="w-7 h-7 text-slate-800" />
        </div>
        <ul className="flex gap-8">
          {navbarList.map((item, index) => (
            <li
              className="flex justify-center items-center"
              key={`navbar-item-${item.content}/${index}`}
            >
              <a
                className="text-base font-semibold text-slate-800"
                href={item.link}
              >
                {item.content}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center gap-2">
          <div className="relative">
            <input placeholder={'Search'} className="navbar_search-input" />
            <span>
              <MagnifyingGlassIcon className="w-6 h-6 absolute top-2 left-3 text-slate-400" />
            </span>
          </div>

          <button className="rounded-lg flex justify-center items-center w-10 h-10 hover:bg-slate-100">
            <ShoppingCartIcon className="w-5 h-5 absolute text-slate-800" />
          </button>

          <button className="rounded-lg flex justify-center items-center w-10 h-10 hover:bg-slate-100">
            <UserIcon className="w-5 h-5 absolute text-slate-800" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
