import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeSelectComponent } from './grade-select.component';

describe('GradeSelectComponent', () => {
  let component: GradeSelectComponent;
  let fixture: ComponentFixture<GradeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
