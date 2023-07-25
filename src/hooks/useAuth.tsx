/* eslint-disable react-refresh/only-export-components */
import {
  useState,
  useContext,
  createContext,
  useEffect,
  useCallback,
} from 'react'
import Cookie from 'js-cookie'
import axios from 'axios'
import { endpoints } from '../libs/endpoints'

interface User {
  name: string
  email: string
  role: string
}

interface Props {
  children: JSX.Element
}

export interface AuthState {
  user?: User
}

export interface LoginResponse {
  access_token: string
}

interface AppContextInterface {
  user: User | undefined
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AppContextInterface | undefined>(undefined)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const useAuthProvider = () => {
  const [user, setUser] = useState<User>()

  const checkToken = useCallback(async () => {
    const token = Cookie.get('token')
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`
      try {
        const res = await axios.get(endpoints.auth.validate)
        const loggedUser = res.data as User
        setUser({
          name: loggedUser.name,
          email: loggedUser.email,
          role: loggedUser.role,
        })
      } catch (error) {
        console.error('Error while validating token:', error)
      }
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    const data = {
      email,
      password,
    }
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post(endpoints.auth.signIn, data, options)
      const token = res.data as LoginResponse
      if (token) {
        Cookie.set('token', token.access_token, { secure: true, expires: 10 })
      }
    } catch (error) {
      console.error('Error while validating token:', error)
    }
  }

  const signUp = async (email: string, password: string, name: string) => {
    const data = {
      email,
      password,
      name,
    }
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    try {
      await axios.post(endpoints.auth.signUp, data, options)
    } catch (error) {
      console.error('Error while validating token:', error)
    }
  }

  const signOut = () => {
    Cookie.remove('token')
    setUser(undefined)
    delete axios.defaults.headers.Authorization
  }

  useEffect(() => {
    const fetchToken = async () => {
      await checkToken()
    }
    void fetchToken()
  }, [checkToken])

  return {
    user,
    signIn,
    signUp,
    signOut,
  }
}

export const ProviderAuth = (props: Props) => {
  const { children } = props
  const auth = useAuthProvider()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
