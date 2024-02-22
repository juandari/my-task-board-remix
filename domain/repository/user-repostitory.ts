type LoginForm = {
  username: string;
  password: string;
};

type LoginResponse = {
  id: string;
  username: string;
};

export interface UserRepository {
  login({ username, password }: LoginForm): Promise<LoginResponse>;
  register({ username, password }: LoginForm): Promise<LoginResponse>;
  logout(request: Request): Promise<void>;
  getUser(request: Request): Promise<LoginResponse>;
  getUserId(request: Request): Promise<string>;
}
