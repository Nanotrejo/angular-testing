import { FormBuilder } from "@angular/forms";
import { FormRegister } from "./form";


describe('Forms', () => {

    let component: FormRegister;

    beforeEach(() => component = new FormRegister(new FormBuilder()));

    it('Debe de crear un formulario (email + pass)', () => {

        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('password')).toBeTruthy();
        expect(component.form.contains('form')).toBeFalsy();
    });

    it('El email debe ser obligatorio', () => {

        const control = component.form.get('email');

        control?.setValue('');

        expect(control?.valid).toBeFalsy();
    });

    it('El email debe ser correcto', () => {

        const control = component.form.get('email');

        control?.setValue('test@gmail.com');

        expect(control?.valid).toBeTruthy();
    });
});