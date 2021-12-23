import { Observable, of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
// import 'rxjs/add/observable/from';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const spy = jasmine.createSpyObj('HttpClient', { get: of({}) });
    const service = new MedicosService(spy);

    beforeEach(() => {
        componente = new MedicosComponent(service);

    });


    it('Init: Debe de cargas los médicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];
        spyOn(service, 'getMedicos').and.callFake(() => {
            return of([medicos]);
        });
        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);

    });

    it('Debe de llamar al servidor para agregar un médico', () => {
        const espia = spyOn(service, 'agregarMedico').and.callFake(medico => {
            return of([]);
        });

        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();
    });

    it('Debe de agregar un nuevo médico', () => {

        const medico = { id: 1, nombre: 'Test' };
        spyOn(service, 'agregarMedico').and.returnValue(of(medico));

        componente.agregarMedico();

        expect(componente.medicos.length).toBe(1);
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });


    it('Probar ERROR si falla el servicio', () => {

        const error = 'No se pudo agregar el médico';

        spyOn(service, 'agregarMedico').and.returnValue(throwError(error));

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(error);
    });

    it('Debe de llamar al servicor para borrar un médico', () => {

        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn(service, 'borrarMedico').and.returnValue(of());

        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');
    });

    it('NO Debe de llamar al servicor para borrar un médico', () => {

        spyOn(window, 'confirm').and.returnValue(false);

        const espia = spyOn(service, 'borrarMedico').and.returnValue(of());

        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');
    });

});
