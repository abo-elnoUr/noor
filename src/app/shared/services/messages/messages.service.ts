import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { toSignal } from '@angular/core/rxjs-interop'
import { shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment.development';
const api = `${environment.api}`


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor( private http: HttpClient ) { }


  searchGoodMessage(title: string) {
    return this.http.get<Message>(`${api}/goodMessages?q=${title}`)
  }

  searchBadMessage(title: string) {
    return this.http.get<Message>(`${api}/badMessages?q=${title}`)
  }

  #goodMessages$ = this.http.get<Message[]>(`${api}/goodMessages`).pipe(
    shareReplay(1)
  )

  goodMessages = toSignal(this.#goodMessages$, { initialValue: [] as Message[] })

  #badMessages$ = this.http.get<Message[]>(`${api}/badMessages`).pipe(
    shareReplay(1)
  )

  badMessages = toSignal(this.#badMessages$, { initialValue: [] as Message[] })

}
