import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  servicesList = ['a','b','c','a','b','c','a','b','c',  'a','b','c'];

  constructor() { }

  ngOnInit(): void {
  }

}
