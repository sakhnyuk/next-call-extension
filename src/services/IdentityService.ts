class IdentityService {
  private authUserInGoogle = (withOAuth: boolean): Promise<string> =>
    new Promise((resolve, reject) => {
      try {
        chrome.identity.getAuthToken({ interactive: withOAuth }, (token) => {
          if (typeof token === 'string') {
            resolve(token);
          } else {
            throw new Error('No access');
          }
        });
      } catch (error) {
        if (error instanceof Error) {
          reject(error.message);
        }
      }
    });

  public checkAccess = (): Promise<boolean> =>
    new Promise((resolve) => {
      try {
        chrome.identity.getAuthToken({}, (token) => {
          if (typeof token === 'string') {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      } catch {
        resolve(false);
      }
    });

  public authUser = (): Promise<string> => {
    return this.authUserInGoogle(true);
  };

  public getToken = (): Promise<string> => {
    return this.authUserInGoogle(false);
  };

  public getUserInfo = (): Promise<chrome.identity.UserInfo> => {
    return new Promise((resolve) => {
      chrome.identity.getProfileUserInfo((userInfo) => {
        resolve(userInfo);
      });
    });
  };

  public logoutUser = (): Promise<void> =>
    new Promise((resolve) => {
      chrome.identity.clearAllCachedAuthTokens(() => {
        resolve();
      });
    });
}

export const identityService = new IdentityService();
