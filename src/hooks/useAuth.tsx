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
import { UserType } from '../types'

interface Props {
  children: JSX.Element
}

export interface AuthState {
  user?: UserType
}

export interface LoginResponse {
  access_token: string
}

interface AppContextInterface {
  user: UserType | undefined
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AppContextInterface | undefined>(undefined)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const useAuthProvider = () => {
  const [user, setUser] = useState<UserType>()

  const checkToken = useCallback(async () => {
    const token = Cookie.get('token')
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`
      try {
        const res = await axios.get(endpoints.auth.validate)
        const loggedUser = res.data as UserType
        setUser({
          name: loggedUser.name,
          email: loggedUser.email,
          role: loggedUser.role,
          _id: loggedUser._id,
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

    const res = await axios.post(endpoints.auth.signIn, data, options)
    const token = res.data as LoginResponse
    if (token) {
      Cookie.set('token', token.access_token, { secure: true, expires: 10 })
    }

    void checkToken()
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

    await axios.post(endpoints.auth.signUp, data, options)
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
