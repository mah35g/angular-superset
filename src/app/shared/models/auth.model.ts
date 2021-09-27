export interface SecurityLoginModel {
  username: string,
  password: string,
  provider: string,
  refresh: boolean
}

export interface AuthTokenModel {
  access_token: string | null,
  refresh_token: string | null,
  message: string | null
}

export interface UserModel {
  username: string | null,
  access_token: string | null
}
