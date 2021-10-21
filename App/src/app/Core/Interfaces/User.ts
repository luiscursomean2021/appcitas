export interface User {
  _id?: string,
  username: string,
  email:string,
  password: string,
  favoritos?: string[],
  bloqueos?: string[]
}
