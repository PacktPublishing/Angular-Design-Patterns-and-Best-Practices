import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryItemComponent } from './entry-item.component';
import { DatePipe } from '@angular/common';

describe('EntryItemComponent', () => {
  let component: EntryItemComponent;
  let fixture: ComponentFixture<EntryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryItemComponent,DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
