import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubblesTextComponent } from './bubbles-text.component';

describe('BubblesTextComponent', () => {
  let component: BubblesTextComponent;
  let fixture: ComponentFixture<BubblesTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubblesTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubblesTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
