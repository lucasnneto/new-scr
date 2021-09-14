import { MutationTree, ActionTree, GetterTree } from 'vuex/types';
import nuxt from 'nuxt';
import ScrAPIService from '@/service';
import { shuffle } from '@/mixins/utils';

type Question = {
  id: String;
  question: String;
  answers: Record<number, any>[];
};
export type RootState = {
  questions: Question[] | null;
  companyName: String;
  companyTaxId: String;
  clientName: String;
  clientTaxId: String;
  term: String;
  termId: String;
};
export const state = () => ({
  questions: null,
  companyName: '',
  companyTaxId: '',
  clientName: '',
  clientTaxId: '',
  term: '',
  termId: '',
});
export const getters: GetterTree<RootState, RootState> = {
  isLegalPerson: (state: RootState) => state.clientTaxId.length === 11,
  questions({ questions }: RootState) {
    if (questions && questions.length > 0) {
      return shuffle(
        questions.map((item) => {
          const answers = shuffle(
            item?.answers?.map((it, index) => ({
              key: index + 1,
              value: it[index + 1],
            }))
          );

          return {
            ...item,
            answers,
          };
        })
      );
    }
    return false;
  },
};

export const mutations: MutationTree<RootState> = {
  CHANGE: (state: RootState, payload: RootState) =>
    Object.assign(state, payload),
};
export const actions: ActionTree<RootState, RootState> = {
  CHANGE({ commit }, payload: RootState) {
    commit('CHANGE', payload);
  },
  async GET_DATA({ commit }, payload: string): Promise<void> {
    const scr = new ScrAPIService(this.$axios);
    const [error, data] = await scr.getSCRData(payload);
    if (error) {
      console.error('ERROR: ', error);
      // FIX JOGAR PARA TELA DE ERRO
    } else {
      commit('CHANGE', {
        ...data,
      });
      nuxt;
      // this.$router.push('/autorizacao')
    }
  },
};
