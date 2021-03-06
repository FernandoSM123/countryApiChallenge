import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar componentes
import{CountryListComponent} from './components/country-list/country-list.component';
import { CountryDataComponent } from './components/country-data/country-data.component';

const routes: Routes = [
  {path:'',component:CountryListComponent}, //default route
  {path:'countryList',component:CountryListComponent},
  {path:'countryData/:countryName',component:CountryDataComponent},
  { path: '**', component:CountryListComponent } //Si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
