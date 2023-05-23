import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
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

  GETALLPUBLICATIONS(): Observable<any> {
    return this.http.get(
      `${environment.hostname}/publication/all-admin`,
      this.HttpUploadOptions
    );
  }

  ENABLEPUBLICATION(id:string): Observable<any> {
    return this.http.put(
      `${environment.hostname}/publication/enable-by-admin`,
      {id_fixed:id},
      this.HttpUploadOptions
    );
  }

  DISABLEDPUBLICATION(id:string): Observable<any> {
    return this.http.put(
      `${environment.hostname}/publication/disable-by-admin`,
      {id_fixed:id},
      this.HttpUploadOptions
    );
  }

}
