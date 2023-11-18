export function logIn(user, password) {
  return new Promise((resolve, reject) => {
    if (user === "user" && password === "password")
      resolve({
        result: "success",
        user: {
          name: user,
          email: "your email information",
          role: "your role information",
        },
      });
    reject("unmatched account and password");
  });
  // in real project, it will call a webapi, and it will return a promise for the logindata
}

export function logOut() {
  return new Promise((resolve) => resolve("success"));
}
