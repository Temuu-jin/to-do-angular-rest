import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'to-do-angular-rest';
  private user: User = {
    id: 5,
    name: 'Temuujin',
    username: 'Temu',
    email: 'temu@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    // this.onUpdateUser();
    this.onGetUsers();
    // this.onGetUser();
    // this.onCreateUser();
    this.onDeleteUser();
  }
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => {
        console.table(response);
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('complete getting all');
      }
    );
  }
  onGetUser(): void {
    this.userService.getUser(1).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('complete getting');
      }
    );
  }
  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('complete creating');
      }
    );
  }
  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('complete updating');
      }
    );
  }
  onDeleteUser(): void {
    this.userService.deleteUser(this.user.id!).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('complete deleted');
      }
    );
  }
}

// const observable = new Observable<HttpResponse>((subscriber) => {
//   subscriber.next({ code: 200, body: 'Hello' });
//   subscriber.next({ code: 404, body: 'Not Found' });
//   subscriber.next({ code: 200, body: 'World' });
//   // subscriber.error(new Error('Something went wrong'));
//   setTimeout(() => {
//     subscriber.next({ code: 200, body: 'Hello again' });
//     subscriber.complete();
//   }, 3 * 1000);
// });
// observable.subscribe({
//   next(response: HttpResponse) {
//     console.log('response: ', response);
//   },
//   error(err) {
//     console.error('something wrong occurred: ' + err);
//   },
//   complete() {
//     console.log('done');
//   },
// });
