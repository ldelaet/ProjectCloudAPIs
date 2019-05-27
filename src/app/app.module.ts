import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PokeDexComponent } from './poke-dex/poke-dex.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarModule} from 'primeng/toolbar';
import {AccordionModule} from 'primeng/accordion';     
             



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PokeDexComponent,
    PokeSearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: "home", component: HomeComponent},
      { path: "page1", component: PokeDexComponent},
      { path: "page2", component: PokeSearchComponent},
      { path: "", redirectTo: "home", pathMatch: "full"},
      { path: "**", component: PageNotFoundComponent}
    ]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToolbarModule,
    AccordionModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
