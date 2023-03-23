/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { User } from '../models/user';

/**
 * Operations about user
 */
@Injectable({
  providedIn: 'root',
})
class UserService extends __BaseService {
  static readonly createUsersWithArrayInputPath = '/user/createWithArray';
  static readonly createUsersWithListInputPath = '/user/createWithList';
  static readonly getUserByNamePath = '/user/{username}';
  static readonly updateUserPath = '/user/{username}';
  static readonly deleteUserPath = '/user/{username}';
  static readonly loginUserPath = '/user/login';
  static readonly logoutUserPath = '/user/logout';
  static readonly createUserPath = '/user';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates list of users with given input array
   * @param body List of user object
   */
  createUsersWithArrayInputResponse(body: Array<User>): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user/createWithArray`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Creates list of users with given input array
   * @param body List of user object
   */
  createUsersWithArrayInput(body: Array<User>): __Observable<null> {
    return this.createUsersWithArrayInputResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Creates list of users with given input array
   * @param body List of user object
   */
  createUsersWithListInputResponse(body: Array<User>): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user/createWithList`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Creates list of users with given input array
   * @param body List of user object
   */
  createUsersWithListInput(body: Array<User>): __Observable<null> {
    return this.createUsersWithListInputResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get user by user name
   * @param username The name that needs to be fetched. Use user1 for testing.
   * @return successful operation
   */
  getUserByNameResponse(username: string): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/${encodeURIComponent(String(username))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Get user by user name
   * @param username The name that needs to be fetched. Use user1 for testing.
   * @return successful operation
   */
  getUserByName(username: string): __Observable<User> {
    return this.getUserByNameResponse(username).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * Updated user
   *
   * This can only be done by the logged in user.
   * @param params The `UserService.UpdateUserParams` containing the following parameters:
   *
   * - `username`: name that need to be updated
   *
   * - `body`: Updated user object
   */
  updateUserResponse(params: UserService.UpdateUserParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/user/${encodeURIComponent(String(params.username))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Updated user
   *
   * This can only be done by the logged in user.
   * @param params The `UserService.UpdateUserParams` containing the following parameters:
   *
   * - `username`: name that need to be updated
   *
   * - `body`: Updated user object
   */
  updateUser(params: UserService.UpdateUserParams): __Observable<null> {
    return this.updateUserResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Delete user
   *
   * This can only be done by the logged in user.
   * @param username The name that needs to be deleted
   */
  deleteUserResponse(username: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/user/${encodeURIComponent(String(username))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Delete user
   *
   * This can only be done by the logged in user.
   * @param username The name that needs to be deleted
   */
  deleteUser(username: string): __Observable<null> {
    return this.deleteUserResponse(username).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Logs user into the system
   * @param params The `UserService.LoginUserParams` containing the following parameters:
   *
   * - `username`: The user name for login
   *
   * - `password`: The password for login in clear text
   *
   * @return successful operation
   */
  loginUserResponse(params: UserService.LoginUserParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.username != null) __params = __params.set('username', params.username.toString());
    if (params.password != null) __params = __params.set('password', params.password.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * Logs user into the system
   * @param params The `UserService.LoginUserParams` containing the following parameters:
   *
   * - `username`: The user name for login
   *
   * - `password`: The password for login in clear text
   *
   * @return successful operation
   */
  loginUser(params: UserService.LoginUserParams): __Observable<string> {
    return this.loginUserResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * Logs out current logged in user session
   */
  logoutUserResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/user/logout`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Logs out current logged in user session
   */
  logoutUser(): __Observable<null> {
    return this.logoutUserResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Create user
   *
   * This can only be done by the logged in user.
   * @param body Created user object
   */
  createUserResponse(body: User): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/user`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Create user
   *
   * This can only be done by the logged in user.
   * @param body Created user object
   */
  createUser(body: User): __Observable<null> {
    return this.createUserResponse(body).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module UserService {

  /**
   * Parameters for updateUser
   */
  export interface UpdateUserParams {

    /**
     * name that need to be updated
     */
    username: string;

    /**
     * Updated user object
     */
    body: User;
  }

  /**
   * Parameters for loginUser
   */
  export interface LoginUserParams {

    /**
     * The user name for login
     */
    username: string;

    /**
     * The password for login in clear text
     */
    password: string;
  }
}

export { UserService }
