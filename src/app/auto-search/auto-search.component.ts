import { Component, OnInit } from "@angular/core";
import { AutoService, IAutos } from "../services/auto.service";

@Component({
  selector: "app-auto-search",
  templateUrl: "./auto-search.component.html",
  styleUrls: ["./auto-search.component.css"]
})
export class AutoSearchComponent implements OnInit {
  Autos: IAutos;
  searchName: string;
  searchID: number;
  constructor(private autoSrvc: AutoService) {}

  ngOnInit() {}

  getAutoById() {
    return this.autoSrvc
      .getAuto(this.searchID)
      .subscribe(data => (this.Autos = data));
  }

  get SearchID() {
    return this.searchID;
  }
  set SearchID(value: number) {
    this.searchID = value;
    this.getAutoById();
  }
}
