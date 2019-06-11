import { Component, OnInit, SimpleChanges } from "@angular/core";
import { GithubService } from "../github.service";
import { environment as env } from "../../environments/environment";

@Component({
  selector: "prm-pr-list",
  templateUrl: "./pr-list.component.html",
  styleUrls: ["./pr-list.component.scss"]
})
export class PrListComponent implements OnInit {
  repos = env.repos;
  selectedRepo;
  constructor(private gitSvc: GithubService) {}

  ngOnInit() {}

  setRepo = repo => {
    this.selectedRepo = repo.name;
    this.gitSvc.getAllPulls().then(res => console.log(res));
  };
}
