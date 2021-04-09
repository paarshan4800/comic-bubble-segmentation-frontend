import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerDirectoryComponent } from './server-directory.component';

describe('ServerDirectoryComponent', () => {
  let component: ServerDirectoryComponent;
  let fixture: ComponentFixture<ServerDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerDirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
