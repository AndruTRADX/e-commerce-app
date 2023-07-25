import { useState, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SearchProducts from './pages/SearchProducts'
import SearchByCategory from './pages/SearchByCategory'
import SearchByBrand from './pages/SearchByBrand'
import Login from './pages/Login'
import Product from './pages/Product'
import { useAuth } from './hooks/useAuth'

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const auth = useAuth()

  useEffect(() => {
    if (auth?.user) setIsLogin(true)
  }, [auth])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home isLogin={isLogin} setLogin={setIsLogin} />}
        />
        <Route
          path="/search/:query"
          element={<SearchProducts isLogin={isLogin} />}
        />
        <Route path="/product/:id" element={<Product isLogin={isLogin} />} />
        <Route
          path="/category/:id"
          element={<SearchByCategory isLogin={isLogin} />}
        />
        <Route
          path="/brand/:id"
          element={<SearchByBrand isLogin={isLogin} />}
        />
        <Route
          path="/login"
          element={
            isLogin ? <Navigate to="/" /> : <Login setLogin={setIsLogin} />
          }
        />
      </Routes>
    </>
  )
}

export default App
