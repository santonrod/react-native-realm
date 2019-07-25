import { createStore } from 'redux'
import { reducer} from './todoListRedux.js'

const store = createStore(reducer)
export default store