/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { OrderType, ProductType } from '../types'
import { useAuth } from './useAuth'
import axios from 'axios'
import { endpoints } from '../libs/endpoints'

interface Props {
  children: JSX.Element
}

export interface AuthState {
  order?: OrderType
}

interface AppContextInterface {
  shopCart: ProductType[] | undefined
  orderId: string | undefined
  addProduct: (productId: string) => Promise<void>;
  removeProduct: (productId: string) => Promise<void>;
}

const ShopCartContext = createContext<AppContextInterface | undefined>(
  undefined,
)

export const useShopCart = () => {
  return useContext(ShopCartContext)
}

export const useAuthProvider = () => {
  const [shopCart, setShopCart] = useState<ProductType[]>()
  const [orderId, setOrderId] = useState<string>()
  const auth = useAuth()

  const getShopCart = useCallback(async () => {
    try {
      if (auth?.user?._id) {
        const res = await axios.get(endpoints.getOrderByUserId(auth?.user?._id))

        if (res.data) {
          const orderResponse = res.data as OrderType
          setOrderId(orderResponse._id)
          setShopCart(orderResponse.products)
        } else if (!res.data) {
          const data = {
            user: auth?.user?._id,
          }

          const options = {
            headers: {
              accept: '*/*',
              'Content-Type': 'application/json',
            },
          }

          const createRes = await axios.post(endpoints.order, data, options)
          const orderResponse = createRes.data as OrderType

          setOrderId(orderResponse._id)
          setShopCart(orderResponse.products)
        }
      }
    } catch (error) {
      console.error('Error fetching shop cart:', error)
      return []
    }
  }, [auth?.user?._id])

  useEffect(() => {
    if (auth?.user?._id) {
      void getShopCart()
    }
  }, [getShopCart, auth?.user?._id])

  const addProduct = async (productId: string) => {
    try {
      if (orderId && productId) {
        const res = await axios.put(
          endpoints.productToOrder(orderId, productId),
        )

        const orderResponse = res.data as OrderType
        setShopCart(orderResponse.products)
      }
    } catch (error) {
      console.error('Error fetching shop cart:', error)
    }
  }

  const removeProduct = async (productId: string) => {
    try {
      if (orderId && productId) {
        const res = await axios.delete(
          endpoints.productToOrder(orderId, productId),
        )

        const orderResponse = res.data as OrderType
        setShopCart(orderResponse.products)
      }
    } catch (error) {
      console.error('Error fetching shop cart:', error)
    }
  }

  return {
    orderId,
    shopCart,
    addProduct,
    removeProduct,
  }
}

export const ProviderShopCart = (props: Props) => {
  const { children } = props
  const shopCart = useAuthProvider()
  return (
    <ShopCartContext.Provider value={shopCart}>
      {children}
    </ShopCartContext.Provider>
  )
}
