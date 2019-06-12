import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment as env } from "../environments/environment";
import { combineLatest } from "rxjs";
import { retry, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  token = env.githubKey;
  headers = new HttpHeaders({ Authorization: `token ${this.token}` });

  constructor(private http: HttpClient) {}

  getManyPulls = (repos: string[]) => {
    const observables = repos.map(path => this.getRepoPulls(path));
    return combineLatest(observables);
  };

  getRepoPulls = repo => {
    return this.http
      .get(this.pullsURLFromRepoPath(repo), { headers: this.headers })
      .pipe(
        retry(3),
        map((res: any[]) =>
          res.map(pull => {
            const {
              url,
              user,
              title,
              updated_at,
              html_url,
              diff_url,
              created_at,
              head
            } = pull as any;
            return {
              apiUrl: url,
              userName: user.login,
              title,
              repo: head.repo.name,
              diffUrl: diff_url,
              htmlUrl: html_url,
              createdAt: created_at,
              updatedAt: updated_at
            };
          })
        )
      );
  };

  // HELPERS
  pullsURLFromRepoPath = (repoPath: string) =>
    `https://api.github.com/repos/${repoPath}/pulls`;
}
