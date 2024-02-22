type LoginForm = {
  username: string;
  password: string;
};

type LoginResponse = {
  id: string;
  username: string;
};

export interface UserRepository {
  login({ username, password }: LoginForm): LoginResponse;
  register({ username, password }: LoginForm): LoginResponse;
  logout(request: Request): void;
  getUser(request: Request): LoginResponse;
  getUsername(request: Request): string;
}
