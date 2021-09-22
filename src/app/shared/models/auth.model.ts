export interface SecurityLoginModel {
  username: string,
  password: string,
  provider: string,
  refresh: boolean
}

export interface AuthTokenModel {
  access_token: string | null,
  refresh_token: string | null
}
