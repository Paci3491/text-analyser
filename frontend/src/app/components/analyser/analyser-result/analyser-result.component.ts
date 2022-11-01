import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AnalysisOutput} from '../../../services/analyser.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-analyser-result',
  templateUrl: './analyser-result.component.html',
  styleUrls: ['./analyser-result.component.scss']
})
export class AnalyserResultComponent implements OnInit {

  @Input() analyserResult!: AnalysisOutput;
  @Input() analyserForm!: FormGroup;
  @Output() reset = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  onReset() {
    this.reset.emit();
  }

  get emptyAnalyserResult() {
    return Object.keys(this.analyserResult).length < 1
  }
}