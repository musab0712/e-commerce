export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("api/users/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch("api/users/login", {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: { "content-type": "application/json" },
    });
    console.log(response);
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}
