import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempSignupComponent } from './temp-signup.component';

describe('TempSignupComponent', () => {
  let component: TempSignupComponent;
  let fixture: ComponentFixture<TempSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
