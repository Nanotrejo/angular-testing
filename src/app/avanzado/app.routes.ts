import { Routes } from '@angular/router';
import { HospitalComponent } from '../intermedio-2/hospital/hospital.component';
import { IncrementadorComponent } from '../intermedio-2/incrementador/incrementador.component';

export const RUTAS: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'hospital/:id', component: HospitalComponent },
    { path: '**', component: IncrementadorComponent }
];