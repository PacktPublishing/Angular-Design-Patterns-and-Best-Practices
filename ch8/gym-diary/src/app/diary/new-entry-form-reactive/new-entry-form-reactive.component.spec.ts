import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryFormReactiveComponent } from './new-entry-form-reactive.component';

describe('NewEntryFormReactiveComponent', () => {
  let component: NewEntryFormReactiveComponent;
  let fixture: ComponentFixture<NewEntryFormReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEntryFormReactiveComponent]
    });
    fixture = TestBed.createComponent(NewEntryFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
