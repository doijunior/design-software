export default class Currency {
  private date: Date
  private from: string
  private to: string
  private ratio: number
  
  public constructor(date: Date, from: string, to: string, ratio: number){
    this.date = date
    this.from = from
    this.to = to
    this.ratio = ratio
  }
  public getTo(){
    return this.to;
  }

  public getRatio(){
    return this.ratio
  }
}