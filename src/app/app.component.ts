import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  strings : string[] = ['6667','i88i']

  constructor() {
    this.string$.pipe(
      filter(str => !str.split('').includes('0')),
    ).subscribe(str => this.strings.push(str))
  }

  private generateRandomStr() {
    const characters : string = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for ( let i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }
  checkPalindrome( str: string) {
    let reversStr = str.split('').reverse().join('')
    return reversStr === str;
  }
  checkStrOfDigits(str: string) {
    return /^\d+$/.test(str)
  }

  private string$ = new Observable<string>(observer => {
    setInterval(() => observer.next(this.generateRandomStr()), 3000)
  });

}
