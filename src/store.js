import { createStore } from "redux";

import {todoAppState} from './reducers'

const store = createStore(todoAppState);

export default store;