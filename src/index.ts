import * as readline from 'readline-sync'
import StateMachine from './StateMachine'
import Menu from './views/Menu'
import Add from './views/Add'
;(async function () {
  const stateControl: StateMachine = new StateMachine(new Menu())
  stateControl.addState(new Add())
  stateControl.addState(new Sub())

  let input = ''
  do {
    stateControl.exec('')
  } while (stateControl.getCurState() !== 'END')
})()
