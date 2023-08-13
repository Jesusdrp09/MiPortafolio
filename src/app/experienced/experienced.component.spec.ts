import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencedComponent } from './experienced.component';

describe('ExperiencedComponent', () => {
  let component: ExperiencedComponent;
  let fixture: ComponentFixture<ExperiencedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperiencedComponent]
    });
    fixture = TestBed.createComponent(ExperiencedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
