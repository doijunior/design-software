import * as readline from 'readline-sync'

import { State, Transition } from '../State'
import ConvertController from 'src/controllers/ConvertController'

export default class ConvertView implements State {
  name: string
  transitionTable: Transition[]

  public constructor() {
    this.name = 'CONVERT'
    this.transitionTable = [
      {
        input: '',
        callback: async () => {
          const day = readline.question('digite o dia:\n')
          const month = readline.question('digite o mes:\n')
          const year = readline.question('digite o ano:\n')
          const coinFrom = readline.question('digite a moeda de origem:\n')
          const coinTo = readline.question('digite a moeda de destino:\n')
          ConvertController.convert(day, month, year, coinFrom, coinTo)
          return 'MENU'
        },
      },
    ]
  }
}
