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
  analyserResult: OfflineAnalysisOutput = {};

  analyserForm: FormGroup;

  constructor(private analyserService: AnalyserService) {
    this.analyserForm = new FormGroup({
      analyserNetworkState: new FormControl(AnalyserNetworkStates.Offline),
      analyserLetterType: new FormControl(AnalyserLetterTypes.Vowels),
      input: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const form = this.analyserForm.value;
    this.analyserResult = this.analyserService.offlineAnalysis(form.analyserLetterType, form.input);
    this.resultShown = true
    this.analyserForm.reset();
  }

  get emptyAnalyserResult() {
    return Object.keys(this.analyserResult).length < 1
  }
}
