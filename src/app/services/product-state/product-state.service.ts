import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductStateService {
  HttpUploadOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
      "Content-Type": "application/json",
      Authorization: String(localStorage.getItem("subasterAdminToken")),
      responseType: "text",
    }),
  };

  constructor(private http:HttpClient) { }

  GETSTATES(): Observable<any> {
    return this.http.get(
      `${environment.hostname}/info/product-state`,
      this.HttpUploadOptions
    );
  }

  UPDATESTATE(id_pubs: string, product_state: string): Observable<any> {
    return this.http.put(
      `${environment.hostname}/info/product-state`,
      {id_pubs:id_pubs,product_state:product_state},
      this.HttpUploadOptions
    );
  }
  CREATESTATE( product_state: string): Observable<any> {
    return this.http.post(
      `${environment.hostname}/info/product-state`,
      {product_state:product_state},
      this.HttpUploadOptions
    );
  }
}
