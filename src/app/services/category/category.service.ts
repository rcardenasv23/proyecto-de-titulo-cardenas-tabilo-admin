import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
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

  GETCATEGORIES(): Observable<any> {
    return this.http.get(
      `${environment.hostname}/info/category`,
      this.HttpUploadOptions
    );
  }
  UPDATECATEGORY(id_pubc: string, publication_category: string): Observable<any> {
    return this.http.put(
      `${environment.hostname}/info/category`,
      {id_pubc:id_pubc,publication_category:publication_category},
      this.HttpUploadOptions
    );
  }

  CREATECATEGORY( publication_category: string): Observable<any> {
    return this.http.post(
      `${environment.hostname}/info/category`,
      {publication_category:publication_category},
      this.HttpUploadOptions
    );
  }
}
