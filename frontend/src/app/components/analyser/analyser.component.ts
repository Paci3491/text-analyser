import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AnalyserService, AnalysisOutput} from '../../services/analyser.service';

export enum AnalyserNetworkStates {
  Online = 'online',
  Offline = 'offline'
}

export enum AnalyserLetterTypes {
  Vowels = 'vowels',
  Consonants = 'consonants'
}

export enum AnalyserViews {
  Form = 'form',
  Result = 'result'
}

@Component({
  selector: 'app-analyser',
  templateUrl: './analyser.component.html',
  styleUrls: ['./analyser.component.scss']
})
export class AnalyserComponent {

  analyserResult: AnalysisOutput = {};
  analyserViews = AnalyserViews;
  analyserView = AnalyserViews.Form;
  analyserForm: FormGroup;

  constructor(private analyserService: AnalyserService) {
    this.analyserForm = new FormGroup({
      analyserNetworkState: new FormControl(AnalyserNetworkStates.Offline),
      analyserLetterType: new FormControl(AnalyserLetterTypes.Vowels),
      input: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z\s]*$/)])
    })
  }

  analyse() {
    const form = this.analyserForm.value;

    if (form.analyserNetworkState === AnalyserNetworkStates.Offline) {
      this.analyserResult = this.analyserService.offlineAnalysis(form.analyserLetterType, form.input);
    } else {
      this.analyserService.onlineAnalysis(form.analyserLetterType, form.input).subscribe(data => {
        this.analyserResult = data;
      });
    }
    this.analyserView = AnalyserViews.Result;
  }

  reset() {
    this.analyserForm.controls['input'].setValue(null);
    this.analyserForm.controls['input'].markAsUntouched();
    this.analyserView = AnalyserViews.Form;
  }
}
