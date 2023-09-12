import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform:any;

  constructor(
    private fb: FormBuilder,
    private dataservice: DataService,
    private router: Router,
  ){
    this.loginform = this.fb.group({
      email :['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
  })
}

  ngOnInit(): void{
    
  }
    logindata(loginform:any)
    {
      this.dataservice.usercheck(
        loginform.value.email,
        loginform.value.password,
      )
      .pipe(first())
      .subscribe(res=>{
      this.router.navigate([res]);
      alert(res);
        
      });
  }
  


}