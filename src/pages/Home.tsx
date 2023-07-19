import ProductList from '../common/ProductList'
import AsideLeft from '../components/AsideLeft'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-8">
      <Navbar />
      <div className="w-full flex flex-grow min-h-full max-w-screen-xl">
        <AsideLeft />
        <ProductList />
      </div>
    </div>
  )
}

export default Home
