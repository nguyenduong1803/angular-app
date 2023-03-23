/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Order } from '../models/order';

/**
 * Access to Petstore orders
 */
@Injectable({
  providedIn: 'root',
})
class StoreService extends __BaseService {
  static readonly placeOrderPath = '/store/order';
  static readonly getOrderByIdPath = '/store/order/{orderId}';
  static readonly deleteOrderPath = '/store/order/{orderId}';
  static readonly getInventoryPath = '/store/inventory';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Place an order for a pet
   * @param body order placed for purchasing the pet
   * @return successful operation
   */
  placeOrderResponse(body: Order): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/store/order`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * Place an order for a pet
   * @param body order placed for purchasing the pet
   * @return successful operation
   */
  placeOrder(body: Order): __Observable<Order> {
    return this.placeOrderResponse(body).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * Find purchase order by ID
   *
   * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   * @param orderId ID of pet that needs to be fetched
   * @return successful operation
   */
  getOrderByIdResponse(orderId: number): __Observable<__StrictHttpResponse<Order>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/order/${encodeURIComponent(String(orderId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Order>;
      })
    );
  }
  /**
   * Find purchase order by ID
   *
   * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   * @param orderId ID of pet that needs to be fetched
   * @return successful operation
   */
  getOrderById(orderId: number): __Observable<Order> {
    return this.getOrderByIdResponse(orderId).pipe(
      __map(_r => _r.body as Order)
    );
  }

  /**
   * Delete purchase order by ID
   *
   * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   * @param orderId ID of the order that needs to be deleted
   */
  deleteOrderResponse(orderId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/store/order/${encodeURIComponent(String(orderId))}`,
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
   * Delete purchase order by ID
   *
   * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   * @param orderId ID of the order that needs to be deleted
   */
  deleteOrder(orderId: number): __Observable<null> {
    return this.deleteOrderResponse(orderId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Returns pet inventories by status
   *
   * Returns a map of status codes to quantities
   * @return successful operation
   */
  getInventoryResponse(): __Observable<__StrictHttpResponse<{[key: string]: number}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/store/inventory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{[key: string]: number}>;
      })
    );
  }
  /**
   * Returns pet inventories by status
   *
   * Returns a map of status codes to quantities
   * @return successful operation
   */
  getInventory(): __Observable<{[key: string]: number}> {
    return this.getInventoryResponse().pipe(
      __map(_r => _r.body as {[key: string]: number})
    );
  }
}

module StoreService {
}

export { StoreService }
