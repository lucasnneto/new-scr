import createPersistedState from 'vuex-persistedstate'
import { Context } from '@nuxt/types'

export default ({ store, $cookies }: Context) => {
  const cookieStorage = {
    getItem(key: any) {
      return $cookies.get(key)
    },
    setItem(key: any, value: any) {
      $cookies.set(key, value)
    },
    removeItem(key: any) {
      return $cookies.remove(key)
    },
  }
  createPersistedState({
    key: process.env.VUEX_KEY,
    storage: cookieStorage,
    getState: cookieStorage.getItem,
    setState: cookieStorage.setItem,
  })(store)
}
