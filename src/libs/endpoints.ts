const API = import.meta.env.VITE_API as string

export const endpoints = {
  getProducts(limit?: number, offset?: number) {
    return limit && offset
      ? `${API}/products?limit=${limit}&offset=${offset}`
      : `${API}/products`
  },
  getCategories: `${API}/categories`,
  getBrands: `${API}/brands`,
  getOneProduct(id: string) {
    return `${API}/products/${id}`
  },
  getOneCategory(id: string) {
    return `${API}/categories/${id}`
  },
  getOneBrand(id: string) {
    return `${API}/brands/${id}`
  },
  getProductsByCategoryId(id: string) {
    return `${API}/products/category/${id}`
  },
  getProductsByBrandId(id: string) {
    return `${API}/products/brand/${id}`
  },
  getProductsByQuery(query: string) {
    return `${API}/products/search/${query}`
  },
  auth: {
    signIn: `${API}/auth/login`,
    validate: `${API}/auth/profile`,
    signUp: `${API}/users/`,
  },
  getOrderByUserId(id: string) {
    return `${API}/orders/user/${id}`
  },
  productToOrder: (id: string, productId: string) => {
    return `${API}/orders/${id}/product/${productId}`
  },
  order: `${API}/orders`,
}
