import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderdialogComponent } from './loaderdialog.component';

describe('LoaderdialogComponent', () => {
  let component: LoaderdialogComponent;
  let fixture: ComponentFixture<LoaderdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
