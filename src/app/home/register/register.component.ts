import { Component, OnInit } from '@angular/core'
import { Page } from '@nativescript/core';

@Component({
  selector: 'Register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  var1 = 1
  img1 = 1
  img2 = 1
  img3 = 1
  img4 = 1
  img5 = 1
  img6 = 1
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

  changeColor1() {
    if (this.img1 === 1) {
      this.img1 = 2
    } else {
      this.img1 = 1
    }
  }
  changeColor2() {
    if (this.img2 === 1) {
      this.img2 = 2
    } else {
      this.img2 = 1
    }
  }
  changeColor3() {
    if (this.img3 === 1) {
      this.img3 = 2
    } else {
      this.img3 = 1
    }
  }
  changeColor4() {
    if (this.img4 === 1) {
      this.img4 = 2
    } else {
      this.img4 = 1
    }
  }
  changeColor5() {
    if (this.img5 === 1) {
      this.img5 = 2
    } else {
      this.img5 = 1
    }
  }
  changeColor6() {
    if (this.img6 === 1) {
      this.img6 = 2
    } else {
      this.img6 = 2
    }
  }
}
