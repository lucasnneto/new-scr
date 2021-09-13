import { Context } from '@nuxt/types'
export default function ({ store, error }: Context) {
  if (!store.state.termId) {
    return error({})
  }
}
