import { MutationTree, ActionTree } from 'vuex/types'
import ScrAPIService from '@/service'

type Question = {
  id: String
  question: String
  answers: Record<number, any>[]
}
export type RootState = {
  questions: Question[] | null
  companyName: String
  companyTaxId: String
  clientName: String
  clientTaxId: String
  term: String
  termId: String
}
export const state = () => ({
  questions: null,
  companyName: '',
  companyTaxId: '',
  clientName: '',
  clientTaxId: '',
  term: '',
  termId: '',
})
// export const getters: GetterTree<RootState, RootState> = {
//   name: (state: RootState) => state.name,
// }

export const mutations: MutationTree<RootState> = {
  CHANGE: (state: RootState, payload: RootState) =>
    Object.assign(state, payload),
}
export const actions: ActionTree<RootState, RootState> = {
  CHANGE({ commit }, payload: RootState) {
    commit('CHANGE', payload)
  },
  async GET_DATA({ commit }, payload: string): Promise<void> {
    const scr = new ScrAPIService(this.$axios)
    const [error, data] = await scr.getSCRData(payload)
    if (error) {
      console.error('ERROR: ', error)
    } else {
      commit('CHANGE', {
        ...data,
      })
    }
  },
}
