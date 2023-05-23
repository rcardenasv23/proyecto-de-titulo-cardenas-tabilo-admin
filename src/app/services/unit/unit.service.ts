import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UnitService {
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

  GETUNITY(): Observable<any> {
    return this.http.get(
      `${environment.hostname}/info/unity`,
      this.HttpUploadOptions
    );
  }

  UPDATEUNITY(id_unity: string, publication_unity: string): Observable<any> {
    return this.http.put(
      `${environment.hostname}/info/unity`,
      {id_unity:id_unity,publication_unity:publication_unity},
      this.HttpUploadOptions
    );
  }

  CREATEUNITY( publication_unity: string): Observable<any> {
    return this.http.post(
      `${environment.hostname}/info/unity`,
      {publication_unity:publication_unity},
      this.HttpUploadOptions
    );
  }
}
