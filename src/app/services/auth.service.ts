import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
  constructor(private http: HttpClient) {
  }

  LOGIN(email: string, password: string): Observable<any> {
    return this.http.get(
      `${environment.hostname}/user?email=` + email + "&password=" + password,
      this.HttpUploadOptions
    );
  }
}
