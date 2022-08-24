import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarageComponent } from './tarage.component';

describe('TarageComponent', () => {
  let component: TarageComponent;
  let fixture: ComponentFixture<TarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
