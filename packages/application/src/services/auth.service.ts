const authService = {
  // TODO: mocked for now
  signIn: (email: string, password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (email === 'user1@test.com' && password === '111111') {
        return resolve('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ1c2VyMUBnbWFpbC5jb20iLCJfaWQiOiJsc2RhZmphc2xrZmpzYWxmaGthZnNhZmQiLCJpYXQiOjE1MTYyMzkwMjJ9.EMJrgN7KGHUu_CWx34GKDhEPJW5okvrrEJgCcmN0ZxI')
      }
      return reject({ success: false, msg: { general: 'Login or password incorrect.' } });
    });
  },
};

export default authService;
