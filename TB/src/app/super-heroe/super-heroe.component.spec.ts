import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroeComponent } from './super-heroe.component';

describe('SuperHeroeComponent', () => {
  let component: SuperHeroeComponent;
  let fixture: ComponentFixture<SuperHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperHeroeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
