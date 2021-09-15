import createPersistedState from 'vuex-persistedstate';
import { Context } from '@nuxt/types';

export default ({ store, req }: Context) => {
  createPersistedState({
    key: process.env.VUEX_KEY,
  })(store);
};
