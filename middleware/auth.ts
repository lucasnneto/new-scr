import { Context } from '@nuxt/types'
export default function ({ store, error }: Context) {
  if (!store.state.id) {
    return error({})
  }
}
