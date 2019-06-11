import { Injectable } from "@angular/core";
import { environment as env } from "../environments/environment";
import * as prs from "pr-monitor";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  token = env.githubKey;

  getAllPulls = async () => {
    const repos = env.repos.map(repo => repo.path);
    console.log("repos", repos);
    try {
      const data = await prs(env.githubKey, repos, { count: false });

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // getRepoPulls = repo => {
  //   return this.http
  //     .get(this.pullsURLFromRepo(repo), { headers: this.headers })
  //     .pipe(retry(3));
  // };

  // HELPERS
  pullsURLFromRepo = repo => `https://api.github.com/repos/${repo}/pulls`;
}
