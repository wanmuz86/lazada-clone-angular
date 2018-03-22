import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  constructor(public authService:AuthService, 
  	public router : Router ) { }

  ngOnInit() {
  }

  logout(){
	this.authService.logout().then(()=>{
		this.router.navigateByUrl('/login')
	});
}

}
