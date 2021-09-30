
import Currency from '../models/Currency'
import axios from 'axios'

import DataSourceSingleton from '../models/DataSourceSingleton'

abstract class CurrencyAdapter {
  public static fromData(data: any): Currency[]{
    const currencies: Currency[] = []
    const date: Date = new Date(data['date'])
    let currencyFrom: string = ''
    for( const key of Object.keys(data) ) {
      if(key !== 'date') 
        currencyFrom = key
    }
    const allCurrencies = Object.keys(data[currencyFrom])

    for(let i = 0; i < allCurrencies.length; ++i) {
      const currencyTarget: string = allCurrencies[i]
      const ratio: number = data[currencyFrom][currencyTarget]
    
      currencies.push( new Currency(date, currencyFrom, currencyTarget, ratio) )
    }
    return currencies
  }
}

export default class CurrencyController {
  public static async getQuotes(day: string, month: string, year: string, coin: string) {
    const { data } = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${year}-${month}-${day}/currencies/${coin}.json`)

    const currencies: Currency[] = CurrencyAdapter.fromData(data)

    DataSourceSingleton.getInstance().addData(currencies)
  }
}