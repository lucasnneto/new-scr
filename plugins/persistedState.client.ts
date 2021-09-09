import createPersistedState from 'vuex-persistedstate'

export default ({ store }: any) => {
  createPersistedState({
    key: 'scr',
    paths: ['id'],
  })(store)
}
