import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AnalysisOutput} from '../analyser.models';

@Component({
  selector: 'app-analyser-result',
  templateUrl: './analyser-result.component.html',
  styleUrls: ['./analyser-result.component.scss']
})
export class AnalyserResultComponent {

  @Input() analyserResult!: AnalysisOutput;
  @Input() analyserForm!: FormGroup;
  @Output() reset = new EventEmitter<void>();

  constructor() { }

  onReset() {
    this.reset.emit();
  }

  get emptyAnalyserResult() {
    return Object.keys(this.analyserResult).length < 1
  }
}
