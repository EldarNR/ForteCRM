export type LoginPayload = { login: string; password: string; remember: boolean };

export function fakeLogin({ login, password, remember }: LoginPayload) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (login === "admin" && password === "admin") {
        (remember ? localStorage : sessionStorage).setItem("auth_token", "demo-token");
        resolve();
      } else {
        reject(new Error("Неверный логин или пароль"));
      }
    }, 350);
  });
}

export function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("remember");
  sessionStorage.removeItem("authToken");
}
