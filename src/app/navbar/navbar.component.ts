import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import {ToolbarModule} from 'primeng/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
