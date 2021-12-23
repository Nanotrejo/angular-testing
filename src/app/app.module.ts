import { IncrementadorComponent } from './intermedio-2/incrementador/incrementador.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicoComponent } from './intermedio-2/medico/medico.component';
import { HospitalComponent } from './intermedio-2/hospital/hospital.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './avanzado/app.routes';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzado/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
