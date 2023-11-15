import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  public count = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.countSubject.subscribe(e => this.count = e.valueOf());
  }

}
