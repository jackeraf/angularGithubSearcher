import { Component } from '@angular/core';
import { GitHubService } from "../services/github.service"
import "rxjs/Rx"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {

	user: any
  repos: any
  username: string

  constructor(private gitSrvc: GitHubService) {
    this.user = false
  }

  
  searchUser(){
    this.gitSrvc.updateUser(this.username)
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
