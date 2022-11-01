import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyserResultComponent } from './analyser-result.component';

describe('AnalyserResultComponent', () => {
  let component: AnalyserResultComponent;
  let fixture: ComponentFixture<AnalyserResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyserResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyserResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
