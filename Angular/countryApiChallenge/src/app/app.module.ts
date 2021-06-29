import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDataComponent } from './components/country-data/country-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
