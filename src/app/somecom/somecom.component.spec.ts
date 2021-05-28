import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomecomComponent } from './somecom.component';

describe('SomecomComponent', () => {
  let component: SomecomComponent;
  let fixture: ComponentFixture<SomecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
