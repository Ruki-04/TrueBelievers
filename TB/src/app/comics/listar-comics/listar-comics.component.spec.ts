import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComicsComponent } from './listar-comics.component';

describe('ListarComicsComponent', () => {
  let component: ListarComicsComponent;
  let fixture: ComponentFixture<ListarComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarComicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
