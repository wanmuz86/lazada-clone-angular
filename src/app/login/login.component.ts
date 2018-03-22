import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {UserService} from '../user.service'
import {Router} from '@angular/router'
import {User} from '../user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService:AuthService, 
  	public router: Router, public userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(formValue){
	console.log(formValue);
}

loginWithGoogle(){
	this.authService.loginWithGoogle().then(()=>{
    this.authService.afAuth.authState.subscribe((data)=>{
      console.log(data);
      let newuser : User = {
        name:data.displayName,
        email:data.email,
        address:""
      }
      this.userService.addUser(newuser);
    this.router.navigateByUrl('/products');
    })
		
	})

}


}
