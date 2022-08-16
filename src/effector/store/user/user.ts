import {createEffect, createStore} from 'effector';

export const fecthUsers = createEffect(async () => {
  const req = await fetch('https://616a6c8c16e7120017fa0f6e.mockapi.io/users');
  return req.json();
});

export const $users = createStore([]).on(
  fecthUsers.done,
  (state, users) => users.result,
);
