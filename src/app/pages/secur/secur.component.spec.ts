import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurComponent } from './secur.component';

describe('SecurComponent', () => {
  let component: SecurComponent;
  let fixture: ComponentFixture<SecurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
