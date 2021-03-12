import SimpleCrypto, { PlainData } from 'simple-crypto-js';
import API from '../api';

const {
  REACT_APP_RULEAU_AWS_SECRET_KEY = '',
  REACT_APP_RULEAU_AWS_ACCESS_TOKEN = '',
  REACT_APP_RULEAU_AWS_REFRESH_TOKEN = ''
} = process.env;

export class TokenService {
  /**
   * SimpleCrypto Helper
   *
   * @type {SimpleCrypto}
   */
  private static simpleCrypto = new SimpleCrypto(
    REACT_APP_RULEAU_AWS_SECRET_KEY
  );

  /**
   * Get the JWT Token from Session Storage
   *
   * @category Services
   * @subcategory Token
   * @return {string|null} The JWT Token
   */
  static getJwtToken = (): PlainData | null => {
    const sessionValue = sessionStorage.getItem(
      REACT_APP_RULEAU_AWS_ACCESS_TOKEN
    );

    if (sessionValue) {
      try {
        const jwtToken = TokenService.simpleCrypto.decrypt(sessionValue);
        API.setJwtToken(jwtToken.toString());
        return jwtToken;
      } catch {
        return null;
      }
    }

    return null;
  };

  /**
   * Get the Refresh Token from Session Storage
   *
   * @category Services
   * @subcategory Token
   * @return {string|null} The Refresh Token
   */
  static getRefreshToken = (): PlainData | null => {
    const sessionValue = sessionStorage.getItem(
      REACT_APP_RULEAU_AWS_REFRESH_TOKEN
    );

    if (sessionValue) {
      return TokenService.simpleCrypto.decrypt(sessionValue);
    }

    return null;
  };

  /**
   * Set the JWT Token to Session Storage
   *
   * @category Services
   * @subcategory Token
   * @param {string} token The JWT Token
   */
  static setTokens = (token: string, refreshToken = ''): void => {
    if (!token) return;

    // Update the API
    API.setJwtToken(token);

    // Update Session Storage
    const encryptedToken = TokenService.simpleCrypto.encrypt(token);
    sessionStorage.setItem(REACT_APP_RULEAU_AWS_ACCESS_TOKEN, encryptedToken);

    // Set our refresh token into the session storage
    if (refreshToken) {
      const encryptedRefreshToken = TokenService.simpleCrypto.encrypt(
        refreshToken
      );
      sessionStorage.setItem(
        REACT_APP_RULEAU_AWS_REFRESH_TOKEN,
        encryptedRefreshToken
      );
    }
  };

  /**
   * Delete the JWT Token from Session Storage
   *
   * @category Services
   * @subcategory Token
   */
  static deleteJwtToken = (): void => {
    // Remove from API calls
    API.setJwtToken('');

    // Remove from Session Storage
    sessionStorage.removeItem(REACT_APP_RULEAU_AWS_ACCESS_TOKEN);
    sessionStorage.removeItem(REACT_APP_RULEAU_AWS_REFRESH_TOKEN);
  };
}
