import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ol = [
    'An HTML template that declares what renders on the page',
    'A JavaScript class that defines the behavior',
    'A CSS selector that defines how the component is used in a template',
    ' Optionally, CSS styles applied to the template'
  ]
  images = [
    '../../assets/img/clients/client-1.png',
    '../../assets/img/clients/client-2.png',
    '../../assets/img/clients/client-3.png',
    '../../assets/img/clients/client-4.png',
    '../../assets/img/clients/client-5.png',
    '../../assets/img/clients/client-6.png'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
