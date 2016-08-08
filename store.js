import {createStore} from 'redux';
import rootReducer from './reducers';

const SAVE_KEY = 'saved-state';

function saveState(state) {
  try {
    localStorage[SAVE_KEY] = JSON.stringify(state);
  } catch (e) {
    console.warn(`Could not save state because ${e}`);
  }
}

export function loadState() {
  try {
    return JSON.parse(localStorage[SAVE_KEY]);
  } catch (e) {
    console.warn(`Could not load state because ${e}`)
  }
}

const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

store.subscribe(() => saveState(store.getState()));

export default store;
