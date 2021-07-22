import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };

  homeSlider={items: 1, dots: true, nav:true};
 
  goToLogin() {
    window.location.href='http://127.0.0.1:8000';
  }


}
