import axios from 'axios'
import CurrencyController from './controllers/CurrencyController'

(async function() {
  const date = '2021-08-17'
  const { data } = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/eur.json`)
  // console.log(data)
  CurrencyController.save(data)

  return 0
})()



