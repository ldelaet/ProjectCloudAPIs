import { Component, OnInit } from "@angular/core";
import { AutoService, IAutos } from "../services/auto.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-auto",
  templateUrl: "./auto.component.html",
  styleUrls: ["./auto.component.css"]
})
export class AutoComponent implements OnInit {
  Autos: IAutos;
  newAuto: IAutos;
  id: number;
  naam: string;
  topSnelheid: string;
  merk: string;
  afbeelding: string;
  searchName: string;
  searchID: number;
  constructor(private autoSrvc: AutoService, private auth: AuthService) {}

  ngOnInit() {
    this.getAutos();
  }
  getId(event: any) {
    this.id = event.target.value;
  }
  getNaam(event: any) {
    this.naam = event.target.value;
  }
  getTopSnelheid(event: any) {
    this.topSnelheid = event.target.value;
  }
  getMerk(event: any) {
    this.merk = event.target.value;
  }
  getAfbeelding(event: any) {
    this.afbeelding = event.target.value;
  }
  getAutos() {
    return this.autoSrvc.getAutos().subscribe(data => (this.Autos = data));
  }
  getAutoById() {
    return this.autoSrvc
      .getAuto(this.searchID)
      .subscribe(data => (this.Autos = data));
  }
  AddCar() {
    console.log("ik maak de auto aan");
    this.newAuto = {
      naam: this.naam,
      topSnelheid: this.topSnelheid,
      merk: this.merk,
      afbeelding: this.afbeelding
    };
    this.autoSrvc.addCar(this.newAuto).subscribe();
  }
  deleteCar() {
    this.autoSrvc.deleteCar(this.id).subscribe();
  }
  putCar() {
    this.newAuto = {
      id: this.id,
      naam: this.naam,
      topSnelheid: this.topSnelheid,
      merk: this.merk,
      afbeelding: this.afbeelding
    };
    this.autoSrvc.putCar(this.newAuto, this.id).subscribe();
  }
  get SearchID() {
    return this.searchID;
  }
  set SearchID(value: number) {
    this.searchID = value;
    this.getAutoById();
  }
}
