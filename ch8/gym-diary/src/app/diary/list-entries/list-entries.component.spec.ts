import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEntriesComponent } from './list-entries.component';

describe('ListEntriesComponent', () => {
  let component: ListEntriesComponent;
  let fixture: ComponentFixture<ListEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
