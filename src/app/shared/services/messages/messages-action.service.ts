import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesActionService {

  names = ['mohamed', 'ahmed', 'ali', 'mahmoud']

  constructor() { }

  #foundName = new BehaviorSubject<boolean>(false)
  foundName$ = this.#foundName.asObservable()
  foundName = this.#foundName.getValue()
  setFoundName(found: boolean) {
    this.#foundName.next(found)
  }

}
