import { Component } from "@angular/core";

@Component({
  selector: "prm-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>Welcome to {{ title }}!</h1>
    </div>
    <prm-pr-list></prm-pr-list>
  `,
  styles: []
})
export class AppComponent {
  title = "git-pr-app";
}
