import * as readline from 'readline-sync'
import { State, Transition } from '../State'

export default class MenuView implements State {
  name: string
  transitionTable: Transition[]
  public constructor() {
    this.name = 'MENU'
    this.transitionTable = [
      {
        input: '',
        callback: async () => {
          return new Promise((resolve) => {
            const input = readline.question(
              'aperte a alternativa desejada:\n' +
                '(1) Obter cotações\n' +
                '(2) Realizar conversão\n' +
                '(s) Sair\n'
            )
            console.log(`você pressionou ${input}`)
            if (input === '1') resolve('CURRENCY')
            if (input === '2') resolve('CONVERT')
            if (input === 's') resolve('END')
            resolve('MENU')
          })
        },
      },
    ]
  }
}
