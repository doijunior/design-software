export interface Transition {
  input: string
  callback: () => Promise<string>
}

export interface State {
  name: string
  transitionTable: Transition[]
}
