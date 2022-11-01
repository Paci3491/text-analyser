import {Injectable} from '@angular/core';
import {AnalyserLetterTypes} from '../components/analyser/analyser.component';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

export interface AnalysisOutput {
  [key: string]: number
}

@Injectable({
  providedIn: 'root'
})
export class AnalyserService {

  private VOWELS = ['a', 'e', 'i', 'o', 'u'];

  constructor(private httpClient: HttpClient) { }

  onlineAnalysis(letterType: AnalyserLetterTypes, textInput: string): Observable<AnalysisOutput> {
    const params = {letterType, textInput};
    return this.httpClient.get<AnalysisOutput>(`${environment.baseUrl}/api/v1/analyse`, {params})
  }

  offlineAnalysis(letterType: AnalyserLetterTypes, textInput: string): AnalysisOutput {
    const result: AnalysisOutput = {};

    const trimmedInput = textInput.replace(/\s/g, '').toLowerCase();
    const charArr = [...trimmedInput];

    charArr.forEach(char => {
      const vowelIntersection = this.VOWELS.find(item => item === char);

      if (letterType === AnalyserLetterTypes.Vowels && vowelIntersection) {
        this.createOrIncrementCharCount(result, char);
      } else if (letterType === AnalyserLetterTypes.Consonants && !vowelIntersection) {
        this.createOrIncrementCharCount(result, char);
      }
    })

    return result;
  }

  createOrIncrementCharCount(result: AnalysisOutput, char: string): void {
    if (result.hasOwnProperty(char)) {
      result[char] += 1
    } else {
      result[char] = 1
    }
  }
}
