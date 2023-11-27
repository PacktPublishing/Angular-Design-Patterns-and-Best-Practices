import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemButtonComponent } from './new-item-button.component';

describe('NewItemButtonComponent', () => {
  let component: NewItemButtonComponent;
  let fixture: ComponentFixture<NewItemButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewItemButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
