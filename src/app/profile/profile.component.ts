import { Component, OnInit } from '@angular/core';
import { GitHubService } from "../services/github.service"
import "rxjs/Rx"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string
	user: string
  repos: any
  constructor(private gitSrvc: GitHubService) {

  }

  ngOnInit() {
    this.gitSrvc.changeUser(this.username)
  	this.gitSrvc.getUser().subscribe(
      user => {
        this.user = user
      }
    )
    this.gitSrvc.getRepos().subscribe(
  		repos => {
  			this.repos = repos
  		}
  	)
  }

}
