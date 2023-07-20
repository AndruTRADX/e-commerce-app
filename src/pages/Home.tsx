import ProductList from '../components/ProductList'
import AsideLeft from '../components/AsideLeft'
import Navbar from '../components/Navbar'

const Home = ({ isLogin }: { isLogin: boolean }) => {

  return (
    <main className="w-full min-h-screen flex flex-col items-center px-8">
      <Navbar isLogin={isLogin} />
      <div className="w-full flex flex-grow min-h-full max-w-screen-xl">
        <AsideLeft isLogin={isLogin} />
        <ProductList />
      </div>
    </main>
  )
}

export default Home
