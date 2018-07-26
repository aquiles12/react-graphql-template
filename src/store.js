import configureStore from './store/configure-store'
import client from './store/configure-apollo-client'

export { client }
export const store = configureStore()
export default store
