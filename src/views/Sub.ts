import * as readline from 'readline-sync'
import { State, Transition } from '../State'

export default class Sub implements State {
  name: string
  transitionTable: Transition[]

  public constructor() {
    this.name = 'SUB'
    this.transitionTable = [
      {
        input: '',
        callback: () => {
          const op1 = readline.question('digite o primeio operando:\n')
          const op2 = readline.question('digite o segundo operando:\n')
          console.log(`o resultado é ${Number(op1) - Number(op2)}`)
          return 'MENU'
        },
      },
    ]
  }
}
