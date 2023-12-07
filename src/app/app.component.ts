import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-do-angular-rest';
  constructor() {
    type HttpResponse = { code: number; body: string };

    const observable = new Observable<HttpResponse>((subscriber) => {
      subscriber.next({ code: 200, body: 'Hello' });
      subscriber.next({ code: 404, body: 'Not Found' });
      subscriber.next({ code: 200, body: 'World' });
      // subscriber.error(new Error('Something went wrong'));
      setTimeout(() => {
        subscriber.next({ code: 200, body: 'Hello again' });
        subscriber.complete();
      }, 3 * 1000);
    });
    observable.subscribe({
      next(response: HttpResponse) {
        console.log('response: ', response);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
  }
}
