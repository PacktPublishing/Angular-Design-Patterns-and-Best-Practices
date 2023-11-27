import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryComponent } from './diary.component';

describe('ListEntriesComponent', () => {
  let component: DiaryComponent;
  let fixture: ComponentFixture<DiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
