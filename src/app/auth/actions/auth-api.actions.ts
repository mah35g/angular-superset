import { createAction, props } from "@ngrx/store";

export const requestTokens = createAction(
    "[Security API] Request JWT Access Token"
);

export const tokensReceived = createAction(
    "[Security API] Request JWT Access Token Success",
    props<{ access_token: string | null, refresh_token: string | null }>()
);
