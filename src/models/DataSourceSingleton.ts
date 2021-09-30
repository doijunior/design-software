export default class DataSourceSingleton {
  private static instance: DataSourceSingleton
  private DB: any;
  private constructor(){
    this.DB = []
  }

  public static getInstance(){
    if(this.instance === undefined) this.instance = new DataSourceSingleton()
    return this.instance
  }

  public addData(data: any) {
    this.DB.push(data)
  }

}