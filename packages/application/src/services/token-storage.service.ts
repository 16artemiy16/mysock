const LS_KEY = 'token';

const tokenStorage = {
  get: () => localStorage.getItem(LS_KEY),
  remove: () => localStorage.removeItem(LS_KEY),
  set: (value: string) => localStorage.setItem(LS_KEY, value),
};

export default tokenStorage;
