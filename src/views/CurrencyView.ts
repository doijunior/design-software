import * as readline from 'readline-sync'
import CurrencyController from '../controllers/CurrencyController'

import { State, Transition } from '../State'

export default class CurrencyView implements State {
  name: string
  transitionTable: Transition[]

  public constructor() {
    this.name = 'CURRENCY'
    this.transitionTable = [
      {
        input: '',
        callback: async () => {
          const day = readline.question('digite o dia:\n')
          const month = readline.question('digite o mes:\n')
          const year = readline.question('digite o ano:\n')
          const coin = readline.question('digite a moeda:\n')
          await CurrencyController.getQuotes(day, month, year, coin)

          return 'MENU'
        },
      },
    ]
  }
}
