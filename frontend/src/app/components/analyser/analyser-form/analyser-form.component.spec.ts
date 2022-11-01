import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyserFormComponent } from './analyser-form.component';

describe('AnalyserFormComponent', () => {
  let component: AnalyserFormComponent;
  let fixture: ComponentFixture<AnalyserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyserFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
