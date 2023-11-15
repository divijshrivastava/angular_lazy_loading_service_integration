import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'experiment';
  count = 0;

  constructor(private userService: UserService, private router: Router){

  }

  public incrementCount(){
    this.userService.incrementCount();
    this.count = this.userService.count;
  }

  public navigateToAdminPage(){

    this.router.navigate(['/admin']);

  }

  ngOnInit(){
/*    this.userService.countSubject.subscribe(e => {
      this.count = e.valueOf();
    })
    */
  }
}
