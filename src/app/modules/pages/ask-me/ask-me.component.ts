import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MessagesService } from 'src/app/shared/services/messages/messages.service';
import { MessagesActionService } from 'src/app/shared/services/messages/messages-action.service';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-ask-me',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf, SharedModule],
  templateUrl: './ask-me.component.html',
  styleUrls: ['./ask-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AskMeComponent implements OnInit, OnDestroy {
  #messageService = inject(MessagesService)
  #messageActions = inject(MessagesActionService)
  titleFormControl = new FormControl({ value: '', disabled: false }, [Validators.required, Validators.minLength(3)])
  search$ = new Subject<string>()
  subscription: Subscription
  goodMessages = this.#messageService.goodMessages
  badMessages = this.#messageService.badMessages
  found$ = this.#messageActions.foundName$
  usedNumbers: number[] = []
  message = signal<string>('')


  ngOnInit(): void {
    this.searchByTitle()
  }

  searchByTitle() {
    this.subscription = this.search$.pipe(
      debounceTime(800),
      distinctUntilChanged()
    ).subscribe({
      next: (res) => {
        if (this.titleFormControl.valid) {
          if(this.checkName(res) === 1){
            this.message.set(this.getRandomGoodMessage())
            this.search$.next('')
            this.titleFormControl.setValue('')
          } else {
            this.message.set(this.getRandomBadMessage())
            this.search$.next('')
            this.titleFormControl.setValue('')
          }
        }
      }
    })
  }

  checkName(name: string) {
    let lowerCaseName = name.toLowerCase().trim()
    const index = this.#messageActions.names.indexOf(lowerCaseName)
    if (index !== -1) {
      this.#messageActions.setFoundName(true)
      return 1
    }
    else {
      this.#messageActions.setFoundName(false)
      return -1
    }
  }

  getRandomGoodMessage() {
    let randomNumber = Math.floor(Math.random() * (this.goodMessages().length - 1) + 1)
    if(this.usedNumbers.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * (this.goodMessages().length - 1) + 1)
    }
    this.usedNumbers.push(randomNumber)
    return this.goodMessages()[randomNumber].title
  }

  getRandomBadMessage() {
    let randomNumber = Math.floor(Math.random() * (this.badMessages().length - 1) )
    if(this.usedNumbers.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random() * (this.badMessages().length - 1) )
    }
    this.usedNumbers.push(randomNumber)
    return this.badMessages()[randomNumber].title
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
