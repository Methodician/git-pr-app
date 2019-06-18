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
  prs: Object[];
  constructor(private gitSvc: GithubService) {}

  ngOnInit() {
    this.allRepos();
  }

  allRepos = () => {
    const paths = this.repos.map(repo => repo.path);
    this.gitSvc
      .getManyPulls(paths)
      .subscribe(res => (this.prs = [].concat.apply([], res)));
  };

  setRepo = repo => {
    this.selectedRepo = repo.name;
    this.gitSvc.getRepoPulls(repo.path).subscribe(res => console.log(res));
  };
}
