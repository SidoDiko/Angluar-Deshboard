import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessCComponent } from './access-c.component';

describe('AccessCComponent', () => {
  let component: AccessCComponent;
  let fixture: ComponentFixture<AccessCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



