import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperComponent } from './add-super.component';

describe('AddSuperComponent', () => {
  let component: AddSuperComponent;
  let fixture: ComponentFixture<AddSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSuperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
