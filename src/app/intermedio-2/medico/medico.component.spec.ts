import { MedicoComponent } from "./medico.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { MedicoService } from "./medico.service";
import { HttpClientModule } from "@angular/common/http";

describe('Medico component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });


    it('Debe de crearse el component', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de retornar el nombre del medico', () => {
        const name = 'Juan';
        const res = component.saludarMedico(name);

        expect(res).toContain(name);
    });
});