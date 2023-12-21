import { Link } from 'react-router-dom'
import Button from './Button'

const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center gap-2 mt-8">
      <h4 className="font-semibold text-xl text-slate-700">
        Product not found
      </h4>
      <p className="text-slate-500">
        There are no products that fit the search :(
      </p>
      <Link to="/">
        <Button text="Go back" top />
      </Link>
    </div>
  )
}

export default NotFound
