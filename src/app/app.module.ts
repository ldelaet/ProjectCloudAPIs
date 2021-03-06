import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataService } from "./services/data.service";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { PokeDexComponent } from "./poke-dex/poke-dex.component";
import { PokeSearchComponent } from "./poke-search/poke-search.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToolbarModule } from "primeng/toolbar";
import { AccordionModule } from "primeng/accordion";
import { AutoComponent } from "./auto/auto.component";
import { AutoService } from "./services/auto.service";
import { AutoSearchComponent } from "./auto-search/auto-search.component";
import { AuthService } from "./auth.service";
import { CallbackComponent } from "./callback/callback.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PokeDexComponent,
    PokeSearchComponent,
    PageNotFoundComponent,
    AutoComponent,
    AutoSearchComponent,
    CallbackComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "page1", component: PokeDexComponent },
      { path: "page2", component: PokeSearchComponent },
      { path: "page3", component: AutoComponent },
      { path: "page4", component: AutoSearchComponent },
      { path: "callback", component: CallbackComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent }
    ]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToolbarModule,
    AccordionModule
  ],
  providers: [DataService, AutoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
