import { EMPTY, Observable, Subject } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { RouterMedicoComponent } from './router-medico.component';

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;


  class fakeRouter {
    navigate(params: string) { }
  }

  class fakeActiveRouter {
    // params: Observable<any> = EMPTY;
    private subject = new Subject();

    push(value: any) {
      this.subject.next(value);
    }

    get params() {
      return this.subject.asObservable();
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: fakeRouter },
        { provide: ActivatedRoute, useClass: fakeActiveRouter }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a Hospital Médico cuando se guarde', () => {

    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.saveMedico();

    expect(spy).toHaveBeenCalledWith(['hospital', '123']);
  });

  it('Debe de colocar el ID = nuevo', () => {

    component = fixture.componentInstance;

    const activatedRoute: fakeActiveRouter = TestBed.get(ActivatedRoute);

    activatedRoute.push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');
  });
});
