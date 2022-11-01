import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AnalyserService} from '../../services/analyser.service';
import {finalize} from 'rxjs';
import {AnalyserLetterTypes, AnalyserNetworkStates, AnalyserViews, AnalysisOutput} from './analyser.models';


@Component({
  selector: 'app-analyser',
  templateUrl: './analyser.component.html',
  styleUrls: ['./analyser.component.scss']
})
export class AnalyserComponent {

  isLoading = false;
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
      this.analyserView = AnalyserViews.Result;
    } else {
      this.isLoading = true;
      this.analyserService.onlineAnalysis(form.analyserLetterType, form.input)
        .pipe(finalize(() => this.isLoading = false))
        .subscribe(data => {
          this.analyserResult = data;
          this.analyserView = AnalyserViews.Result;
      });
    }
  }

  reset() {
    this.analyserForm.controls['input'].setValue(null);
    this.analyserForm.controls['input'].markAsUntouched();
    this.analyserView = AnalyserViews.Form;
  }
}
