import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  location = "North Lebanon, Mina";
  email = "tkalalian@gmail.com";
  phone = "+961 70 539 108";
  sender: {name: string, email: string, subject: string , message: string}
    = {name: "", email:"", subject: "", message: ""};
    Constructor (){}
    ngOnInit () {}

    send()
    {
      console.log(this.sender);
      alert("your message is sended");
      this.sender = {name: "", email:"", subject: "", message: ""};
    }
}
