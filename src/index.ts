import axios from 'axios'
interface Quote {
  date: Date,
  open: number,
  high: number,	
  low: number,
  close: number,
  adjusted: number,
  volume: number
}


const fromString = ( item: string ): Quote => {
  const rawArray: string[] = item.split(',')
  return {
    date: new Date( rawArray[0] ),
    open: Number( rawArray[1] ),
    high: Number( rawArray[2] ),
    low: Number( rawArray[3] ),
    close: Number( rawArray[4] ),
    adjusted: Number( rawArray[5] ),
    volume: Number( rawArray[6] )
  }
}

( async() => {
  const { data } = await axios.get('https://query1.finance.yahoo.com/v7/finance/download/BTC-USD?period1=1600309522&period2=1631845522&interval=1d&events=history&includeAdjustedClose=true')
  const dataArray = data.split('\n')
  const itemsArray = dataArray.map((item: string) => {
    return fromString(item)
  })

  console.log(itemsArray)

})()
