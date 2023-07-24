const API = import.meta.env.VITE_API as string

export const endpoints = {
  getProducts: `${API}/products`,
  getCategories: `${API}/categories`,
  getBrands: `${API}/categories`,
  getOneProduct(id: string) {return `${API}/products/${id}`},
  getOneCategory(id: string) {return `${API}/categories/${id}`},
  getOneBrand(id: string) {return `${API}/brands/${id}`},
}