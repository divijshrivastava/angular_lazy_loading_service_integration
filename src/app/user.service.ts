import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public count = 0;
  public countSubject = new BehaviorSubject(0);

  constructor() { }

  public incrementCount(){
    this.count += 1;
    this.countSubject.next(this.count);
  }
}
