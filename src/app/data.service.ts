import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService
{
  baseurl: string = 'http://localhost:8080/project/';
  constructor(private http: HttpClient) { }

  
  contacts = [
    {id: 1,img: "assets/img/team/tony-modified.png" ,
    first: "Tony", last: "Tony Kalalian", username: "@tony_kalalian", social: "Senior Full stack developer"},
    {id: 2,img: "assets/img/team/ali-modified.png",
    first: "Ali", last: "Ali Abdallah", username: "@ElKhalll", social: "IT Consultant at LIU"},
    {id: 3,img: "assets/img/team/slimfit.png" ,
    first: "", last: "Chadi Jawad", username: "@Chadijawad", social: "Software Java Developer"},
    {id: 4,img: "assets/img/team/team-1-modified.png",
    first: "", last: "Dr Eng Abdulrahman Sayed", username: "@AbdulRahmanSayed", social: "Chairman at La Havre Normandie"},
    {id: 5,img: "assets/img/team/nasser.png",
    first: "", last: "Nasser Ayoubi", username: "@Nasser_Ayoubi", social: "Senior software engineering"}
  ];


  public getContacts():Array<{id:number,img: string, first:string, last: string, username:string, social:string}>
  {
    return this.contacts;
  }
  public createContact(ct: {id:number,img: string, first:string, last: string, username:string, social:string})
  {
    this.contacts.push(ct)
  }
  public registeruser(firstname:any,lastname:any,email:any,password:any)
  { return this.http.post<any>(this.baseurl + '/register.php',
   {
     firstname,lastname,email,password}
   )
     .pipe(map(User => {
       return User;
     }));
 
 }
 public usercheck(email:any,password:any)
{
  return this.http.post<any>(this.baseurl + '/login.php',
  {
    email,password}
  )
  .pipe(map(User => {
    return User;
  }));
}
}