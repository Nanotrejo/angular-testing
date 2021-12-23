import { HospitalComponent } from 'src/app/intermedio-2/hospital/hospital.component';
import { RUTAS } from './../app.routes';


describe('Rutas principales', () => {

    it('Debe existir la ruta /hospital/:id', () => {

        expect(RUTAS).toContain({
            path: 'hospital/:id', component: HospitalComponent
        });
    });
});