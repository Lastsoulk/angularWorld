import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template:` <p>
  hello-world works!
  </p>`,
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  name:string;

  constructor() { 
    this.name="XYZ"
  }

  ngOnInit(): void {
  }

}
