import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroeCaracteristicasComponent } from './super-heroe-caracteristicas.component';

describe('SuperHeroeCaracteristicasComponent', () => {
  let component: SuperHeroeCaracteristicasComponent;
  let fixture: ComponentFixture<SuperHeroeCaracteristicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperHeroeCaracteristicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperHeroeCaracteristicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
