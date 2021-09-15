import { MutationTree, ActionTree, GetterTree } from 'vuex/types';
export const state = () => ({
  name: '',
  data: {},
});
export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  CHANGE: (state: RootState, payload: RootState) =>
    Object.assign(state, payload),
};

export const actions: ActionTree<RootState, RootState> = {
  CHANGE({ commit }, payload: RootState) {
    commit('CHANGE', payload);
  },
};
