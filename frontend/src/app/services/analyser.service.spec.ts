import { TestBed } from '@angular/core/testing';

import { AnalyserService } from './analyser.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AnalyserLetterTypes} from '../components/analyser/analyser.component';

describe('AnalyserService', () => {
  let service: AnalyserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AnalyserService]
    });
    service = TestBed.inject(AnalyserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should analyse vowels', () => {
    const expectedResult = {i:4,a:1,e:1}
    const result = service.offlineAnalysis(AnalyserLetterTypes.Vowels, 'This is a Testing String')

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResult));
  });

  it('should detect NO vowels', () => {
    const expectedResult = {}
    const result = service.offlineAnalysis(AnalyserLetterTypes.Vowels, 'Ths s Tstng Strng')

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResult));
  });

  it('should analyse consonants', () => {
    const expectedResult = {t:4,h:1,s:4,n:2,g:2,r:1}
    const result = service.offlineAnalysis(AnalyserLetterTypes.Consonants, 'This is a Testing String')

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResult));
  });

  it('should detect NO consonants', () => {
    const expectedResult = {}
    const result = service.offlineAnalysis(AnalyserLetterTypes.Consonants, 'i i a ei i')

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResult));
  });

  it('should increment property', () => {
    const testInput = {a: 1};
    const expectedResult = {a: 2}
    service.createOrIncrementCharCount(testInput, 'a')

    expect(JSON.stringify(testInput)).toEqual(JSON.stringify(expectedResult));
  });

  it('should create property', () => {
    const testInput = {};
    const expectedResult = {a: 1}
    service.createOrIncrementCharCount(testInput, 'a')

    expect(JSON.stringify(testInput)).toEqual(JSON.stringify(expectedResult));
  });
});
