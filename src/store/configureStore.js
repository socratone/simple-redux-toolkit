import { configureStore } from '@reduxjs/toolkit';
import reducer from './bugs';

export default function () {
  return configureStore({ reducer });
}

// redux dev tools 설정을 자동으로 해준다.
// dispatch asynchronous actions