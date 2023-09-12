import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform:any;
  constructor(
    private fb: FormBuilder,
    private dataservice: DataService,
    private router: Router,
  ){
    this.registerform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password:['', Validators.required],
    })
  }
  ngOnInit(): void {
  }
  senddata(registerform:any)
  {
    this.dataservice.registeruser(
      registerform.value.firstname,
      registerform.value.lastname,
      registerform.value.email,
      registerform.value.password,
    )
    .pipe(first())
    .subscribe(data=>{
      alert(data);
  });
  }
}