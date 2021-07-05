import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  //Necesario para trabajar con HTTP
import { FormsModule } from '@angular/forms';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDataComponent } from './components/country-data/country-data.component';
import { RegionPipe } from './pipes/region.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { PagePipe } from './pipes/page.pipe';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- modulo de paginacion

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDataComponent,
    RegionPipe,
    SearchPipe,
    PagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, //Importo http
    NgxPaginationModule //modulo de paginacion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
