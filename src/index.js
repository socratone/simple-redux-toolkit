import configureStore from './store/configureStore';
import { bugAdded, bugRemoved } from './store/bugs';

const store = configureStore();

store.subscribe(() => {
  console.log('store changed!');
});

store.dispatch(bugAdded({ description: 'Bug 1'}));
console.log(store.getState());
store.dispatch(bugAdded({ description: 'Bug 2'}));
console.log(store.getState());
store.dispatch(bugRemoved({ id: 2 }));
console.log(store.getState());
store.dispatch(bugAdded({ description: 'Bug 3'}));
console.log(store.getState());

/**
 * https://redux-toolkit.js.org/introduction/quick-start
 */