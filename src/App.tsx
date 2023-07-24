import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SearchProducts from './pages/SearchProducts'
import SearchByCategory from './pages/SearchByCategory'
import SearchByBrand from './pages/SearchByBrand'
import Login from './pages/Login'
import Product from './pages/Product'

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route path="/search/:id" element={<SearchProducts />} />
        <Route path="/product/:id" element={<Product isLogin={isLogin} />} />
        <Route
          path="/category/:id"
          element={<SearchByCategory isLogin={isLogin} />}
        />
        <Route
          path="/brand/:id"
          element={<SearchByBrand isLogin={isLogin} />}
        />
        <Route path="/login" element={<Login setLogin={setIsLogin} />} />
      </Routes>
    </>
  )
}

export default App
