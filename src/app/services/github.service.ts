
import {Http, Response, Headers} from "@angular/http"
import {Injectable} from "@angular/core"
import "rxjs/add/operator/map"

@Injectable()
export class GitHubService {

	username: string

	constructor(private http:Http){
		

	}

	getUser(){
			return this.http.get("http://api.github.com/users/"+ this.username)
			.map(res => res.json())
		
		
	}
	getRepos(){
			return this.http.get("http://api.github.com/users/"+ this.username + "/repos")
			.map(res => res.json())
		
		
	}
	updateUser(userParam){
		this.username = userParam
	}
}