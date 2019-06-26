import { Component } from '@angular/core';

@Component({
  selector: 'prm-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <prm-header (setView)="setView($event)"></prm-header>
    <div style="text-align:center">
      <h1>Welcome to {{ title }}!</h1>
    </div>
    <prm-pr-list *ngIf="viewing === 'pr-list'"></prm-pr-list>
    <prm-firebase-setup *ngIf="viewing === 'setup'"></prm-firebase-setup>
    <prm-auth *ngIf="viewing === 'auth'"></prm-auth>
  `,
  styles: []
})
export class AppComponent {
  viewing: Views = 'auth';
  title = 'git-pr-app';

  setView = (view: Views) => {
    console.log(view);
    this.viewing = view;
  };
}

type Views = 'pr-list' | 'setup' | 'auth';
