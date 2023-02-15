import { Component, OnInit } from '@angular/core'
import { Page } from '@nativescript/core';

@Component({
  selector: 'Inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  img = 1;
  btn1 = true;
  btn2 = true;
  btn3 = true;
  pos = true;
  constructor(private page:Page) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    // Init your component properties here.
  }

  changePos(){
    this.pos = !this.pos;
  }

  changeColor1(){
    this.btn1 = !this.btn1;
  }
  changeColor2(){
    this.btn2 = !this.btn2;
  }
  changeColor3(){
    this.btn3 = !this.btn3;
  }

  changeImg() {
    if (this.img <= 1) {
      this.img = this.img + 1;
    }
  }
}
