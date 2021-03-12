import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import JSONBigInt from "json-bigint";
import { API_URL } from "../constants/Endpoints";

/**
 * API Generator
 * This is used to generate API calls to the specified
 * endpoints. Allows for additional customisations such
 * as tokenising and extending.
 *
 * @example
 * new API('api.com/{0}/')
 *   .tokenise('example')
 *   .extend('hello')
 *   .fetch();
 * // Generates a URL like: api.com/example/hello
 * @class
 */
class API {
  /**
   * The endpoint being requested on the API.
   *
   * @private
   * @type {string}
   */
  private endpoint: string;

  /**
   * The extended part of the endpoint.
   *
   * @private
   * @type {string}
   */
  private extended = "";

  /**
   * Tokeniser for the endpoint
   *
   * @private
   * @type {Array<string>}
   */
  private tokens: string[] = [];

  /**
   * The domain to request the endpoint from.
   *
   * @private
   * @type {string}
   * @static
   */
  private static domain: string = API_URL;

  /**
   * The JWT to use as the Authorization Bearer
   * for each request.
   *
   * @private
   * @static
   * @type {string}
   */
  private static jwt = "";

  /**
   * The constructor for the API class.
   *
   * @constructor
   * @param {string} endpoint The endpoint URL to call
   * @return {API}
   */
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  /**
   * Set the JWT token for each API call.
   *
   * @param {string} jwt JWT Token
   * @example API.setJwtToken('example');
   * @deprecated Will be replaced in a future version to use the TokenService
   * @see TokenService
   */
  static setJwtToken = (jwt: string): void => {
    API.jwt = jwt;
  };

  /**
   * Extend API URL
   *
   * @param {string} extend
   * @example new API(...).extend('example');
   * @return {API}
   */
  public extend = (url: string): API => {
    this.extended = url;
    return this;
  };

  /**
   * Add an additional token into the built URL.
   * Replaces `{n}` (`n` being an index) from the given
   * endpoint parameters.
   *
   * @public
   * @param {string} token
   * @example new API('api.com/{0}/').tokenise('example'); // api.com/example/
   * @return {API}
   */
  public tokenise = (token: string | number): API => {
    this.tokens.push(token.toString());
    return this;
  };

  /**
   * Translate an array of KeyValuePairs to a
   * domain GET query string.
   *
   * @private
   * @param params The parameters to pass to the request.
   * @return {string} The transformed params from array to string
   */
  private buildParams = (params: any): string => {
    const esc = encodeURIComponent;
    const resultParams: string[] = [];

    Object.keys(params).forEach((k) => {
      if (Array.isArray(params[k])) {
        params[k].forEach((v: string | number | boolean) => {
          resultParams.push(`${esc(k)}=${esc(v)}`);
        });
        return;
      }

      resultParams.push(`${esc(k)}=${esc(params[k])}`);
    });
    return resultParams.join("&");
  };

  /**
   * Tokenise the endpoint URL, swapping {0} for tokens[0]
   *
   * @return {string}
   */
  private tokeniseEndpoint = (): string => {
    if (this.tokens.length === 0) return this.endpoint;
    let newEndpoint = this.endpoint;
    ///const re = /\{\d+\}/g;
    /// this.endpoint.match(re).forEach((v, i) => {
    ///  newEndpoint = newEndpoint.replace(v, this.tokens[i]);
    ///});

    // Add a trailing slash to the end
    if (!newEndpoint.endsWith("/")) {
      /// DO we want this back in??? Adrian
      ///newEndpoint += '/';
    }

    return newEndpoint;
  };

  /**
   * We should always ensure that our top most URL
   * ends in a slash, to avoid a "307 Temporary Redirect"
   * from the API, as this can cause unforeseen issues.
   *
   * @param {string} url
   * @return {string}
   */
  private checkUrlEnd = (url: string): string => {
    // Add a trailing slash to the end
    if (!url.endsWith("/")) {
      /// TODO : do we want this back in???
      ////url += "/";
    }
    return url;
  };

  /**
   * Fetch data from the API.
   *
   * @param {any} params The parameters to pass to the request.
   * @param {AxiosRequestConfig} config Additional configuration parameters for Axios.
   * @example new API(...).fetch();
   * @example new API(...).fetch({ id: 1 });
   * @example new API(...).fetch({ id: 1 }, { httpAgent: 'example' });
   * @return {Promise}
   */
  public fetch = (
    params: any = {},
    config = {} as AxiosRequestConfig
  ): Promise<AxiosResponse<any>> => {
    const paramString = this.buildParams(params);
    const url = `${this.checkUrlEnd(
      `${API.domain + this.tokeniseEndpoint() + this.extended}`
    )}?${paramString}`;
    return axios.get(url, {
      ...config,
      headers: {
        Authorization: API.jwt ? `Bearer ${API.jwt}` : "",
      },
      transformResponse: [(data) => JSONBigInt.parse(data)],
    });
  };

  /**
   * Send a PATCH request to the API.
   *
   * @param {any} params The parameters to pass to the request.
   * @param {AxiosRequestConfig} config Additional configuration parameters for Axios.
   * @example new API(...).patch();
   * @example new API(...).patch({ id: 1 });
   * @example new API(...).patch({ id: 1 }, { httpAgent: 'example' });
   * @return {Promise}
   */
  public patch = (params: any, config = {}): Promise<AxiosResponse<any>> => {
    const url = this.checkUrlEnd(
      `${API.domain + this.tokeniseEndpoint() + this.extended}`
    );
    return axios.patch(url, params, {
      ...config,
      headers: {
        Authorization: API.jwt ? `Bearer ${API.jwt}` : "",
      },
    });
  };

  /**
   * Send a POST request to the API.
   *
   * @param {any} params The parameters to pass to the request.
   * @param {AxiosRequestConfig} config Additional configuration parameters for Axios.
   * @example new API(...).post();
   * @example new API(...).post({ id: 1 });
   * @example new API(...).post({ id: 1 }, { httpAgent: 'example' });
   * @return {Promise}
   */
  public post = (params: any, config = {}): Promise<AxiosResponse<any>> => {
    const url = this.checkUrlEnd(
      `${API.domain + this.tokeniseEndpoint() + this.extended}`
    );
    return axios.post(url, params, {
      ...config,
      headers: {
        Authorization: API.jwt ? `Bearer ${API.jwt}` : "",
      },
    });
  };
}

export default API;
