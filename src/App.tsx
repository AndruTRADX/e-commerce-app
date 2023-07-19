import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SearchProducts from './pages/SearchProducts'
import SearchByCategory from './pages/SearchByCategory'
import SearchByBrand from './pages/SearchByBrand'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SearchProducts />} />
        <Route path='/product/:id' element={<SearchProducts />} />
        <Route path='/category/:id' element={<SearchByCategory />} />
        <Route path='/brand/:id' element={<SearchByBrand/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
