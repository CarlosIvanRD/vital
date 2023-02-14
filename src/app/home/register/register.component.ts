import { Component, OnInit } from '@angular/core'
import { Page } from '@nativescript/core';

@Component({
  selector: 'Register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})  
export class RegisterComponent implements OnInit {

  var1 = 1
  constructor(private page:Page) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    // Init your component properties here.
  }
  cambiarvar1() {
    this.var1 = 2;
  }
}
