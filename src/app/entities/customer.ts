export class Customer {
  private _cid : number
  private _fullname : string
  private _age : number
  private _level : string

  constructor(cid: number, fullname: string, age: number, level: string) {
    this._cid = cid;
    this._fullname = fullname;
    this._age = age;
    this._level = level;
  }

  get cid(): number {
    return this._cid;
  }

  set cid(value: number) {
    this._cid = value;
  }

  get fullname(): string {
    return this._fullname;
  }

  set fullname(value: string) {
    this._fullname = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get level(): string {
    return this._level;
  }

  set level(value: string) {
    this._level = value;
  }
}
