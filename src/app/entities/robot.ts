export class Robot {
  private _rid : number
  private _codename : string
  private _releaseDate : string
  private _price : number
  private _status : boolean

  constructor(rid: number, codename: string, releaseDate: string, price: number, status: boolean) {
    this._rid = rid;
    this._codename = codename;
    this._releaseDate = releaseDate;
    this._price = price;
    this._status = status;
  }

  get rid(): number {
    return this._rid;
  }

  set rid(value: number) {
    this._rid = value;
  }

  get codename(): string {
    return this._codename;
  }

  set codename(value: string) {
    this._codename = value;
  }

  get releaseDate(): string {
    return this._releaseDate;
  }

  set releaseDate(value: string) {
    this._releaseDate = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }
}
