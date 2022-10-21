import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AnalyserService, OfflineAnalysisOutput} from '../../services/analyser.service';

enum AnalyserNetworkStates {
  Online = 'online',
  Offline = 'offline'
}

export enum AnalyserLetterTypes {
  Vowels = 'vowels',
  Consonants = 'consonants'
}

@Component({
  selector: 'app-analyser',
  templateUrl: './analyser.component.html',
  styleUrls: ['./analyser.component.scss']
})
export class AnalyserComponent implements OnInit {

  analyserStates = AnalyserNetworkStates;
  analyserLetterTypes = AnalyserLetterTypes;
  resultShown = false;
  analyserResult: OfflineAnalysisOutput | undefined;

  analyserForm: FormGroup;

  constructor(private analyserService: AnalyserService) {
    this.analyserForm = new FormGroup({
      analyserNetworkState: new FormControl(null, Validators.required),
      analyserLetterType: new FormControl(null, Validators.required),
      input: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {}

  onSubmit() {
    this.analyserResult = this.analyserService.offlineAnalysis(this.analyserForm.value.analyserLetterType, this.analyserForm.value.input);
    this.resultShown = true
  }

}
