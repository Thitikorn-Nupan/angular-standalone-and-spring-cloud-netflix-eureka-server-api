import {Observable} from "rxjs";

export abstract class EntityRepo<T> {
   abstract reads() : Observable<T[]>
   abstract read(id : number) :  Observable<T>
}
