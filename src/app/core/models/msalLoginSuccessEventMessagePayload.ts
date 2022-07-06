export interface MsalLoginSuccessEventMessagePayload {
  authority: string;
  uniqueId: string;
  tenantId: string;
  scopes: string[];
  account: Account;
  idToken: string;
  idTokenClaims: IdTokenClaims2;
  accessToken: string;
  fromCache: boolean;
  expiresOn: string;
  correlationId: string;
  extExpiresOn: string;
  familyId: string;
  tokenType: string;
  state: string;
  cloudGraphHostName: string;
  msGraphHost: string;
  fromNativeBroker: boolean;
}

export interface Account {
  homeAccountId: string;
  environment: string;
  tenantId: string;
  username: string;
  localAccountId: string;
  name: string;
  idTokenClaims: IdTokenClaims;
}

export interface IdTokenClaims {
  ver: string;
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  iat: number;
  nbf: number;
  name: string;
  preferred_username: string;
  oid: string;
  tid: string;
  nonce: string;
  aio: string;
}

export interface IdTokenClaims2 {
  ver: string;
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  iat: number;
  nbf: number;
  name: string;
  preferred_username: string;
  oid: string;
  tid: string;
  nonce: string;
  aio: string;
}
