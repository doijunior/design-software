// import axios from 'axios'
// import CurrencyController from './controllers/CurrencyController'

// (async function() {
//   const date = '2021-08-17'
//   const { data } = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/eur.json`)
//   // console.log(data)
//   CurrencyController.save(data)

//   return 0
// })()

import StateMachine from "./StateMachine";
import CurrencyView from "./views/CurrencyView";
import MenuView from "./views/MenuView";

(async function() {
  const machine: StateMachine = new StateMachine(new MenuView());
  machine.addState(new CurrencyView());

  do {
    await machine.exec('');
  } while (machine.getCurState() !== 'END')
  return 0
})()