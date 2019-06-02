import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root"
})
export class AutoService {
  apiUrl = "http://localhost:5000/api/car";
  Autos: IAutos;
  constructor(private _http: HttpClient, public auth: AuthService) {}

  getAutos() {
    console.log(this.auth.accessToken);
    return this._http.get<IAutos>(this.apiUrl);
  }

  getAuto(id) {
    console.log(this.auth.accessToken);
    return this._http.get<IAutos>(this.apiUrl + "/" + id, {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.auth.accessToken}`
      )
    });
  }
  getMerk(merk) {
    console.log(this.auth.accessToken);
    return this._http.get<IAutos>(this.apiUrl + "?merk=" + merk, {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.auth.accessToken}`
      )
    });
  }

  addCar(auto: IAutos): Observable<IAutos> {
    console.log(this.auth.accessToken);
    return this._http.post<IAutos>(this.apiUrl, auto, {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.auth.accessToken}`
      )
    });
  }
  putCar(auto: IAutos, id: number): Observable<IAutos> {
    console.log(this.auth.accessToken);
    return this._http.put<IAutos>(this.apiUrl + id, auto, {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.auth.accessToken}`
      )
    });
  }
  deleteCar(id: number): Observable<{}> {
    console.log(this.auth.accessToken);
    const url = `${this.apiUrl}${id}`; // DELETE api/car/x
    return this._http.delete(url, {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.auth.accessToken}`
      )
    });
  }
  pageShift(page) {
    console.log(this.auth.accessToken);
    return this._http.get<IAutos>(this.apiUrl + "?page=" + page, {
      headers: new HttpHeaders().set(
        "Authorization",
        `Bearer ${this.auth.accessToken}`
      )
    });
  }
}

export interface IAutos {
  id?: number;
  naam: string;
  topSnelheid: string;
  merk: string;
  afbeelding: string;
}
