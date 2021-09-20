import { MutationTree, ActionTree, GetterTree } from 'vuex/types';
import { SCR_API } from '@/service';
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
  async GET_DATA({ commit, dispatch }, payload: string): Promise<void> {
    const [error, data] = await SCR_API.getSCRData(payload);
    if (error) {
      console.error('ERROR: ', error);
      // FIX JOGAR PARA TELA DE ERRO
    } else {
      commit('CHANGE', {
        ...data,
      });
      dispatch('screen/CHANGE', {
        name: 'step1',
      });
    }
  },
  async VALID_ANSWERS(
    { dispatch },
    payload: {
      termId: string;
      answers: {
        id: string;
        answer: Record<string, any>;
      };
    }
  ): Promise<void> {
    const [error, data] = await SCR_API.validAnswers(payload);
    if (error) {
      console.error('ERROR: ', error);
      // FIX JOGAR PARA TELA DE ERRO
    } else if (data?.message === 'Refused') {
      // TOAST Resposta incorreta
      dispatch('screen/CHANGE', {
        name: 'step1',
      });
    } else {
      dispatch('screen/CHANGE', {
        name: 'step4',
      });
    }
  },
  async VALID_CPF(
    { dispatch },
    payload: {
      termId: string;
      signerTaxId: string;
    }
  ): Promise<void> {
    const [error, data] = await SCR_API.validCPF(payload);
    if (error) {
      console.error('ERROR: ', error);
      // FIX JOGAR PARA TELA DE ERRO
    } else {
      dispatch('screen/CHANGE', {
        name: 'step4',
      });
    }
  },
};
