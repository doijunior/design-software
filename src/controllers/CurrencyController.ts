
import Currency from '../models/Currency'

abstract class CurrencyAdapter {
  public static fromData(data: any): Currency[]{
    const currencies: Currency[] = []
    const date: Date = new Date(data['date'])
    const currencyFrom: string = 'eur' //vamos deixar isso dinamico na próxima aula
    const allCurrencies = Object.keys(data[currencyFrom])

    for(let i = 0; i < allCurrencies.length; ++i) {
      const currencyTarget: string = allCurrencies[i]
      const ratio: number = data[currencyFrom][currencyTarget]
    
      currencies.push(new Currency(date, currencyFrom, currencyTarget, ratio))
    }
    return currencies
  }
}

export default class CurrencyController {
  public static save(data: any) {
    const currencies = CurrencyAdapter.fromData(data)

    for(let i = 0; i < currencies.length; ++i) {
      const qnty = 2;
      const converted = qnty * currencies[i].ratio
      console.log(`${qnty} de eur em ${currencies[i].to} é igual a ${converted}`)
    }
  }
}