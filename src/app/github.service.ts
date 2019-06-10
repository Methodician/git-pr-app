import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment as env } from "../environments/environment";
import { retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  token = env.githubKey;
  headers = new HttpHeaders({ Authorization: `token ${this.token}` });

  constructor(private http: HttpClient) {}

  getRepoPulls = repo => {
    return this.http
      .get(this.pullsURLFromRepo(repo), { headers: this.headers })
      .pipe(retry(3));
  };

  // HELPERS
  pullsURLFromRepo = repo => `https://api.github.com/repos/${repo}/pulls`;
}
