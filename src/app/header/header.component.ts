import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'prm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() setView = new EventEmitter();

  loggedInUser$;
  constructor(private authSvc: AuthService) {
    this.loggedInUser$ = authSvc.loggedInUser$;
  }

  ngOnInit() {}

  onViewClicked = (view: string) => {
    this.setView.emit(view);
  };
}
