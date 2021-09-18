import axios from 'axios'

interface Quote {
  date: Date,
  openValue: number,
  higherValue: number,	
  lowestValue: number,
  closeValue: number,
  adjustedValue: number,
  volume: number
}

const fromString = ( item: string ): Quote => {
  const rawArray: string[] = item.split(',')
  return {
    date: new Date( rawArray[0] ),
    openValue: Number( rawArray[1] ),
    higherValue: Number( rawArray[2] ),
    lowestValue: Number( rawArray[3] ),
    closeValue: Number( rawArray[4] ),
    adjustedValue: Number( rawArray[5] ),
    volume: Number( rawArray[6] )
  }
}


(async function() {
  const { data } = await axios.get('https://query1.finance.yahoo.com/v7/finance/download/BTC-USD?period1=1600387677&period2=1631923677&interval=1d&events=history&includeAdjustedClose=true')
  const dataArray = data.split('\n')
  const itemsArray: Quote[] = []
  for (let i = 1, length = dataArray.length; i < length; i++ ) {
    const item: Quote = fromString( dataArray[i] )
    itemsArray.push(item)
  }
  console.log(itemsArray)
  return 0
})()



