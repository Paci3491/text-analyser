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

export interface AnalysisOutput {
  [key: string]: number
}
