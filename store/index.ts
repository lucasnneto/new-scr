import { GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex/types'

export const state = () => ({
  id: '',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  name: (state: RootState) => state.id,
}

export const mutations: MutationTree<RootState> = {
  CHANGE: (state: RootState, payload: RootState) =>
    Object.assign(state, payload),
}
export const actions: ActionTree<RootState, RootState> = {
  CHANGE({ commit }: ActionContext<RootState, RootState>, payload: RootState) {
    commit('CHANGE', payload)
  },
}
