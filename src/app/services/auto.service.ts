import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AutoService {
  apiUrl = "http://localhost:5000/api/car";
  Autos: IAutos;
  constructor(private _http: HttpClient) {}

  getAutos() {
    return this._http.get<IAutos>(this.apiUrl);
  }

  getAuto(id) {
    return this._http.get<IAutos>(this.apiUrl + "/" + id);
  }
  getMerk(merk) {
    return this._http.get<IAutos>(this.apiUrl + "?merk=" + merk);
  }

  addCar(auto: IAutos): Observable<IAutos> {
    return this._http.post<IAutos>(this.apiUrl, auto);
  }
  putCar(auto: IAutos, id: number): Observable<IAutos> {
    return this._http.put<IAutos>(this.apiUrl + id, auto);
  }
  deleteCar(id: number): Observable<{}> {
    const url = `${this.apiUrl}${id}`; // DELETE api/car/x
    return this._http.delete(url);
  }
  pageShift(page) {
    return this._http.get<IAutos>(this.apiUrl + "?page=" + page);
  }
}

export interface IAutos {
  id?: number;
  naam: string;
  topSnelheid: string;
  merk: string;
  afbeelding: string;
}
