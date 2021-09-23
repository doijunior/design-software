export default class Currency {
  date: Date
  from: string
  to: string
  ratio: number
  
  public constructor(date: Date, from: string, to: string, ratio: number){
    this.date = date
    this.from = from
    this.to = to
    this.ratio = ratio
  }
}