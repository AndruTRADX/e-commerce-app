const API = import.meta.env.VITE_API as string

export const endpoints = {
  getProducts: `${API}/products`,
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
}
