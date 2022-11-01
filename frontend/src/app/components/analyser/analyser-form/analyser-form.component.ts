import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AnalyserLetterTypes, AnalyserNetworkStates} from '../analyser.models';

@Component({
  selector: 'app-analyser-form',
  templateUrl: './analyser-form.component.html',
  styleUrls: ['./analyser-form.component.scss']
})
export class AnalyserFormComponent {
  analyserStates = AnalyserNetworkStates;
  analyserLetterTypes = AnalyserLetterTypes;
  @Input() analyserForm!: FormGroup;
  @Input() isLoading = false;
  @Output() analyse = new EventEmitter<void>();

  constructor() { }

  onSubmit(): void {
    this.analyse.emit()
  }
}
