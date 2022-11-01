import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AnalyserLetterTypes, AnalyserNetworkStates} from '../analyser.component';

@Component({
  selector: 'app-analyser-form',
  templateUrl: './analyser-form.component.html',
  styleUrls: ['./analyser-form.component.scss']
})
export class AnalyserFormComponent implements OnInit {
  analyserStates = AnalyserNetworkStates;
  analyserLetterTypes = AnalyserLetterTypes;
  @Input() analyserForm!: FormGroup;
  @Output() analyse = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    this.analyse.emit()
  }
}
