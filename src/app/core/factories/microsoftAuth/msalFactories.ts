import {
  BrowserCacheLocation,
  IPublicClientApplication,
  InteractionType,
  LogLevel,
  PublicClientApplication
} from '@azure/msal-browser';

import { MsalGuardConfiguration } from '@azure/msal-angular';
import { environment } from 'environments/environment';
import { isDevMode } from '@angular/core';

export function msalInstanceFactory(): IPublicClientApplication {
  const loggerCallback = (logLevel: LogLevel, message: string) => console.info(message);
  return new PublicClientApplication({
    auth: {
      clientId: environment.microsoftAuth.clientId,
      authority: environment.microsoftAuth.authority,
      redirectUri: environment.microsoftAuth.redirectUri
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage
    },
    system: {
      loggerOptions: isDevMode()
        ? {
            loggerCallback,
            piiLoggingEnabled: false
          }
        : undefined
    }
  });
}

export function msalGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      // https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow#send-the-sign-in-request
      scopes: ['user.read'],
      prompt: 'select_account'
    }
  };
}
