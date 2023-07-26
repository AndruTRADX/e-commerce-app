export interface ProductType {
  _id: string
  name: string
  description: string
  image: string
  price: number
  stock: number
  category?: { name: string }
  brand?: { name: string }
}

export interface UserType {
  _id: string
  name: string
  email: string
  role: string
}

export interface OrderType {
  _id: string
  products: ProductType[]
  user: UserType
}