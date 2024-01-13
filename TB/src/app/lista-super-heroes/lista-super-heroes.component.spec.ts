import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSuperHeroesComponent } from './lista-super-heroes.component';

describe('ListaSuperHeroesComponent', () => {
  let component: ListaSuperHeroesComponent;
  let fixture: ComponentFixture<ListaSuperHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaSuperHeroesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaSuperHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
