const users = JSON.parse(localStorage.getItem('users')) || [];

export function configureFakeBackend() {
  const realFetch = window.fetch;
  window.fetch = function (url, options) {
    const { method } = options;
    const body = options.body && JSON.parse(options.body);

    return new Promise((resolve, reject) => {
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith('/users/authenticate') && method === 'POST':
            return authenticate();
          case url.endsWith('/users/register') && method === 'POST':
            return register();
          default:
            // pass through any requests not handled above
            return realFetch(url, options)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }

        function authenticate() {
          const { id, password } = body;
          const user = users.find((x) => x.id === id && x.password === password);
          if (!user) return error('id or password is incorrect');
          return ok({
            id: user.id,
            password: user.password,
            passwordCheck: user.passwordCheck,
            token: 'fake-jwt-token',
          });
        }

        function register() {
          const user = body;

          if (users.find((x) => x.id === user.id)) {
            return error(`Id  ${user.id} is already taken`);
          }

          // assign user id and a few other properties then save
          // user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
          users.push(user);
          localStorage.setItem('users', JSON.stringify(users));

          return ok();
        }

        // helper functions

        function ok(body) {
          resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
        }

        function error(message) {
          resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
        }
      }
    });
  };
}
