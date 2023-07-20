import Navbar from "../components/Navbar"

const Product = ({ isLogin }: { isLogin: boolean }) => {

  return (
    <main>
      <Navbar isLogin={isLogin} />
    </main>
  )
}

export default Product