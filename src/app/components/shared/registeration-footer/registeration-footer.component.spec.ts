import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationFooterComponent } from './registeration-footer.component';

describe('RegisterationFooterComponent', () => {
  let component: RegisterationFooterComponent;
  let fixture: ComponentFixture<RegisterationFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterationFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
