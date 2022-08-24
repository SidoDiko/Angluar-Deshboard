import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMComponent } from './task-m.component';

describe('TaskMComponent', () => {
  let component: TaskMComponent;
  let fixture: ComponentFixture<TaskMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
