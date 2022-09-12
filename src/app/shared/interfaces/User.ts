export interface IUsers {
  id: number;
  username: string;
  name: string;
  family: string;
  photo: string;
  description: string;
}

export interface ILoginUsers {
  username: string;
  password: string;
}
