import createPersistedState from 'vuex-persistedstate'
import { Context } from '@nuxt/types'
import cookie from 'cookie'
import * as Cookies from 'js-cookie'

export default ({ store, req }: Context) => {
  const cookieStorage = {
    getItem(key: any) {
      if (process.server) {
        const parsedCookies = cookie.parse(req.headers.cookie || '')
        return parsedCookies[key]
      }
      return Cookies.get(key)
    },
    setItem(key: any, value: any) {
      Cookies.set(key, value, { expires: 365, secure: false })
    },
    removeItem(key: any) {
      return Cookies.remove(key)
    },
  }
  createPersistedState({
    key: process.env.VUEX_KEY,
    storage: cookieStorage,
  })(store)
}
