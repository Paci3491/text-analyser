import {Injectable} from '@angular/core';
import {AnalyserLetterTypes} from '../components/analyser/analyser.component';

export interface OfflineAnalysisOutput {
  [key: string]: number
}

@Injectable({
  providedIn: 'root'
})
export class AnalyserService {

  VOWELS = ['a', 'e', 'i', 'o', 'u'];

  constructor() { }

  offlineAnalysis(letterType: AnalyserLetterTypes, input: string) {
    const result: OfflineAnalysisOutput = {};

    const charArray = [...input.toLowerCase()];
    charArray.forEach(char => {
      const vowelIntersection = this.VOWELS.find(item => item === char)

      if (vowelIntersection && result.hasOwnProperty(char)) {
          result[char] += 1
      } else if (vowelIntersection) {
        result[char] = 1
      }
    })

    return result
  }

}
