import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estacion',
  templateUrl: './estacion.component.html',
  styleUrls: ['./estacion.component.css']
})
export class EstacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToLogin() {
    window.location.href='http://127.0.0.1:8000';
  }

}
